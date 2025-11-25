import React from 'react'
import Novatrix from '@/components/atoms/novatrix-background'
import { FadeText } from '@/components/atoms/fade-text'
import Nav from '@/components/molecules/nav'

function Home() {
    return (
        <div className="dark bg-background relative z-10 h-screen w-full">
            <Novatrix
                color={[0.3, 0.3, 0.3]}
                amplitude={0.1}
                mouseReact={true}
                speed={0.5}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <FadeText className="text-gray-300" text="Hi, I'm Gabe 🧑‍🚀" direction="in" staggerDelay={0.2} wordDelay={0.4} />
            </div>
            <Nav />
        </div>
    )
}

export default Home