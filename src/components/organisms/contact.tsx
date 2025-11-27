"use client";

import React from "react";
import { BubbleBackground, ProfileCard } from "@/components/atoms";

function contact() {
  return (
    <div className="dark w-full bg-background flex justify-center items-center py-20 relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-background to-transparent z-20" />

      <ProfileCard
        name="Gabe Moterani"
        title="Software Engineer"
        handle="gabemoterani"
        status="Online"
        contactText="Contact Me"
        avatarUrl="gabb.png"
        className="z-20"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => {
          if (window) {
            window
              .open("https://www.linkedin.com/in/gabemoterani/", "_blank")
              ?.focus();
          }
        }}
      />
      <BubbleBackground
        interactive
        className="absolute inset-0 flex items-center justify-center rounded-xl"
      />
    </div>
  );
}

export default contact;
