import React from "react";
import { FadeText } from "@/components/atoms";
import { ABOUT_CONTENT } from "@/data/content";

function About() {
  return (
    <div className="dark min-h-screen bg-background p-12 pt-[100px]">
      <FadeText
        className="text-gray-300 text-left!"
        text={ABOUT_CONTENT.title}
        direction="up"
        staggerDelay={0.2}
        wordDelay={0.4}
      />
      <div className="mt-4">
        <FadeText
          className="text-gray-400 text-2xl! text-left! leading-10!"
          text={ABOUT_CONTENT.description1}
          direction="up"
          staggerDelay={0.3}
          wordDelay={0.8}
        />
        <FadeText
          className="text-gray-400 text-2xl! text-left! leading-10! mt-2"
          text={ABOUT_CONTENT.description2}
          direction="up"
          staggerDelay={0.3}
          wordDelay={0.8}
        />
        <FadeText
          className="text-gray-400 text-2xl! text-left! leading-10! mt-2"
          text={ABOUT_CONTENT.description4}
          direction="up"
          staggerDelay={0.3}
          wordDelay={0.8}
        />
      </div>
    </div>
  );
}

export default About;
