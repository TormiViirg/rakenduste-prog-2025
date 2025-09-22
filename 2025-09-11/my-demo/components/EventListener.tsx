import { useEffect } from "react"

const eventListener = () => {
    const clickHandler => (event: MouseEvent) => {
        console.log({ x: event.clientX, y: event.clientY })
    }
    
    useEffect(() => {
        window.addEventListener("click", clickHandler)

        return () =>
    } )
}