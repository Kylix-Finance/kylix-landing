"use client";

import { ReactElement, useRef } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion, useScroll } from "framer-motion";

const Scene = dynamic(() => import("../Hero/components/Scene"), {
  ssr: false,
});

export default function ClosingArt(): ReactElement | null {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  if (reduceMotion !== false) return null;

  return (
    <div className="closing-art" aria-hidden="true">
      <div ref={ref} className="closing-art-canvas">
        <Scene scrollYProgress={scrollYProgress} height="100%" />
      </div>
    </div>
  );
}
