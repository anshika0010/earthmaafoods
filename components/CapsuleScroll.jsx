"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import cap1 from "@/assets/images/cap1.webp";
import cap2 from "@/assets/images/cap2.webp";
import cap3 from "@/assets/images/cap3.webp";
import cap4 from "@/assets/images/cap4.webp";

export default function CapsuleScroll() {
  const sectionRef = useRef(null);
  const imgRefs = useRef([]);
  const rafRef = useRef(null);
  const lastProgressRef = useRef(-1);

  useEffect(() => {
    // Preload all images
    imgRefs.current.forEach((img) => {
      if (img) img.style.willChange = "transform, opacity";
    });

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const images = imgRefs.current;
      const fallingCapsule = images[0];

      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const scrollRange = rect.height - viewportH;

      const scrolled = Math.min(Math.max(-rect.top, 0), scrollRange);
      const progress = scrolled / (scrollRange || 1);

      // Skip if unchanged (micro-optimization)
      if (Math.abs(progress - lastProgressRef.current) < 0.0005) return;
      lastProgressRef.current = progress;

      // Always show background capsule
      if (images[3]) images[3].style.opacity = "1";

      // Falling capsule: falls from above into frame
      const fallDistance = progress * viewportH * 0.85;
      if (fallingCapsule) {
        fallingCapsule.style.transform = `translateY(${fallDistance}px)`;
      }

      if (progress < 0.75) {
        // Phase 1: Capsule falling in
        if (fallingCapsule) fallingCapsule.style.opacity = "1";
        if (images[1]) { images[1].style.opacity = "0"; images[1].style.transform = "scale(0.85)"; }
        if (images[2]) { images[2].style.opacity = "0"; images[2].style.transform = "scale(0.85)"; }
      } else if (progress >= 0.75 && progress < 0.87) {
        // Phase 2: First blast
        const blastProgress = (progress - 0.75) / 0.12;
        if (fallingCapsule) fallingCapsule.style.opacity = `${1 - blastProgress * 8}`;
        if (images[1]) {
          images[1].style.opacity = `${Math.min(blastProgress * 3, 1)}`;
          images[1].style.transform = `scale(${0.85 + blastProgress * 0.2})`;
        }
        if (images[2]) { images[2].style.opacity = "0"; images[2].style.transform = "scale(0.85)"; }
      } else {
        // Phase 3: Second blast
        const blastProgress = (progress - 0.87) / 0.13;
        if (fallingCapsule) fallingCapsule.style.opacity = "0";
        if (images[1]) {
          images[1].style.opacity = `${1 - blastProgress * 2}`;
          images[1].style.transform = `scale(${1.05 + blastProgress * 0.05})`;
        }
        if (images[2]) {
          images[2].style.opacity = `${Math.min(blastProgress * 3, 1)}`;
          images[2].style.transform = `scale(${0.85 + blastProgress * 0.2})`;
        }
      }
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    // Init
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
<div className="sticky top-0 h-[50vh] md:h-screen bg-white flex items-center justify-center overflow-hidden">
        {/* Background Capsule - always visible */}
        <Image
          src={cap2}
          alt="capsule background"
          ref={(el) => (imgRefs.current[3] = el)}
          className="absolute bottom-0 max-w-[1100px] w-full opacity-0 pointer-events-none select-none"
          style={{ transition: "opacity 0.1s ease" }}
          priority
        />

        {/* Falling Capsule */}
        <Image
          src={cap1}
          alt="capsule falling"
          ref={(el) => (imgRefs.current[0] = el)}
          className="absolute bottom-0 max-w-[700px] w-full opacity-0 pointer-events-none select-none"
          style={{ transition: "opacity 0.05s linear" }}
          priority
        />

        {/* Blast Stage 1 */}
        <Image
          src={cap3}
          alt="capsule blast 1"
          ref={(el) => (imgRefs.current[1] = el)}
          className="absolute bottom-[-100px] max-w-[700px] w-full opacity-0 pointer-events-none select-none"
          style={{ transition: "opacity 0.08s ease-out, transform 0.08s ease-out" }}
          priority
        />

        {/* Blast Stage 2 */}
        <Image
          src={cap4}
          alt="capsule blast 2"
          ref={(el) => (imgRefs.current[2] = el)}
          className="absolute bottom-[70px] max-w-[700px] w-full opacity-0 pointer-events-none select-none"
          style={{ transition: "opacity 0.08s ease-out, transform 0.08s ease-out" }}
          priority
        />
      </div>
    </section>
  );
}