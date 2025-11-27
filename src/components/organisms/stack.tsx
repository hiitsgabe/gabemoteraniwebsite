"use client";

import React from "react";
import { OrbitRotation } from "@/components/atoms";
import { SiTypescript } from "react-icons/si";
import { FadeText } from "@/components/atoms";
import { STACK, TOOLS_CONTENT } from "@/data/content";

function Stack() {
  return (
    <div className="dark bg-background p-12 md:p-12 pt-0 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div>
        <FadeText
          className="text-gray-300 text-5xl! text-left! leading-10!"
          text={TOOLS_CONTENT.title}
          direction="up"
          staggerDelay={0.3}
          wordDelay={0.8}
        />
        <FadeText
          className="text-gray-400 text-2xl! text-left! leading-10! mt-4 pl-2!"
          text={TOOLS_CONTENT.description}
          direction="up"
          staggerDelay={0.3}
          wordDelay={0.8}
        />
      </div>

      <div className="flex justify-center z-20 scale-[0.6] sm:scale-75 lg:scale-100 min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] my-8 md:my-0">
        <OrbitRotation
          icons={STACK}
          orbitCount={3}
          centerIcon={{ Icon: SiTypescript, name: "TypeScript" }}
          size="md"
        />
      </div>
    </div>
  );
}

export default Stack;
