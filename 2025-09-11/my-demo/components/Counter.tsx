import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  function updateCounter(amount: number){
    setCount(count => count + amount)
  }
  return (
    <>
        <h1>Vite (you) + React (me) + and her</h1>
        <div className="card">

          <div>{count}</div>

          <button onClick={() => updateCounter(100)}>
              +100
          </button>

          <button onClick={() => updateCounter(50)}>
              +50
          </button>
          
          <button onClick={() => updateCounter(25)}>
              +25
          </button>

          <button onClick={() => updateCounter(1)}>
              +1
          </button>

          <button onClick={() => updateCounter(-1)}>
              -1
          </button>
          
          <button onClick={() => updateCounter(-25)}>
              -25
          </button>
          
          <button onClick={() => updateCounter(-50)}>
              -50
          </button>

          <button onClick={() => updateCounter(-100)}>
              -100
          </button>
          
        </div>
    </>
  )
}

export default Counter
