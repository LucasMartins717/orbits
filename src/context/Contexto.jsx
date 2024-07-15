import { useState } from "react";
import { createContext } from "react";

export const Contexto = createContext();
Contexto.displayName = "Contexto"

export const ContextoProvider = ({ children }) => {

    const [ballSize, setBallSize] = useState(20);
    const [numBalls, setNumBalls] = useState(100);
    const [maxDistance, setMaxDistance] = useState(100);
    const [gravity, setGravity] = useState(0.03);
    const [friction, setFriction] = useState(0.8);
    const [slowdownFactor, setSlowdownFactor] = useState(0.96);

    const [gravityActive, setGravityActive] = useState(false); //
    const [slowdownActive, setSlowdownActive] = useState(true); //
    const [collisionActive, setCollisionActive] = useState(false) //X
    const [sideMenuActive, setSideMenuActive] = useState(false); //X

    return (
        <Contexto.Provider value={{
            ballSize,
            setBallSize,
            numBalls,
            setNumBalls,
            maxDistance,
            setMaxDistance,
            gravity,
            setGravity,
            friction,
            setFriction,
            gravityActive,
            setGravityActive,
            slowdownActive,
            setSlowdownActive,
            collisionActive,
            setCollisionActive,
            slowdownFactor,
            setSlowdownFactor,
            sideMenuActive,
            setSideMenuActive,
        }}>
            {children}
        </Contexto.Provider>
    )
}