/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "motion/react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/atoms/tooltip";
import { TechnologyIcon, SpotilightCard } from "@/components/atoms";
import { FaGithub, FaLink } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface WorkCardProps {
  dateRange: string;
  title: string;
  company: string;
  location: string;
  description: string;
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
  imgPath: string;
}

export const WorkCard: React.FC<WorkCardProps> = ({
  dateRange,
  title,
  company,
  location,
  description,
  technologies = [],
  githubUrl,
  imgPath,
  liveUrl,
  index = 1,
}) => {
  const LINKS_CLASS =
    "bg-gray-200 border rounded-full h-[50px] w-[50px] flex justify-center items-center cursor-pointer hover:bg-gray-300";
  return (
    <SpotilightCard>
      <>
        {/* Header */}
        <div
          className={cn(
            "py-4 flex cursor mb-10",
            index % 2 === 0 ? "justify-end" : "justify-start"
          )}
        >
          {liveUrl && (
            <a
              className={cn(LINKS_CLASS, "mr-4")}
              href={liveUrl}
              target="_blank"
            >
              <FaLink />
            </a>
          )}
          {githubUrl && (
            <a className={LINKS_CLASS} href={githubUrl} target="_blank">
              <FaGithub />
            </a>
          )}
        </div>
        {/* Body */}
        <div
          className={cn(
            "flex",
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          )}
        >
          {/* Description */}
          <div className="flex-1">
            <div>
              <h4 className="font-display font-extrabold drop-shadow-sm text-5xl text-gray-200 leading-12! mb-10">
                {title}
              </h4>
              <p className="font-display font-bold drop-shadow-sm text-xl text-gray-300">
                {description}
              </p>
            </div>
            <div
              className={cn(
                "flex items-center mt-10",
                index % 2 === 0 ? "justify-start" : "justify-end"
              )}
            >
              {technologies.map((technology, index) => (
                <div className="text-white mr-2 text-2xl" key={index}>
                  <Tooltip>
                    <TooltipTrigger>
                      <TechnologyIcon name={technology} />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-64 text-pretty">
                      {technology}
                    </TooltipContent>
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
          {/* Image */}
          <div className="hidden flex-1 sm:flex md:flex lg:flex relative">
            <img
              className={cn(
                "grayscale absolute -bottom-10 opacity-40 rounded-lg",
                index % 2 === 0 ? "-right-10" : "-left-10",
                "h-[300px]"
              )}
              src={imgPath}
            ></img>
          </div>
        </div>
      </>
    </SpotilightCard>
  );
};
