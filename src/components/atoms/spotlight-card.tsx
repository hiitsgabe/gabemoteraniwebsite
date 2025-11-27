/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { JSX, MouseEvent, useRef } from "react";
import "@/app/spotlight-card.css";

type SpotlightCardProps = {
  children: JSX.Element;
  className?: string;
  spotlightColor?: string;
};

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = divRef.current?.getBoundingClientRect();
    // @ts-expect-error
    const x = e.clientX - rect?.left;
    // @ts-expect-error
    const y = e.clientY - rect?.top;

    divRef.current?.style.setProperty("--mouse-x", `${x}px`);
    divRef.current?.style.setProperty("--mouse-y", `${y}px`);
    divRef.current?.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
