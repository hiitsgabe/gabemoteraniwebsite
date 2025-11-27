/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { FadeText, LiquidButton, ShootingStars } from "@/components/atoms";
import { WorkCard } from "@/components/molecules";
import { WORK_CONTENT, WORK_EXPERIENCE } from "@/data/content";

function Work() {
  const STARS_COLORS: string[][] = [
    ["#9E00FF", "#2EB9DF"],
    ["#FF0099", "#FFB800"],
    ["#00FF9E", "#00B8FF"],
  ];
  return (
    <div className="dark min-h-screen w-full bg-background p-12 pt-[100px] relative">
      {STARS_COLORS.map(([starColor, trailColor], index) => {
        return (
          <ShootingStars
            key={index}
            starColor={starColor}
            trailColor={trailColor}
            minSpeed={15}
            maxSpeed={35}
            minDelay={1000}
            maxDelay={3000}
          />
        );
      })}

      <div className="max-w-[100vw]">
        <FadeText
          className="text-gray-300 text-5xl! text-center! leading-10! mb-20"
          text={WORK_CONTENT.title}
          direction="up"
          staggerDelay={0.3}
          wordDelay={0.8}
        />

        <div className="mt-12 w-full">
          {WORK_EXPERIENCE.map((experience, index) => (
            <div className="mb-14 w-full" key={index}>
              <WorkCard
                index={index}
                key={index}
                dateRange={experience.dateRange}
                title={experience.title}
                company={experience.company}
                location={experience.location}
                githubUrl={experience.githubUrl}
                liveUrl={experience.liveUrl}
                description={experience.description}
                technologies={experience.technologies}
                imgPath={experience.imgPath}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <FadeText
            className="text-gray-400 text-xl! text-center! leading-10! mb-4 mt-14"
            text={WORK_CONTENT.description}
            direction="up"
            staggerDelay={0.3}
            wordDelay={0.8}
          />
          <LiquidButton
            className="uppercase"
            onClick={() => {
              if (window) {
                window
                  .open(
                    "https://github.com/hiitsgabe/hiitsgabe/blob/master/RESUME.pdf",
                    "_blank"
                  )
                  ?.focus();
              }
            }}
          >
            <FadeText
              className="text-gray-400 text-sm! text-center! leading-10!"
              text="Checkout My Resume"
              direction="up"
              staggerDelay={0.3}
              wordDelay={0.8}
            />
            <span className="text-2xl">👀</span>
          </LiquidButton>
        </div>
      </div>
    </div>
  );
}

export default Work;
