"use client";;
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import pg1 from "../assets/team/pg1.png";
import pg2 from "../assets/team/pg2.png";
import pg3 from "../assets/team/pg3.png";
import pg4 from "../assets/team/pg4.png";
import pg5 from "../assets/team/pg5.png";
import pg6 from "../assets/team/pg6.png";
import pg7 from "../assets/team/pg7.png";
import pg8 from "../assets/team/pg8.png";


const data = [
  {
    id: "design-weekly",
    title: "Design Weekly",
    description: "Latest trends & insights in modern design",
    href: "/newsletters",
    image: pg1,
  },
  {
    id: "tech-digest",
    title: "Tech Digest",
    description: "Weekly updates from the tech world",
    href: "/newsletters",
    image: pg2,
  },
  {
    id: "startup-spotlight",
    title: "Startup Spotlight",
    description: "Highlighting the most innovative startups",
    href: "/newsletters",
    image: pg3,
  },
  {
    id: "innovation-hub",
    title: "Innovation Hub",
    description: "Ideas and insights to fuel creativity",
    href: "/newsletters",
    image: pg4,
  },
  {
    id: "creative-minds",
    title: "Creative Minds",
    description:
      "Exploring design, art, and creative strategies for professionals.",
    href: "/newsletters",
    image: pg5,
  },
  {
    id: "future-tech",
    title: "Future Tech",
    description:
      "Emerging technologies, AI, blockchain, and cutting-edge developments.",
    href: "/newsletters",
    image: pg6,
  },
  {
    id: "growth-strategies",
    title: "Growth Strategies",
    description:
      "Tips and strategies for startups, business growth, and productivity.",
    href: "/newsletters",
    image: pg7,
  },
  {
    id: "trends-insights",
    title: "Trends & Insights",
    description:
      "Curated insights on design, tech, and business trends shaping the industry.",
    href: "/newsletters",
    image: pg8,
  },
];

const Gallery4 = ({
  title = "Ecell Newsletters",
  description = "Our newsletters bring you the latest updates, event highlights, and inspiring stories from the world of innovation and entrepreneurship.",
  items = data
}) => {
  const [carouselApi, setCarouselApi] = useState();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="pt-1 lg:pt-20">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col px-9 lg:pl-36 gap-4">
            <h2 className="text-5xl text-center md:text-left text-white font-[vampire] font-medium md:text-4xl lg:text-7xl">
              {title}
            </h2>
            <p className="max-w-lg text-white  text-center md:text-left font-[font1] text-sm md:text-xl  text-muted-foreground">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            {/* <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto">
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto">
              <ArrowRight className="size-5" />
            </Button> */}
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}>
          <CarouselContent
            className="  mx-4  2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className=" max-w-[320px] pl-[20px] lg:max-w-[360px]">
                <a href={item.href} className="group rounded-xl">
                  <div
                    className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" />
                    <div
                      className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                    <div
  className="absolute h-[200px] inset-x-0 bottom-0 flex flex-col items-start p-6 md:p-8 
             text-primary-foreground rounded-b-2xl
             bg-gradient-to-t from-black/60 via-black/40 to-transparent 
             backdrop-blur-md border-t border-white/20 shadow-lg">
  <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
    {item.title}
  </div>
  <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9 text-white/90">
    {item.description}
  </div>
  <div className="flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors">
    Read more{" "}
    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
  </div>
</div>


                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
