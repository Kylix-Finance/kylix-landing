"use client";

import { ReactElement, useEffect, useRef } from "react";

export default function BackGround(): ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent): void => {
      ref.current?.style.setProperty(
        "--pointer-x",
        `${(event.clientX / window.innerWidth) * 100}%`
      );
      ref.current?.style.setProperty(
        "--pointer-y",
        `${(event.clientY / window.innerHeight) * 100}%`
      );
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className="atmosphere" ref={ref} aria-hidden="true">
      <div className="atmosphere-pointer-glow" />
      <div className="atmosphere-grain" />
    </div>
  );
}
