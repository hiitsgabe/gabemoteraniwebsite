"use client";

import React, { useState, useEffect } from "react";
import { BubbleBackground, ProfileCard } from "@/components/atoms";

function contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="dark w-full bg-background flex justify-center items-center py-20 relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-background to-transparent z-20" />

      <ProfileCard
        name="Gabe Moterani"
        title="Software Engineer"
        handle="gabemoterani"
        status="Online"
        contactText="Contact Me"
        avatarUrl="gab.webp"
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

      {isMobile ? (
        <div
          className="absolute inset-0 flex items-center justify-center rounded-xl"
          style={{
            background: 'linear-gradient(135deg, rgb(75,0,130) 0%, rgb(138,43,226) 25%, rgb(123,31,162) 50%, rgb(94,23,235) 75%, rgb(72,61,139) 100%)'
          }}
        />
      ) : (
        <BubbleBackground
          interactive
          className="absolute inset-0 flex items-center justify-center rounded-xl"
        />
      )}
    </div>
  );
}

export default contact;
