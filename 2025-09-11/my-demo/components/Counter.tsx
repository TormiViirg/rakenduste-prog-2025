import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  function increaseCounter(amount: number){
    setCount(count => count + amount)
  }
  return (
    <>
        <h1>Vite you + React me + and her</h1>
        <div className="card">
          <button onClick={() => increaseCounter(10)}>
              count is {count}
          </button>
        </div>
    </>
  )
}

export default Counter
