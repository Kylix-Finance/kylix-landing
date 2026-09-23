"use client";
import { useEffect, useRef, useState } from "react";
import { marketTrendsData } from "~/data";
export default function Card({ id }: { id: number }) {
  const item = marketTrendsData.items.find((slide) => slide.id === id);
  const diagramRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = diagramRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (!item) return null;
  return (
    <div className="mechanics-grid">
      <ol className="mechanic-list">
        {item.items.map((mechanic, index) => (
          <li key={mechanic.title} className="mechanic-item">
            <span className="card-index" aria-hidden="true">
              0{index + 1}
            </span>
            <div>
              <h3>{mechanic.title}</h3>
              <p>{mechanic.description}</p>
            </div>
          </li>
        ))}
      </ol>
      <figure className="mechanism-figure" aria-labelledby="mechanism-caption">
        <p className="eyebrow">The self-repaying loan</p>
        <div
          ref={diagramRef}
          className={`mechanism-diagram${isVisible ? " is-visible" : ""}`}
          aria-label="Your collateral generates yield. That yield is applied to the outstanding debt, leaving a smaller balance to repay."
        >
          <svg
            className="mechanism-diagram-lines"
            viewBox="0 0 520 320"
            aria-hidden="true"
          >
            <path
              id="mechanism-branch-a"
              className="mechanism-branch"
              d="M108,160 C150,160 150,60 184,60"
            />
            <path
              id="mechanism-branch-b"
              className="mechanism-branch"
              d="M108,160 L184,160"
            />
            <path
              id="mechanism-branch-c"
              className="mechanism-branch"
              d="M108,160 C150,160 150,260 184,260"
            />
            <circle className="mechanism-particle" r="3">
              <animateMotion
                dur="2.4s"
                begin="0s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
              >
                <mpath href="#mechanism-branch-a" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.15;0.8;1"
                dur="2.4s"
                begin="0s"
                repeatCount="indefinite"
              />
            </circle>
            <circle className="mechanism-particle" r="3">
              <animateMotion
                dur="2.4s"
                begin="0.8s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
              >
                <mpath href="#mechanism-branch-b" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.15;0.8;1"
                dur="2.4s"
                begin="0.8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle className="mechanism-particle" r="3">
              <animateMotion
                dur="2.4s"
                begin="1.6s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
              >
                <mpath href="#mechanism-branch-c" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.15;0.8;1"
                dur="2.4s"
                begin="1.6s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
          <div className="mechanism-token" aria-hidden="true">
            <span className="mechanism-token-ring" />
            <span className="mechanism-token-core" />
          </div>
          <div className="mechanism-pill mechanism-pill-a">
            <strong>Your collateral</strong>
          </div>
          <p className="mechanism-note mechanism-note-a">
            Eligible yield-bearing assets
          </p>
          <div className="mechanism-pill mechanism-pill-b mechanism-pill-accent">
            <strong>Yield goes to your loan</strong>
          </div>
          <p className="mechanism-note mechanism-note-b">
            Applied automatically to the debt
          </p>
          <div className="mechanism-pill mechanism-pill-c">
            <strong>A smaller balance to repay</strong>
          </div>
          <p className="mechanism-note mechanism-note-c">
            When yield exceeds borrowing interest
          </p>
        </div>
        <figcaption id="mechanism-caption">
          Planned mechanism. Yield and borrowing rates vary; you still owe any
          remaining balance.
        </figcaption>
      </figure>
    </div>
  );
}
