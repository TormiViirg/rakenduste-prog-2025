import Counter from "../components/Counter"
import Dice from "../components/Dice"
import StaticText from "../components/CopyWright"
import { useState } from "react"

function App() {
    const [show, setShow] = useState<boolean>(true)
    return (
        <>
            <Counter/>
            <StaticText/>
            <Dice/>
        </>
    )
}

export default App
