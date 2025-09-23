import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";
import "../utils/gsap-setup";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const StickySection = () => {
  const stickyRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  // Card data
  const cardData = [
    {
      id: 1,
      image: "/assets/animal1.jpg",
      title: "Card title",
      description:
        "Every great journey begins with an idea, and at SAKEC E-CELL, ideas have been our driving force since 2017.At SAKEC E-CELL, we have always believed in creating experiences that go beyond classrooms from leadership talks with inspiring personalities to innovation-driven events.",
    },
    {
      id: 2,
      image: "/assets/animal4.jpg",
      title: "Card title",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quo! Omnis placeat voluptate iusto? Ullam quis at perspiciatis officia eaque.",
    },
    {
      id: 3,
      image: "/assets/animal2.jpg",
      title: "Card title",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quo! Omnis placeat voluptate iusto? Ullam quis at perspiciatis officia eaque.",
    },
    {
      id: 4,
      image: "/assets/animal1.jpg",
      title: "Card title",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quo! Omnis placeat voluptate iusto? Ullam quis at perspiciatis officia eaque.",
    },
    {
      id: 5,
      image: "/assets/animal3.jpg",
      title: "Card title",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quo! Omnis placeat voluptate iusto? Ullam quis at perspiciatis officia eaque.",
    },
    {
      id: 6,
      image: "/assets/animal4.jpg",
      title: "Card title",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quo! Omnis placeat voluptate iusto? Ullam quis at perspiciatis officia eaque.",
    },
  ];

  // Animation transforms data
  const transforms = [
    [
      [10, 50, -10, 10],
      [20, -10, -45, 20],
    ],
    [
      [0, 47.5, -10, 15],
      [-25, 15, -45, 30],
    ],
    [
      [0, 52.5, -10, 5],
      [15, -5, -40, 60],
    ],
    [
      [0, 50, 30, -80],
      [20, -10, 60, 5],
    ],
    [
      [0, 55, -15, 30],
      [25, -15, 60, 95],
    ],
    [
      [0, 45, -20, 25],
      [30, -20, -50, 15],
    ],
  ];

  useEffect(() => {
    const stickySection = stickyRef.current;
    const stickyHeader = headerRef.current;
    const cards = cardsRef.current;
    const stickyHeight = window.innerHeight * 5;

    if (!stickySection || !stickyHeader) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: `+=${stickyHeight}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const maxTranslate = stickyHeader.offsetWidth - window.innerWidth;
        const translateX = -progress * maxTranslate;
        gsap.set(stickyHeader, { x: translateX });

        cards.forEach((card, index) => {
          if (!card) return;

          const delay = index * 0.1125;
          const cardProgress = Math.max(0, Math.min((progress - delay) * 2, 1));

          if (cardProgress > 0) {
            const cardStartX = 25;
            const cardEndX = -650;
            const yPos = transforms[index][0];
            const rotations = transforms[index][1];

            const cardX = gsap.utils.interpolate(
              cardStartX,
              cardEndX,
              cardProgress
            );

            const yProgress = cardProgress * 3;
            const yIndex = Math.min(Math.floor(yProgress), yPos.length - 2);
            const yInterpolation = yProgress - yIndex;
            const cardY = gsap.utils.interpolate(
              yPos[yIndex],
              yPos[yIndex + 1],
              yInterpolation
            );

            const cardRotation = gsap.utils.interpolate(
              rotations[yIndex],
              rotations[yIndex + 1],
              yInterpolation
            );

            gsap.set(card, {
              xPercent: cardX,
              yPercent: cardY,
              rotation: cardRotation,
              opacity: 1,
            });
          } else {
            gsap.set(card, { opacity: 0 });
          }
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section
      ref={stickyRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <div
        ref={headerRef}
        className="absolute top-0 left-0 w-180vw h-full flex justify-center items-center"
        style={{ willChange: "transform" }}
      >
        <h1 className="m-0 text-cream text-30vw font-light tracking-tighter-custom leading-none ">
          Our Journey
        </h1>
      </div>

      {cardData.map((card, index) => (
        <Card
          key={card.id}
          imageSrc={card.image}
          title={card.title}
          description={card.description}
          ref={(el) => (cardsRef.current[index] = el)}
        />
      ))}
    </section>
  );
};

export default StickySection;
