import React from "react";
import { Nav } from "@/components/molecules";
import { LiquidEther, FadeText } from "@/components/atoms";
import { Contact, About, Stack, Work } from "@/components/organisms";

function Home() {
  return (
    <>
      <Nav />
      <div
        id="home"
        className="dark bg-background relative z-10 h-screen w-full"
      >
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={3}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <FadeText
            className="text-gray-300"
            text="Hi, I'm Gabe 🧑‍🚀"
            direction="in"
            staggerDelay={0.2}
            wordDelay={0.4}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-b from-transparent to-background pointer-events-none" />
      </div>
      <section id="about">
        <About />
        <Stack />
      </section>
      <section className="w-full" id="work relative">
        <Work />
      </section>
      <section id="contact relative">
        <Contact />
      </section>
    </>
  );
}

export default Home;
