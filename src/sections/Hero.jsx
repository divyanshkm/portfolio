import {
  PerspectiveCamera,
  OrbitControls,
  CameraControls,
  OrthographicCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Pc from "../components/Pc";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Iphone16 from "../components/Iphone16";
import Iphone13 from "../components/Iphone13";
import Button from "../components/Button";

function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          HI, I AM DIVYANSH<span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient ">
          On a mission to build meaningful products that make a difference
        </p>
      </div>
      <div className="w-full h-full absolute inset-0 ">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls></OrbitControls>
            <ambientLight intensity={3} />

            <perspectiveCamera
              makeDefault
              position={[0, 0, 20]}
            ></perspectiveCamera>
            {/* <Pc
              scale={[0.5, 0.5, 0.5]}
              position={[1, -2, 0]}
              style={{
                transform: `scale(${window.innerWidth < 768 ? 0.3 : 0.5})`,
              }}
            ></Pc> */}
            <Pc scale={0.5} position={[1, -2, 0]}></Pc>
            <group>
              <Target
                position={[-4.5, -2, 0]}
                scale={[0.5, 0.5, 0.5]}
                rotation={[0, Math.PI / 5, 0]}
              ></Target>
              <ReactLogo
                position={[3.9, -1.3, 0.6]}
                scale={0.08}
                rotation={[0, -Math.PI / 5, 0]}
              ></ReactLogo>
              <Iphone16
                position={[-2.7, 0, 0.6]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.8}
              ></Iphone16>
              <Iphone13 position={[2, -1, 0]}></Iphone13>
            </group>
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's Work Together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          ></Button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
