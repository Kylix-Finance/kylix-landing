"use client";

import { ReactElement, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { logoImg } from "~/assets/images";

const Scene = dynamic(() => import("../Hero/components/Scene"), {
  ssr: false,
});

export default function ClosingArt(): ReactElement | null {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const logoOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.75, 1],
    [0, 0, 1, 1]
  );

  if (reduceMotion !== false) return null;

  return (
    <div className="closing-art" ref={ref} aria-hidden="true">
      <div className="closing-art-sticky">
        <div className="closing-art-canvas">
          <Scene
            scrollYProgress={scrollYProgress}
            height="100%"
            frustumSize={11}
          />
          <motion.div
            className="closing-art-logo"
            style={{ opacity: logoOpacity }}
          >
            <Image src={logoImg} alt="" fill sizes="200px" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
