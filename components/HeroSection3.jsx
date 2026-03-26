"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const heroSectionData = [
  {
    id: 1,
    bgImage: "/earthmaa-banner-ashwagandha-supplement.webp",
    mobileBgImage: "/earthma-banner-ashwagandha-supplement-phn.webp",
    title: "Nature's Calm for a Stronger You.",
    heading: "Ashwagandha",
    subHeading: "Ashwagandha — Your Daily Stress & Strength Support",
    description:
      "Double Strength Ashwagandha is designed to deliver a more powerful dose of nature's most trusted adaptogen. With higher potency in every serving, it helps your body manage daily stress, support energy levels, improve focus, and promote overall balance—so you can stay calm, active, and performing at your best every day.",
    buttonText: "Buy Now",
  },
  {
    id: 2,
    bgImage: "/earthmaa-banner-coQ-supplement.webp",
    mobileBgImage: "/earthmaa-banner-coQ-supplement-phn.webp",
    title: "World No.1 Active CoQ10",
    heading: "coq10",
    subHeading: "UBIQUINOL Double Strength + Piperine",
    description:
      "Ubiquinol is the active and highly absorbable form of CoQ10 that helps support natural energy production, heart health, and overall vitality. When combined with Piperine (black pepper extract), it enhances nutrient absorption and bioavailability, allowing your body to utilize the formula more efficiently for faster and more effective results.",
    buttonText: "Buy Now",
  },
  {
    id: 3,
    bgImage: "/earthmaa-banner-vitaminD3-supplement.webp",
    mobileBgImage: "/earthmaa-banner-vitaminD3-supplement-phn.webp",
    title: "Sunshine Power for Stronger Bones",
    heading: "d3 2000iu",
    subHeading: "D3 + K2 5000 IU for Active Living",
    description:
      "Vitamin D3 helps your body absorb calcium, supports strong bones, muscle function, immunity, and overall daily energy. Vitamin K2 helps direct that absorbed calcium to the bones and teeth, improving bone density while helping prevent calcium buildup in arteries. Together, D3 + K2 work as a smart team — one brings calcium in, the other puts it in the right place.",
    buttonText: "Buy Now",
  },
];

const HeroSection3 = () => {
  // Track whether we're below the md breakpoint (768px)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full  sm:h-[580px] md:h-[700px] lg:h-[800px]"
    >
      {heroSectionData.map((item) => (
        <SwiperSlide key={item.id}>
          <section className="relative w-full h-[830px] sm:h-[830px] md:h-[700px] lg:h-[800px] flex flex-col md:flex-row md:items-center overflow-hidden pt-16 md:pt-20">

            <Image
              key={isMobile ? `${item.id}-mobile` : `${item.id}-desktop`}
              src={isMobile ? item.mobileBgImage : item.bgImage}
              alt={item.heading}
              fill
              priority
              className="object-cover object-center"
            />

            <div className="
              absolute inset-0 z-10
              bg-gradient-to-b from-black/65 via-black/30 to-transparent
              md:bg-gradient-to-r md:from-black/45 md:via-black/15 md:to-transparent
            " />

            {/* Content */}
            <div className="relative z-20 w-full md:max-w-8xl md:mx-auto px-4 sm:px-6 md:px-8">
              <div className="
                text-white
                w-full px-4 py-4 sm:px-5 sm:py-5
                md:max-w-4xl md:bg-black/20 md:backdrop-blur-sm md:p-6 md:rounded-xl
              ">
                {/* Small label */}
                <h4 className="uppercase tracking-widest text-xs sm:text-sm md:text-lg font-extrabold leading-none mb-1 font-[Orbitron]">
                  {item.title}
                </h4>

                {/* Main heading */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight uppercase font-[Orbitron] mt-0">
                  {item.heading}
                </h1>

                {/* Sub-heading */}
                <h2 className="text-sm sm:text-base md:text-xl uppercase leading-none mt-1 font-extrabold text-gray-200">
                  {item.subHeading}
                </h2>

                {/* Description — hidden on tiny phones (< sm) to keep banner clean */}
                <p className="hidden sm:block mt-2 md:mt-3 text-gray-300 font-semibold text-sm sm:text-base md:text-xl max-w-4xl text-justify">
                  {item.description}
                </p>

                {/* CTA Button */}
                <button className="mt-4 md:mt-6 cursor-pointer bg-yellow-500 text-black px-6 py-3 md:px-8 md:py-4 rounded-xl font-extrabold text-sm md:text-base hover:bg-yellow-300 transition">
                  BUY NOW
                </button>
              </div>
            </div>

          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection3;