"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection2() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const slides = [
    {
      tagline: "UBIQUINOL DOUBLE STRENGTH",
      headline: "COQ10",
      image: "/images/coq10.png",
      body: "bypasses this biological bottleneck by delivering CoQ10 in its most bioavailable, 'body-ready' state. By providing the reduced form directly, we ensure that your mitochondria — the powerhouses of your cells — get the spark they need without the extra metabolic 'work.'",
    },
    {
      tagline: "FOR MEN",
      headline: "EUROPHIA",
      image: "/images/europhia.png",
      body: "Most vitality products on the market are hidden behind proprietary blends, masking low-quality ingredients. Earthmaa stands by transparency. Europhia is Gluten-Free, Non-GMO, and Vegetarian, ensuring that you are fueling your body with the highest-grade extracts available.",
    },
    {
      tagline: "CALCIUM+MAGNESIUM+ZINC WITH VITAMIN D3",
      headline: "CMZ+3",
      image: "/images/cmzz3.png",
      body: "In the world of supplementation, we often focus on the flashy ingredients, but the true pillars of health are the foundational minerals. Earthmaa CMZ+3 is a high-potency complex of Calcium, Magnesium, and Zinc, fortified with Vitamin D3.",
    },
  ];

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  };

  /* PRODUCT ANIMATION */
  const imageVariants = {
    enter: {
      x: "120%",
      opacity: 0,
      scale: 0.9,
    },

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1],
      },
    },

    exit: {
      x: "-120%",
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 1.4,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  /* TEXT ANIMATION */
  const contentVariants = {
    enter: {
      y: "120%",
      opacity: 0,
    },

    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 1, 0.5, 1],
      },
    },

    exit: {
      y: "-40%",
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    enter: { y: 40, opacity: 0 },

    center: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
      },
    }),

    exit: (i) => ({
      y: -30,
      opacity: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a] font-sans">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rockbg.png"
          alt="rocky dark background"
          fill
          className="object-fit object-center opacity-70"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between min-h-screen py-16 gap-8">

        {/* TEXT */}
        <div className="flex-1 max-w-xl relative z-20">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={current}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >

              <motion.p
                custom={0}
                variants={itemVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-[#d4f000] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-3 drop-shadow-[0_0_8px_rgba(212,240,0,0.6)]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {slides[current].tagline}
              </motion.p>

              <motion.h1
                custom={1}
                variants={itemVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-[#d4f000] leading-none font-black uppercase text-[clamp(3rem,15vw,8rem)] drop-shadow-[0_0_30px_rgba(212,240,0,0.35)] tracking-tighter"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {slides[current].headline}
              </motion.h1>

              <motion.p
                custom={2}
                variants={itemVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-gray-300 text-sm md:text-base leading-relaxed mt-4 mb-8 max-w-md"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                {slides[current].body}
              </motion.p>

              <motion.button
                custom={3}
                variants={itemVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-[#d4f000] text-black text-xs font-extrabold uppercase tracking-[0.2em] px-8 py-3 rounded-none hover:bg-white transition-colors duration-200 shadow-[0_0_24px_rgba(212,240,0,0.4)] hover:shadow-[0_0_32px_rgba(255,255,255,0.3)]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                BUY NOW
              </motion.button>
            </motion.div>
          </AnimatePresence>

          {/* arrows */}
          <div className="flex gap-3 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-[#d4f000]/40 text-[#d4f000] flex items-center justify-center hover:bg-[#d4f000]/10 transition-colors duration-200"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="w-10 h-10 border border-[#d4f000]/40 text-[#d4f000] flex items-center justify-center hover:bg-[#d4f000]/10 transition-colors duration-200"
            >
              ›
            </button>
          </div>
        </div>

        {/* PRODUCT */}
        <div className="flex-shrink-0 flex items-center justify-center relative z-10">

          <div
            className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(212,240,0,0.18) 0%, transparent 70%)",
              filter: "blur(32px)",
            }}
          />

          <AnimatePresence mode="popLayout">
            <motion.div
              key={current}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative w-80 md:w-[400px] lg:w-[400px] aspect-[3/4] drop-shadow-2xl"
            >
              <Image
                src={slides[current].image}
                alt="product"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4f000]/40 to-transparent z-10" />
    </section>
  );
}