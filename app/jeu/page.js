"use client"
import { useState, useEffect } from "react"

const jeu = () => {

    const [number, setNumber] = useState(0)

    const increment = () => {
        setNumber(number + 1)
    }

    const decrement = () => {
        setNumber(number - 1)
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <div>{number}</div>
            <button onClick={() => increment()}>increment</button>
            <button onClick={() => decrement()}>decrement</button>

        </>
    )
}

export default jeu
