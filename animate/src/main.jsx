import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Canvas } from '@react-three/fiber'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Canvas
      style={{ height: "100vh" }}
      
    >
    <App />
    </Canvas>
  </React.StrictMode>,
)
