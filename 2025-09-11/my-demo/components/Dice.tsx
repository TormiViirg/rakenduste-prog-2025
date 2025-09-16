import { useState } from "react"

function Dice() {
    const [dieNum, setDie] = useState(1)
    function rollDice() {
        setDie(Math.ceil(Math.random() * 6))
    }

  return (
    <div id="spam">
      <button onClick={rollDice}>Cast the die</button>
      <br />
      {dieNum}
    </div>
  )
}


export default Dice