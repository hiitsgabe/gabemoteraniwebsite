'use client'

import React from 'react'

import { OrbitRotation } from '@/components/atoms/orbit-rotation'
import { FaAws, FaReact, FaNodeJs, FaJs, FaAngular, FaDocker, FaGithub, FaPython, FaVuejs } from 'react-icons/fa'
import { SiTypescript, SiTerraform, SiVercel, SiRedux, SiSvelte, SiDeno } from 'react-icons/si'
import { FadeText } from '@/components/atoms/fade-text'

function Stack() {
    return (
        <div className="dark bg-background p-12 pt-0 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div>
                <FadeText className="text-gray-300 !text-5xl !text-left !leading-10" text="Tools I am using." direction="up" staggerDelay={0.3} wordDelay={0.8} />
                <FadeText className="text-gray-400 !text-2xl !text-left !leading-10 mt-4 !pl-2" text="Coding languages and frameworks are tools, and each tool should be used for the right job. If you want to ask me what tools I like to play with, I must say that I am a big fan of Typescript, Nodejs and Reactjs. Altough as an entrepreneur, I had to learn how to deal with every step of development, from architecture and infrastructure to deployment and quality assurance." direction="up" staggerDelay={0.3} wordDelay={0.8} />
            </div>

            <div className="flex justify-center">
                <OrbitRotation
                    icons={[
                        { Icon: SiTypescript, name: "TypeScript" },
                        { Icon: FaReact, name: "React" },
                        { Icon: FaAws, name: "AWS" },
                        { Icon: FaNodeJs, name: "Node.js" },
                        { Icon: FaJs, name: "JavaScript" },
                        { Icon: SiTerraform, name: "Terraform" },
                        { Icon: FaAngular, name: "Angular" },
                        { Icon: FaDocker, name: "Docker" },
                        { Icon: SiVercel, name: "Vercel" },
                        { Icon: SiRedux, name: "Redux" },
                        { Icon: FaGithub, name: "GitHub" },
                        { Icon: SiSvelte, name: "Svelte" },
                        { Icon: FaVuejs, name: "Vue.js" },
                        { Icon: FaPython, name: "Python" },
                        { Icon: SiDeno, name: "Deno" },
                    ]}
                    orbitCount={3}
                    centerIcon={{ Icon: SiTypescript, name: "TypeScript" }}
                    size="md"
                />
            </div>
        </div>
    )
}

export default Stack