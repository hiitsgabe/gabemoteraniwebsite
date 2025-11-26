'use client'

import React from 'react'

import { OrbitRotation } from '@/components/atoms/orbit-rotation'
import { FaAws, FaReact, FaNodeJs, FaJs, FaAngular } from 'react-icons/fa'
import { SiTypescript, SiTerraform, SiRubyonrails } from 'react-icons/si'

function Stack() {
    return (
        <div className="dark min-h-[100vh] bg-background p-12 pt-[100px]">
            <OrbitRotation
                icons={[
                    { Icon: FaReact, name: "React" },
                    { Icon: FaAws, name: "AWS" },
                    { Icon: FaNodeJs, name: "Node.js" },
                    { Icon: FaJs, name: "JavaScript" },
                    { Icon: SiTypescript, name: "TypeScript" },
                    { Icon: SiTerraform, name: "Terraform" },
                    { Icon: SiRubyonrails, name: "Ruby on Rails" },
                    { Icon: FaAngular, name: "Angular" },
                ]}
                orbitCount={3}
                size="md"
            />
        </div>
    )
}

export default Stack