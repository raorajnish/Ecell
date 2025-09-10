import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const HomeAbout = () => {
  const AboutRef = useRef(null);
  const AboutContentRef = useRef(null);

  useGSAP(() => {
    
    // Animate About Title
    gsap.from(AboutRef.current, {
      x: -200,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: AboutRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(AboutContentRef.current, {
      x: 200,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: AboutRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
    

    
  });

  return (
    <div>
      <div className="home-about h-auto min-h-screen w-screen flex flex-col lg:flex-col  text-[#afafb2]">
        {/* Left / Top (About title) */}
        <div
          ref={AboutRef}
          className=" home-about-1 w-full lg:w-2/3 font-[vampire] flex justify-center lg:justify-start items-center text-3xl sm:text-6xl md:text-6xl lg:text-7xl text-white pt-[10vh]  lg:pt-[10vh] px-4 lg:pl-48 text-center lg:text-left"
        >
          About <br />
          Ecell Sakec
        </div>

        {/* Right / Bottom (Content) */}
        <div
          ref={AboutContentRef}
          className="aboot-text w-full lg:w-2/3 pt-5  lg:pt-[5vh] px-5 lg:px-[10vw] lg:ml-[30vw] sm:px-10 md:px-[8vw] text-sm sm:text-lg md:text-xl  font-[font1] text-center lg:text-left"
        >
          Every great journey begins with an idea, and at SAKEC E-CELL, ideas
          have been our driving force since 2017. <br />
           At SAKEC E-CELL, we have always believed in creating
          experiences that go beyond classrooms — from leadership talks with
          inspiring personalities to innovation-driven events like Meet the
          Entrepreneur, Meet the Innovator, Design Thinking Workshops,
           Food Fiesta , Project Pillar, and many more. Our journey
          has been one of growth and impact — we went from conducting Hunar back
          in 2017, to launching Project Pillar in 2022, and now in 2025 hosting
          our biggest Food Fiesta ever. And this is just the beginning. With
          every step, we’re setting the stage for something bigger, bolder, and
          better, because the best of SAKEC E-CELL is yet to come.
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
