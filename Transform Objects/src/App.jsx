/* eslint-disable react/no-unknown-property */

import "./App.css";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Canvas
      style={{ height: "100vh" }}
      
    >
      <axesHelper 
      args={[10]}
      
      />
      <group
      position={[1,1,0]}
      scale={[0.5,0.5,0.5]}
      rotation={[Math.PI / 4, Math.PI / 4, 0]}
      >
        <mesh
          scale={[1, 1, 1]}
          position={[-7, 0, 0]}
           
        >
          <boxGeometry  args={[1, 1, 1]} />
          <meshBasicMaterial wireframe color={"red"} />
        </mesh>
        <mesh scale={[1, 1, 1]} >
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={"red"} />
        </mesh>
        <mesh
          scale={[1, 1, 1]}
          position={[7, 0, 0]}
          
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={"red"} />
        </mesh>
      </group>
    </Canvas>
  );
}

export default App;

//rotate the objects

//quaternion approach
//mathematical way

//perspective camera
