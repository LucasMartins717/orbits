import { useContext } from "react"
import { Contexto } from "./Contexto"

export const useContexto = () => {

    const { ballSize,
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

    } = useContext(Contexto)

    return {
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
    }
}