import { useGLTF } from "@react-three/drei";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
  const targetRef = React.useRef();
  const { scene } = useGLTF("/model.gltf");
  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef}>
      <primitive object={scene}></primitive>
    </mesh>
  );
};

export default Target;
