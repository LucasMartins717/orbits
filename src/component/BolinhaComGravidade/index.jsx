import { useEffect, useState } from 'react';
import Bolinha from '../Bolinha';
import { useContexto } from '../../context/useContexto';

const BolinhaComGravidade = () => {

    const { ballSize,
        numBalls,
        maxDistance,
        gravity,
        friction,
    } = useContexto();

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;


    //Criar posição inicial das bolinhas
    const createBallCoordinates = (numBalls, ballSize, screenWidth, screenHeight) => {
        const balls = [];
        const gridSize = Math.ceil(Math.sqrt(numBalls));
        const spacing = ballSize * 1.5;
        const offsetX = (screenWidth - (gridSize - 1) * spacing) / 2;
        const offsetY = (screenHeight - (gridSize - 1) * spacing) / 2;

        for (let i = 0; i < numBalls; i++) {
            const row = Math.floor(i / gridSize);
            const col = i % gridSize;
            const x = offsetX + col * spacing;
            const y = offsetY + row * spacing;
            balls.push({ x, y, originX: x, originY: y, size: ballSize, vx: 0, vy: 0 });
        }

        return balls;
    };


    const [balls, setBalls] = useState(createBallCoordinates(numBalls, ballSize, screenWidth, screenHeight));

    
    //Atualizar posição das bolinhas
    useEffect(() => {
        const updatePositions = () => {
            setBalls(prevBalls => {

                let newBalls = prevBalls.map(ball => ({ ...ball }));

                for (let i = 0; i < newBalls.length; i++) {
                    for (let j = i + 1; j < newBalls.length; j++) {
                        const ball1 = newBalls[i];
                        const ball2 = newBalls[j];
                        const dx = ball2.x - ball1.x;
                        const dy = ball2.y - ball1.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < ballSize) {
                            const angle = Math.atan2(dy, dx);
                            const sin = Math.sin(angle);
                            const cos = Math.cos(angle);

                            let vx1 = ball1.vx * cos + ball1.vy * sin;
                            let vy1 = ball1.vy * cos - ball1.vx * sin;

                            let vx2 = ball2.vx * cos + ball2.vy * sin;
                            let vy2 = ball2.vy * cos - ball2.vx * sin;

                            [vx1, vx2] = [vx2, vx1];


                            ball1.vx = vx1 * cos - vy1 * sin;
                            ball1.vy = vy1 * cos + vx1 * sin;
                            ball2.vx = vx2 * cos - vy2 * sin;
                            ball2.vy = vy2 * cos + vx2 * sin;

                            const overlap = 0.5 * (ballSize - distance + 1);
                            ball1.x -= overlap * cos;
                            ball1.y -= overlap * sin;
                            ball2.x += overlap * cos;
                            ball2.y += overlap * sin;
                        }
                    }
                }


                return newBalls.map(ball => {

                    const dx = ball.originX - ball.x;
                    const dy = ball.originY - ball.y;

                    const forceX = gravity * dx;
                    const forceY = gravity * dy;

                    let newVx = (ball.vx + forceX) * friction;
                    let newVy = (ball.vy + forceY) * friction;

                    let newX = ball.x + newVx;
                    let newY = ball.y + newVy;

                    if (newX <= 0 || newX + ball.size >= screenWidth) {
                        newX = Math.max(0, Math.min(screenWidth - ball.size, newX));
                        newVx *= -1;
                    }
                    if (newY <= 0 || newY + ball.size >= screenHeight) {
                        newY = Math.max(0, Math.min(screenHeight - ball.size, newY));
                        newVy *= -1;
                    }

                    return { ...ball, x: newX, y: newY, vx: newVx, vy: newVy };
                });
            });
        };

        const interval = setInterval(updatePositions, 20);

        return () => clearInterval(interval);
    }, [screenWidth, screenHeight])

    //Atualizar posição do mouse e interação com as bolinhas
    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            setBalls(prevBalls => {
                return prevBalls.map(ball => {
                    const dx = ball.x - mouseX;
                    const dy = ball.y - mouseY;
                    const distance = Math.sqrt(dx * dx + dy * dy);


                    if (distance < maxDistance) {
                        const maxSpeed = 265;
                        const force = (maxDistance - distance) / maxDistance * maxSpeed;

                        const vx = dx / distance * force;
                        const vy = dy / distance * force;

                        let newX = ball.x + vx;
                        let newY = ball.y + vy;

                        newX = Math.max(0, Math.min(screenWidth - ball.size, newX));
                        newY = Math.max(0, Math.min(screenHeight - ball.size, newY));

                        return { ...ball, x: newX, y: newY, vx, vy };

                    }
                    return ball;
                });
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [])

    return (
        <div>
            {balls.map((ball, index) => (
                <Bolinha key={index} x={ball.x} y={ball.y} size={ball.size} />
            ))}
        </div>
    );
};

export default BolinhaComGravidade;