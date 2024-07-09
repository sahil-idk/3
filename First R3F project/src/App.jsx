/* eslint-disable react/no-unknown-property */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Canvas
    camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 3] }}
    >
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color={'red'}/>
    </mesh>
     
    </Canvas>
  )
}

export default App
