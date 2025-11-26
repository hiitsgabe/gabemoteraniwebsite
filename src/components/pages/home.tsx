import React from 'react'
import Novatrix from '@/components/atoms/novatrix-background'
import { FadeText } from '@/components/atoms/fade-text'
import Nav from '@/components/molecules/nav'
import About from '@/components/organisms/about'
import Stack from '@/components/organisms/stack'

function Home() {
    return (
        <>
            <Nav />
            <div id="home" className="dark bg-background relative z-10 h-screen w-full">
                <Novatrix
                    color={[0.2, 0.2, 0.2]}
                    amplitude={0.1}
                    mouseReact={true}
                    speed={0.5}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <FadeText className="text-gray-300" text="Hi, I'm Gabe 🧑‍🚀" direction="in" staggerDelay={0.2} wordDelay={0.4} />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" />
            </div>
            <section id="about" className="h-screen">
                <About />
                <Stack />
            </section>
        </>
    )
}

export default Home