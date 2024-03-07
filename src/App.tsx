import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PerspT from "perspective-transform";

const calculatePerspectiveTransform = () => {
  const newCorners = [0, 0, 500, 0, 500, 1000, 0, 1000];
  const pixelCorners = [0, 0, 500, 0, 500, 1000, 0, 1000];

  const perspectiveTransform = PerspT(pixelCorners, newCorners);
  return perspectiveTransform.coeffs;
}

function App() {
  const [count, setCount] = useState(0)

  calculatePerspectiveTransform();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
