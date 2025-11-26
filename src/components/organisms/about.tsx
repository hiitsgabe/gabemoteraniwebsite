import React from 'react'
import { FadeText } from '@/components/atoms/fade-text'

function About() {

    const CONTENT = {
        title: "Nice to meet you, let me introduce myself",
        description1: "I'm Gabe, a software engineer with a passion for creating innovative solutions. I trully believe that we can change the world with code lines .",
        description2: "I have been working with tech since 2014, and during this time, I worked building and scaling some awesome projects. You may notice from my portfolio that I am a serial entrepreneur, I am passionated about turning ideas into products and solving customers problems.",
        description3: "Coding languages and frameworks are tools, and each tool should be used for the right job. If you want to ask me what tools I like to play with, I must say that I am a big fan of Typescript, Nodejs and Reactjs. Altough as an entrepreneur, I had to learn how to deal with every step of development, from architecture and infrastructure to deployment and quality assurance.",
        description4: "During my carreer I had the amazing pleasure of working with incredible people. That allowed me to conquer big things such as lauching nching products from 0 to 10k users, coordinating the microfroentend structure of a big enterprise corporation, and creating startups that raised a few million in funding that were used to borformance and build amazing teams. I am a team person, and I firmly believe that this is one of my biggest strengths."
    }



    return (
        <div className="dark min-h-[100vh] bg-background p-12 pt-[100px]">
            <FadeText className="text-gray-300 !text-left" text={CONTENT.title} direction="up" staggerDelay={0.2} wordDelay={0.4} />
            <div className="mt-4">
                <FadeText className="text-gray-400 !text-2xl !text-left !leading-10" text={CONTENT.description1} direction="up" staggerDelay={0.3} wordDelay={0.8} />
                <FadeText className="text-gray-400 !text-2xl !text-left !leading-10 mt-2" text={CONTENT.description2} direction="up" staggerDelay={0.3} wordDelay={0.8} />
                {/* <FadeText className="text-gray-400 !text-2xl !text-left !leading-10 mt-2" text={CONTENT.description3} direction="up" staggerDelay={0.3} wordDelay={0.8} /> */}
                <FadeText className="text-gray-400 !text-2xl !text-left !leading-10 mt-2" text={CONTENT.description4} direction="up" staggerDelay={0.3} wordDelay={0.8} />
            </div>
        </div>
    )
}

export default About