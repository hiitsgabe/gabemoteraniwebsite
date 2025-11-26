import React from 'react'
import { FadeText } from '@/components/atoms/fade-text'
import { ShootingStars } from '@/components/atoms/shotting-star'
import { WorkCard } from '@/components/molecules/work-card'

function Work() {
    const WORK_EXPERIENCE = [
        {
            dateRange: '2025-Current',
            title: "Research Software Engineer",
            company: "Algoma University",
            location: "Toronto, Canada",
            description: "Responsible for the development team of Machine Learning and LLMs systems for research purposes. Led a team of developers to create a mobile web extension to improve accessibility in WCAG non compliance websites.",
            technologies: ["Machine Learning", "LLMs", "Web Extensions", "WCAG", "Typescript", "Docker", "React"]
        },
        {
            dateRange: '2022-2025',
            title: "Staff Engineer",
            company: "Zenvia (NASDAQ: ZENV)",
            location: "São Paulo, Brazil",
            description: "Responsible for the Core and Platform teams and products. Led two teams with 6 software engineers in each one. Led a team of developers to create innovative solutions using ChatGPT on the platform, resulting in a seamless user experience.",
            technologies: ["ChatGPT", "Platform Engineering", "Team Leadership", "Typescript", "React", "Node.js", "Java", "Vue", "Svelte", "Microfrontends"]
        },
        {
            dateRange: '2020-2022',
            title: "CTO",
            company: "Pingback",
            location: "Belo Horizonte, Brazil",
            description: "Led a team of developers to create tools for reaching, engaging, and monetizing any community or audience using Javascript with Nodejs and Reactjs. Conceptualized and architected infrastructure solutions instrumental in meeting strategic goals organization-wide.",
            technologies: ["Node.js", "React.js", "Typescript", "Infrastructure", "AWS", "Terraform", "TypeScript", "Docker", "Microfrontends", "Postgres"]
        },
        {
            dateRange: '2019-2020',
            title: "Developer & Tech Lead",
            company: "Usabit",
            location: "Rio de Janeiro, Brazil",
            description: "Managed and led the development of the new investment app of Necton (Brazilian stockbroker). Investigated and provided solutions to critical system issues and addressed issues such as performance tuning.",
            technologies: ["Mobile Development", "Performance Tuning", "Typescript", "React.js", "Angular", "Docker", "Ruby", "MySQL", "Postgres", "MongoDB"]
        },
        {
            dateRange: '2016-2018',
            title: "Developer and Co-Founder",
            company: "Mercatório",
            location: "Belo Horizonte, Brazil",
            description: "Served as a hands-on lead for a team of developers responsible for building Mercatório using Ruby on Rails, Angular 2, and AWS to host services and deploy a Data Lake for the big data system.",
            technologies: ["Ruby on Rails", "Angular 2", "AWS", "Data Lake", "Big Data", "Terraform", "MySQL", "Machine Learning", "DynamoDB"]
        },
        {
            dateRange: '2012-2014',
            title: "IT Desktop Technician",
            company: "Alex Eletrônica",
            location: "Brazil",
            description: "Conducted on-site repair and preventive maintenance on personal computers and related peripherals.",
            technologies: ["Hardware", "Maintenance", "Technical Support"]
        }
    ]

    return (
        <div className="dark min-h-[100vh] min-w-[100vw] bg-background p-12 pt-[100px] relative">
            {/* Multiple shooting star layers with different colors and speeds */}
            <ShootingStars
                starColor="#9E00FF"
                trailColor="#2EB9DF"
                minSpeed={15}
                maxSpeed={35}
                minDelay={1000}
                maxDelay={3000}
            />
            <ShootingStars
                starColor="#FF0099"
                trailColor="#FFB800"
                minSpeed={10}
                maxSpeed={25}
                minDelay={2000}
                maxDelay={4000}
            />
            <ShootingStars
                starColor="#00FF9E"
                trailColor="#00B8FF"
                minSpeed={20}
                maxSpeed={40}
                minDelay={1500}
                maxDelay={3500}
            />

            <div className="max-w-7xl mx-auto">
                <FadeText
                    className="text-gray-300 !text-5xl !text-center !leading-10 mb-12"
                    text="Checkout my journey"
                    direction="up"
                    staggerDelay={0.3}
                    wordDelay={0.8}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {WORK_EXPERIENCE.map((experience, index) => (
                        <WorkCard
                            key={index}
                            dateRange={experience.dateRange}
                            title={experience.title}
                            company={experience.company}
                            location={experience.location}
                            description={experience.description}
                            technologies={experience.technologies}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work