/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: DatSketch (https://sketchfab.com/DatSketch)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/apple-iphone-13-pro-max-4328dea00e47497dbeac73c556121bc9
Title: Apple iPhone 13 Pro Max
*/

import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";
import { gsap } from "gsap";

export default function Iphone13(props) {
  const { nodes, materials } = useGLTF("./models/apple_iphone_13_pro_max.glb");
  return (
    <Float>
      <group
        {...props}
        dispose={null}
        rotation={[0, 0, 0]}
        ref={(group) => {
          if (group) {
            gsap.to(group.rotation, {
              y: "+=6.28",
              duration: 10,
              repeat: -1,
              ease: "linear",
            });
          }
        }}
      >
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group>
              <group scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Frame_Frame_0.geometry}
                  material={materials.Frame}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Frame_Frame2_0.geometry}
                  material={materials.Frame2}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Frame_Port_0.geometry}
                  material={materials.Port}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Frame_Antenna_0.geometry}
                  material={materials.Antenna}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Frame_Mic_0.geometry}
                  material={materials.material}
                />
                <group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Body_Mic_0.geometry}
                    material={materials.material}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Body_Bezel_0.geometry}
                    material={materials.Bezel}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Body_Body_0.geometry}
                    material={materials.Body}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Body_Wallpaper_0.geometry}
                    material={materials.Wallpaper}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Body_Camera_Glass_0.geometry}
                    material={materials.Camera_Glass}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Body_Lens_0.geometry}
                    material={materials.Lens}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Body_Material_0.geometry}
                    material={materials.Material}
                  />
                </group>
                <group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera_Body_0.geometry}
                    material={materials.Body}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera_Glass_0.geometry}
                    material={materials.Glass}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera_Camera_Frame001_0.geometry}
                    material={materials["Camera_Frame.001"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera_Mic_0.geometry}
                    material={materials.material}
                  />
                </group>
                <group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Body001_Screen_Glass_0.geometry}
                    material={materials.Screen_Glass}
                  />
                </group>
                <group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Button_Frame_0.geometry}
                    material={materials.Frame}
                  />
                </group>
                <group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle003_Frame_0.geometry}
                    material={materials.Frame}
                  />
                </group>
                <group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Apple_Logo_Logo_0.geometry}
                    material={materials.Logo}
                  />
                </group>
                <group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera001_Body_0.geometry}
                    material={materials.Body}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera001_Gray_Glass_0.geometry}
                    material={materials.Gray_Glass}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera001_Flash_0.geometry}
                    material={materials.Flash}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera001_Port_0.geometry}
                    material={materials.Port}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera001_Camera_Frame_0.geometry}
                    material={materials.Camera_Frame}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera001_Camera_Glass_0.geometry}
                    material={materials.Camera_Glass}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera001_Lens_0.geometry}
                    material={materials.Lens}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera001_Black_Glass_0.geometry}
                    material={materials.Black_Glass}
                  />
                </group>
                <group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera003_Material002_0.geometry}
                    material={materials["Material.002"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </Float>
  );
}

useGLTF.preload("./models/apple_iphone_13_pro_max.glb");
