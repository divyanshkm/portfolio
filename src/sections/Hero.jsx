import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";

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
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <PerspectiveCamera
            makeDefault
            position={(0, 0, 3)}
          ></PerspectiveCamera>
          <HackerRoom></HackerRoom>
        </Canvas>
      </div>
    </section>
  );
}

export default Hero;
