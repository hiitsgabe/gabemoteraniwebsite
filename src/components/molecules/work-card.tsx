"use client";

import React from 'react';
import { motion } from 'motion/react';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/atoms/tooltip";
import { getTechnologyIcon } from '@/lib/technology-icons';

interface WorkCardProps {
    dateRange: string;
    title: string;
    company: string;
    location: string;
    description: string;
    technologies?: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export const WorkCard: React.FC<WorkCardProps> = ({
    dateRange,
    title,
    company,
    location,
    description,
    technologies = [],
    githubUrl,
    liveUrl,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-800 p-6 backdrop-blur-sm hover:border-neutral-700 transition-all duration-300"
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
                {/* Header with date and links */}
                <div className="flex items-start justify-between mb-4">
                    <span className="text-sm text-neutral-400 font-mono">{dateRange}</span>
                    <div className="flex gap-2">
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-700 transition-colors"
                                aria-label="View on GitHub"
                            >
                                <IconBrandGithub className="w-4 h-4 text-neutral-400" />
                            </a>
                        )}
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-700 transition-colors"
                                aria-label="View live demo"
                            >
                                <IconExternalLink className="w-4 h-4 text-neutral-400" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Title and Company */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {title}
                </h3>
                <p className="text-base text-neutral-300 mb-1">
                    {company}
                </p>
                <p className="text-sm text-neutral-500 mb-4">
                    {location}
                </p>

                {/* Description */}
                <p className="text-neutral-400 leading-relaxed mb-6">
                    {description}
                </p>

                {/* Technology Icons with Tooltips */}
                {technologies.length > 0 && (
                    <TooltipProvider>
                        <div className="flex flex-wrap gap-3">
                            {technologies.map((tech, index) => {
                                const IconComponent = getTechnologyIcon(tech);
                                return (
                                    <Tooltip key={index} delayDuration={200}>
                                        <TooltipTrigger asChild>
                                            <div className="p-2 rounded-lg bg-neutral-800/80 border border-neutral-700 hover:bg-neutral-700 hover:border-neutral-600 transition-all cursor-pointer">
                                                <IconComponent className="w-5 h-5 text-neutral-300" />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{tech}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                );
                            })}
                        </div>
                    </TooltipProvider>
                )}
            </div>
        </motion.div>
    );
};
