/* eslint-disable react/no-unknown-property */

import { useEffect, useRef } from "react";
import "./App.css";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function App() {

  // const groupRef = useRef();
  const meshRef1 = useRef();
  const cameraRef = useRef();
   useEffect(() => {
},[]);
  useFrame(() => {
    // groupRef.current.rotation.x += 1 * delta
    // const elapsedTime = clock.getElapsedTime();
    // meshRef1.current.rotation.y += 0.01;
    // groupRef.current.rotation.y += 0.1;
    // meshRef1.current.position.y = Math.sin(elapsedTime);
    // meshRef1.current.position.x = Math.cos(elapsedTime);
    // cameraRef.current.position.x = cursor.x * 10;
    // cameraRef.current.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
    // cameraRef.current.position.y = Math.cos(cursor.y * Math.PI * 2) * 3;

    // cameraRef.current.position.y = -(cursor.y * 10);
    // cameraRef.current.lookAt(meshRef1.current.position);
  })
  const sizes ={
    width: 800,
    height: 600
  }
  const cursor = {
    x: 0,
    y: 0
  }
  window.addEventListener("mousemove", (e) => {
    cursor.x = e.clientX/sizes.width-0.5;
    cursor.y = e.clientY/sizes.height-0.5;
    console.log(cursor.x);  
  });


  return (
    <>
    <axesHelper args={[5]} />
    <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 5]} fov={75} near={0.1} far={1000} />
    <OrbitControls enableDamping />
       
        <mesh ref={meshRef1} scale={[1, 1, 1]} >
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={"red"} />
        </mesh>
        {/* <mesh
          scale={[1, 1, 1]}
          position={[7, 0, 0]}
          
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={"red"} />
        </mesh> */}
        
        </>
  
  );
}

export default App;

//rotate the objects

//quaternion approach
//mathematical way

//perspective camera
