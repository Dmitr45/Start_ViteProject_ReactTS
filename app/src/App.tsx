import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styleAPP from  './app.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styleAPP.wrapper}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className={styleAPP.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={styleAPP.logo} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styleAPP.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styleAPP.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
