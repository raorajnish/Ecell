import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from "framer-motion"; 
import { Github, Linkedin, Twitter, ArrowRight, Users, Trophy, Rocket, Calendar } from 'lucide-react';

// --- Mock Data ---
const CORE_TEAM = [
  { name: "Aarav Patel", role: "President", socials: { linkedin: "#", twitter: "#" } },
  { name: "Sneha Gupta", role: "Vice President", socials: { linkedin: "#" } },
  { name: "Rohan Kumar", role: "Gen. Secretary", socials: { github: "#", linkedin: "#" } },
  { name: "Ishita Sharma", role: "Treasurer", socials: { linkedin: "#" } },
  { name: "Kabir Singh", role: "Events Head", socials: { twitter: "#" } },
  { name: "Ananya Roy", role: "PR Head", socials: { linkedin: "#" } },
];

const TECH_TEAM = [
  { name: "Vikram Malhotra", role: "Tech Lead", socials: { github: "#", linkedin: "#" } },
  { name: "Priya Desai", role: "Frontend Lead", socials: { github: "#", twitter: "#" } },
  { name: "Arjun Reddy", role: "Backend Lead", socials: { github: "#" } },
  { name: "Neha Verma", role: "UI/UX Lead", socials: { linkedin: "#" } },
  { name: "Siddharth Rao", role: "DevOps", socials: { github: "#" } },
  { name: "Meera Nair", role: "Developer", socials: { github: "#" } },
  { name: "Rahul Kaplan", role: "Developer", socials: { github: "#" } },
  { name: "Zoya Khan", role: "Designer", socials: { linkedin: "#" } },
];

// --- Hooks ---
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = (e) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

// --- Components ---

// Navbar removed - using shared navbar from App.jsx

const HeroStats = () => {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="min-h-screen bg-zinc-950 text-white p-4 md:p-12 pt-24 flex flex-col justify-center relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto w-full z-10">
        {/* Header Text */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
             <div className="h-[1px] w-12 bg-zinc-700"></div>
             <p className="text-zinc-500 font-[font1] text-xs tracking-widest uppercase">Est. 2024 • Innovation Hub</p>
          </div>
          <h1 className="text-6xl md:text-9xl font-[vampire] uppercase leading-[0.9] tracking-wide">
            Small But <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
              Mighty
            </span>
          </h1>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          ref={gridRef}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[500px]"
        >
          
          {/* Mission Block */}
          <motion.div variants={item} className="md:col-span-2 md:row-span-2 bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/5 flex flex-col justify-between hover:border-white/20 transition-all duration-500 group">
             <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="text-white w-6 h-6" />
             </div>
             <div>
               <h3 className="text-2xl font-[vampire] text-zinc-300 mb-2 tracking-wide">Our Mission</h3>
               <p className="text-2xl md:text-4xl font-[font1] font-medium leading-tight text-white/80 group-hover:text-white transition-colors tracking-tighter">
                 Cultivating the next generation of disrupters, thinkers, and problem solvers.
               </p>
             </div>
          </motion.div>

          {/* Members Count - Tall */}
          <motion.div variants={item} className="md:col-span-1 md:row-span-2 bg-blue-600 rounded-3xl p-8 border border-blue-500/50 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500 group-hover:rotate-12 transform">
                <Users size={120} />
              </div>
              <div className="z-10 mt-auto">
                <span className="text-7xl md:text-8xl font-[vampire] text-white tracking-wide">60+</span>
                <div className="h-[2px] w-full bg-white/30 my-4"></div>
                <span className="text-blue-100 uppercase tracking-widest text-sm font-[font1] font-bold">Active Members</span>
              </div>
          </motion.div>

          {/* Stat Small 1 */}
          <motion.div variants={item} className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-6 border border-white/5 flex flex-col justify-center items-center hover:bg-zinc-800/50 transition-colors">
             <Trophy className="text-yellow-500 mb-2 w-8 h-8" />
             <span className="text-4xl font-[vampire] text-white tracking-widest">12</span>
             <span className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest font-[font1]">Startups Incubated</span>
          </motion.div>

          {/* Stat Small 2 */}
          <motion.div variants={item} className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-6 border border-white/5 flex flex-col justify-center items-center hover:bg-zinc-800/50 transition-colors">
             <Calendar className="text-purple-500 mb-2 w-8 h-8" />
             <span className="text-4xl font-[vampire] text-white tracking-wide">24+</span>
             <span className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest font-[font1]">Annual Events</span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 0.5 }} 
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowRight className="rotate-90 w-4 h-4" />
      </motion.div>
    </section>
  );
};

