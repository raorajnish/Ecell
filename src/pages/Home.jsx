import React from "react";
import SplineScene from "../components/SplineScene";
import RotatingText from "@/components/RotatingText";
import { CornerAccentButton } from "@/components/ui/shadcn-io/corner-accent-button";
import { Link } from "react-router-dom";
import HomeAbout from "@/components/home/HomeAbout";
import { ArrowDown } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import MagicBento from "@/components/home/MagicBento";
import StickySection from "@/components/ecell/StickySection";
import TargetCursor from "@/components/TargetCursor";
import Newsletter from "@/components/home/email/Newsletter";
import { Gallery4 } from "@/components/gallery4";
import Footer from "@/components/home/Main-footer";



const Home = () => {


  return (
    <div className="relative overflow-hidden  min-h-screen ">

      <div className="cursor-target-icon">
          <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        </div>
      {/* Background Spline */}
      <div className=" absolute spline-bg h-full ">
        <SplineScene />
      </div>
      <div className="phone-bg absolute opacity-40 h-[100vh]   w-[100vw] -z-1">
        <img className=" h-full w-full   " src="phone-bg.png" alt="" />
      </div>

      <div>
        {/* Hero content on top */}
        <div className="-mt-20 sm:mt-0 hero font-[font1] pointer-events-none relative text-[#afafb2] flex flex-col w-screen h-screen justify-center items-center px-4">
          {/* Static word + Rotating badge */}
          <div className="flex items-center gap-1 font-extrabold text-center">
            <span className="text-gray-200 text-[4vw] sm:text-[3vh]">
              Creative
            </span>
            <RotatingText
              texts={[
                "thinking",
                "ideas",
                "solutions",
                "visions",
                "innovation",
                "growth",
              ]}
              mainClassName="px-2 cursor-target sm:px-3 bg-[#6C4CFF] text-white text-[4vw] sm:text-[3vh] overflow-hidden py-1 rounded-lg"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>

          {/* Subheading */}
          <h2 className=" text-[3vw] md:text-[2vw] lg:text-[2vw] pt-6 text-center">
            🤝 Connecting Founders & Investors
          </h2>

          {/* Main Heading */}

          <h1 className=" text-[10vw] sm:text-[8vw] md:text-[8vw] lg:text-[9vw] text-white font-[vampire] tracking-wider mt-1 mb-5 uppercase font-bold text-center leading-tight">
            Project Pillar 2025
          </h1>

          {/* Description */}
          <h3 className="text-[12px] sm:text-base md:text-lg text-center -mt-5 max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
            A curated platform for startups to gain funding, mentorship, and
            visibility.
            <br className="hidden sm:block" />2 days. Top founders. Live
            pitches. Real investments.
          </h3>

          {/* Icon */}
          <img
            className="h-6 sm:h-8 md:h-10 text-white mt-6"
            src="https://cdn-icons-png.flaticon.com/512/8213/8213476.png"
            alt="arrow-down"
          />

          {/* Button */}
          <div className="w-full pointer-events-auto p-4 flex justify-center">
            <Link to="/events">
              <CornerAccentButton className="cursor-pointer cursor-target text-sm sm:text-base md:text-lg" />
            </Link>
          </div>

          <div className="">
            <CountdownTimer
              deadline="2025-10-10T09:30:00"
              className="text-white/50 pt-6 -mb-20"
              onCompleteContent={
                <div className="text-red-600 font-bold">Event Started!</div>
              }
            />
          </div>

          {/* Scroll down hint */}
          <div className=" -mt-24 sm:mt-0 absolute bottom-5 right-4 bg-gray-950 text-gray-200 py-2 px-5 rounded-[5px]">
            <h3 className="flex   gap-2">
              <ArrowDown /> Scroll Down
            </h3>
          </div>
        </div>
        <div className="h-fit  pt-20 w-full flex justify-center flex-col items-center  ">
          <h2 className="font-[vampire] text-white mb-6 text-6xl  ">
            Project Pillar
          </h2>
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false} // Tilt enabled only for cards
            enableMagnetism={false} // Magnetism enabled only for cards
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>

        {/* about us section */}
        <HomeAbout />
        {/* New Components in specified order */}
        <StickySection />
        <Gallery4/>
        <Newsletter />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;


