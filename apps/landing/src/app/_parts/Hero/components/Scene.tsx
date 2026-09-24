"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import Jar from "./Jar";
import { Suspense } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import { MotionValue } from "framer-motion";

import Camera from "./Camera";

interface Props {
  scrollYProgress: MotionValue<number>;
  height?: string;
  frustumSize?: number;
}

const Scene = ({ scrollYProgress, height = "100vh", frustumSize }: Props) => {
  return (
    <Canvas shadows dpr={[1, 2]} style={{ height }}>
      <Camera frustumSize={frustumSize} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        enableDamping={true}
        dampingFactor={0.01}
      />
      <Suspense fallback={null}>
        <EffectComposer>
          <Bloom intensity={0.2} width={1000} height={1000} kernelSize={5} />
        </EffectComposer>
        <Jar scrollYProgress={scrollYProgress} />

        <Environment files="/hdri/empty_warehouse_01_1k.hdr" />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