const MemberCard = ({
  name,
  role,
  teamName,
  image,
  socials,
  color = "bg-blue-600",
}) => {
  return (
    <div className="snap-center relative group w-[280px] sm:w-[320px] h-[450px] sm:h-[500px] flex-shrink-0 bg-zinc-900/80 backdrop-blur-sm border border-white/5 rounded-2xl p-4 flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
      
      {/* Top Section: Name */}
      <div className="mb-2 h-16 flex items-end">
        <h3 className="text-3xl font-[vampire] uppercase text-white leading-[0.85] tracking-wide">
          {name.split(" ").map((n, i) => (
            <span key={i} className="block">{n}</span>
          ))}
        </h3>
      </div>

      <div className="flex flex-1 gap-3 relative min-h-0">
        {/* Left Vertical Text */}
        <div className="w-8 flex items-center justify-center border-r border-white/5">
          <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-[10px] font-[font1] font-bold tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180 whitespace-nowrap py-4">
            {teamName}
          </span>
        </div>

        {/* Main Image Container */}
        <div className={`flex-1 relative rounded-xl overflow-hidden ${color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-500`}>
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
            />
          ) : (
            // Placeholder Avatar if no image
            <div className={`w-full h-full ${color} opacity-20 group-hover:opacity-30 transition-all flex items-center justify-center`}>
               <Users className="w-16 h-16 text-white opacity-20" />
            </div>
          )}
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
          
          {/* Role Overlay */}
          <div className="absolute bottom-0 right-0 p-3 text-right">
             {/* Decorative Line */}
             <div className="w-8 h-1 bg-white mb-2 ml-auto rounded-full" />
            <h4 className="text-3xl font-[vampire] text-white drop-shadow-lg uppercase tracking-wide leading-none break-words">
              {role}
            </h4>
          </div>
        </div>
      </div>

      {/* Bottom Section: Socials */}
      <div className="mt-4 flex gap-2 justify-end border-t border-white/5 pt-4">
        {[
          { Icon: Github, href: socials?.github },
          { Icon: Linkedin, href: socials?.linkedin },
          { Icon: Twitter, href: socials?.twitter },
        ].map(({ Icon, href }, idx) => (
          href && (
            <a
              key={idx}
              href={href}
              className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
            >
              <Icon size={14} />
            </a>
          )
        ))}
      </div>
    </div>
  );
};

const StickyTeamSection = ({ title, description, teamName, members, themeColor, accentColor }) => {
  const sectionRef = useRef(null);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform vertical scroll to horizontal movement
  // Calculate based on number of members for smooth scrolling
  const totalCards = members.length + 1; // +1 for the "Join" card
  const scrollDistance = Math.min(totalCards * 12, 70); // Smoother scroll with less distance
  
  // Smoother easing for horizontal scroll
  const x = useTransform(
    scrollYProgress, 
    [0.1, 0.9], // Start and end the animation within this range for smoothness
    ["5%", `-${scrollDistance}%`]
  );
  
  // Smoother opacity and scale transitions
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  // Mobile vs Desktop Animation variants
  const mobileStyle = {};
  const desktopStyle = { x };

  return (
    // Single viewport height for clean section breaks with generous padding
    <section ref={sectionRef} className="relative min-h-screen bg-zinc-950 py-24 md:py-32 border-t border-white/5">
      
      {/* Background decorative elements */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ${themeColor} rounded-full blur-[150px] opacity-10 pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Text Section - Now at the top */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-5xl md:text-8xl font-[vampire] text-white uppercase mb-2 leading-[0.9] tracking-wide">
            {title}
            <span className={`block text-lg md:text-2xl font-[font1] font-bold tracking-wide mt-1 ${accentColor}`}>
              // {teamName}
            </span>
          </h2>
          <p className="text-zinc-400 text-base md:text-xl font-[font1] font-medium max-w-2xl leading-relaxed mt-4 border-l-2 border-zinc-800 pl-6">
            {description}
          </p>
        </motion.div>

        {/* Cards Section - Below the title */}
        {/* Desktop: Grid layout, Mobile: Horizontal scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
          {members.map((member, i) => (
            <MemberCard 
              key={i}
              {...member}
              teamName={teamName}
              color={themeColor}
            />
          ))}
          
          {/* End Card / Join CTA */}
          <div className="snap-center w-[280px] sm:w-[320px] h-[450px] sm:h-[500px] flex-shrink-0 flex items-center justify-center border-2 border-dashed border-zinc-800 rounded-2xl group cursor-pointer hover:border-zinc-600 hover:bg-zinc-900/50 transition-all">
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <ArrowRight className="text-white" />
              </div>
              <h3 className="text-2xl font-[vampire] text-white uppercase tracking-widest">Join the<br/>Team</h3>
            </div>
          </div>
        </div>


        {/* Desktop: Grid layout with generous spacing */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex justify-center"
            >
              <MemberCard 
                {...member}
                teamName={teamName}
                color={themeColor}
              />
            </motion.div>
          ))}
          
          {/* End Card / Join CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: members.length * 0.1 }}
            className="flex justify-center"
          >
            <div className="w-[280px] sm:w-[320px] h-[450px] sm:h-[500px] flex items-center justify-center border-2 border-dashed border-zinc-800 rounded-2xl group cursor-pointer hover:border-zinc-600 hover:bg-zinc-900/50 transition-all">
              <div className="text-center">
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <ArrowRight className="text-white" />
                </div>
                <h3 className="text-2xl font-[vampire] text-white uppercase">Join the<br/>Team</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer removed - using shared footer from page component

export default function TeamContent() {
  return (
    <main className="relative bg-zinc-950 min-h-screen selection:bg-blue-500 selection:text-white">
      <HeroStats />

      <StickyTeamSection 
        title="Core Team" 
        description="The visionaries and strategists guiding the cell towards new horizons of innovation."
        teamName="EXECUTIVE BOARD"
        members={CORE_TEAM}
        themeColor="bg-purple-600"
        accentColor="text-purple-500"
      />

      <StickyTeamSection 
        title="Tech Team" 
        description="The architects of our digital presence, turning complex problems into elegant code."
        teamName="DEVELOPERS & DESIGNERS"
        members={TECH_TEAM}
        themeColor="bg-blue-600"
        accentColor="text-blue-500"
      />
      
      {/* Additional space for smooth transition */}
      <div className="h-[20vh] bg-zinc-950"></div>
    </main>
  );
}