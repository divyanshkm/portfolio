import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import CanvasLoader from "../components/CanvasLoader";
import WebDevModel from "../components/WebDevModel";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const globeEl = useRef();
  const handleCopy = () => {
    navigator.clipboard.writeText("devmahavarwork@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  useEffect(() => {
    globeEl.current.pointOfView({ lat: 21.17, lng: 72.83, altitude: 2 });
  }, []);
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3  xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            ></img>
            <div>
              <p className="grid-headtext">Hi, I am Divyansh</p>
              <p className="grid-subtext">
                With 2 Years of experience, I have honed my skills in front-end
                development. I am passionate about creating visually appealing
                and user-friendly web experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Canvas className="h-full w-full">
              <Suspense fallback={<CanvasLoader />}>
                <ambientLight intensity={3} />
                <perspectiveCamera
                  makeDefault
                  position={[0, 0, 20]}
                ></perspectiveCamera>
                <WebDevModel position={[0, -2, -4]} scale={1.6}></WebDevModel>
              </Suspense>
            </Canvas>
            <div>
              <p className="grid-headtext">Tech stack</p>
              <p className="grid-subtext">
                I specialize in developing visually appealing and user-friendly
                web applications using React, Three.js, and Tailwindcss. I have
                a strong understanding of the latest front-end technologies and
                trends, and I am always looking to expand my skills.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit  flex justify-center items-center">
              <Globe
                ref={globeEl}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              ></Globe>
            </div>
            <div>
              <p className="grid-headtext"> Where I work from</p>
              <p className="grid-subtext">
                I&apos;m a remote worker based in India, and I work with clients
                and teams from all over the world.
              </p>
              <a href="#contact">
                <Button
                  name="Contact me"
                  isBeam
                  containerClass="w-full mt-10 "
                ></Button>
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            ></img>
            <div>
              <p className="grid-headtext">
                My Passion for Frontend Development
              </p>
              <p className="grid-subtext">
                I love solving complex problems and creating intuitive things
                through code. Coding is a way to express my creativity and
                problem-solving skills. I am passionate about creating visually
                appealing and user-friendly web experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            ></img>
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                ></img>
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  devmahavarwork@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
