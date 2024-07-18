/* eslint-disable react/no-unknown-property */

import { useEffect, useRef } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";


function App() {

  const groupRef = useRef();
  const meshRef1 = useRef();
   useEffect(() => {
    gsap.to(groupRef.current.position, {
      duration: 1,
      delay: 1,
      x: 2,
      repeat: -1,
      yoyo: true,
    })},[]);
  useFrame(() => {
    // groupRef.current.rotation.x += 1 * delta
    // const elapsedTime = clock.getElapsedTime();
    groupRef.current.rotation.y += 0.1;
    // meshRef1.current.position.y = Math.sin(elapsedTime);
    // meshRef1.current.position.x = Math.cos(elapsedTime);
  })

  return (
     
      <group
      ref={groupRef}
      // position={[1,1,0]}
      scale={[0.5,0.5,0.5]}
      
      >
        <axesHelper args={[5]} />
        <mesh
        ref={meshRef1}
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
  
  );
}

export default App;

//rotate the objects

//quaternion approach
//mathematical way

//perspective camera
