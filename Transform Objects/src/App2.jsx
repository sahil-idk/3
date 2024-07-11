/* eslint-disable react/no-unknown-property */

import "./App.css";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

function App2() {
  // const [count, setCount] = useState(0)

  return (
    <Canvas
      style={{ height: "100vh" }}
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] }}
    >
      <axesHelper 
      args={[10]}
      position={[0, 3, 0]}
      />
      <group>
        <mesh
          scale={[6, 1, 2]}
          position={[-7, 0, 0]}
          rotation={[Math.PI / 4, Math.PI / 4, 0, "XYZ"]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={"red"} />
        </mesh>
        <mesh scale={[6, 1, 2]} rotation={[Math.PI / 4, Math.PI / 4, 0, "YXZ"]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={"red"} />
        </mesh>
        <mesh
          scale={[6, 1, 2]}
          position={[7, 0, 0]}
          rotation={[Math.PI / 4, Math.PI / 4, 0, "XZY"]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={"red"} />
        </mesh>
      </group>
    </Canvas>
  );
}

export default App2;

//rotate the objects

//quaternion approach
//mathematical way

//perspective camera
