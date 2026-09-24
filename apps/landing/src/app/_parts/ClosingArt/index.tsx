"use client";

import { ReactElement, useEffect, useRef, useState } from "react";
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

// This decoration costs a WebGL canvas with bloom: keep it off phones and small windows.
// Size only, no (hover: hover): touch laptops report no hover and would lose it.
const CANVAS_SUPPORT = "(min-width: 1000px) and (min-height: 600px)";

function useCanvasSupported(): boolean {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(CANVAS_SUPPORT);
    const update = (): void => setSupported(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return supported;
}

export default function ClosingArt(): ReactElement | null {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const canvasSupported = useCanvasSupported();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const logoOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.75, 1],
    [0, 0, 1, 1]
  );

  if (reduceMotion !== false || !canvasSupported) return null;

  return (
    <div className="closing-art" ref={ref} aria-hidden="true">
      <div className="closing-art-sticky">
        <div className="closing-art-canvas">
          <Scene
            scrollYProgress={scrollYProgress}
            height="100%"
            frustumSize={6.3}
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
