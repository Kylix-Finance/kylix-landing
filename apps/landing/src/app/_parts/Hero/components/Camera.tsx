"use client";

import { OrthographicCamera } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { OrthographicCamera as ThreeOrthographicCamera } from "three";

interface Props {
  frustumSize?: number;
}

const Camera = ({ frustumSize = 5 }: Props) => {
  const { viewport } = useThree();
  const cameraRef = useRef<ThreeOrthographicCamera>(null);

  useEffect(() => {
    if (cameraRef.current) {
      const aspect = viewport.width / viewport.height;

      cameraRef.current.left = (frustumSize * aspect) / -2;
      cameraRef.current.right = (frustumSize * aspect) / 2.01;
      cameraRef.current.top = frustumSize / 2.08;
      cameraRef.current.bottom = frustumSize / -2.08;
      cameraRef.current.updateProjectionMatrix();
    }
  }, [viewport, frustumSize]);
  return (
    <OrthographicCamera ref={cameraRef} makeDefault position={[0, 0, -10]} />
  );
};

export default Camera;
