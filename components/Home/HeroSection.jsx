'use client';
import "../home.css";
import ashwagandha from "../../assets/images/ashwagandha.webp";
import ashwagandhaleft from "../../assets/images/ashwagandha1.webp";
import ashwagandharight from "../../assets/images/ashwagandha2.webp";
import greentea from "../../assets/images/greentea.webp";
import greentealeft from "../../assets/images/greentealeft.webp";
import greentearight from "../../assets/images/greentearight.webp";
import greenteainfo1 from "../../assets/images/greenteainfo1.webp";
import greenteainfo2 from "../../assets/images/greenteainfo2.webp";
import vitamind3 from "../../assets/images/vitamind3.webp";
import vitamin1 from "../../assets/images/vitamin1.webp";
import vitamin2 from "../../assets/images/vitamin2.webp";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [idx, setIdx] = useState(0);
  const autoSlideRef = useRef(null);
  const trackRef = useRef(null);

  const slides = [
    {
      title: "GREEN TEA",
      desc: "Refresh your body and mind with antioxidant-rich green tea crafted to boost wellness, metabolism, and everyday energy.",
      color: "radial-gradient(#72A003,#3B5400)",
      btnColor: "#72A003",
      fontSize: "15vw",
      mainImg: greentealeft,
      infoImgs: [greentea, greentea, greenteainfo2, greenteainfo1],
      bgImg: greentearight,
      link: "/productdetail/caffeine-plus-l-theanine-300mg",
    },
    {
      title: "ASHWAGANDHA",
      desc: "Experience natural stress relief, boosted immunity, and improved energy—every single day.",
      color: "radial-gradient(#5B2800,#341802)",
      btnColor: "#964200",
      fontSize: "11vw",
      mainImg: ashwagandha,
      infoImgs: [ashwagandha, ashwagandha, ashwagandharight, ashwagandhaleft],
      bgImg: null,
      link: "/productdetail/double-strength-ashwagandha-600mg",
    },
    {
      title: "VITAMIN D3",
      desc: "Support bone strength, immunity, and muscle function with the vitamin your body needs but rarely gets enough of from sunlight alone.",
      color: "radial-gradient(#B2CEE0,#507E9E)",
      btnColor: "#009BFF",
      fontSize: "14vw",
      mainImg: vitamind3,
      infoImgs: [vitamind3, vitamind3, vitamin2, vitamin1],
      bgImg: null,
      link: "/productdetail/vitamin-d3-5000iu-plus-vitamin-k2-120mcg",
    },
  ];

  const updateSlide = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slideEl = track.querySelector(".slide");
    if (!slideEl) return;
    const slideWidth = slideEl.getBoundingClientRect().width;
    track.style.transform = `translateX(-${idx * slideWidth}px)`;
  }, [idx]);

  // ✅ Fix: wrap nextSlide in useCallback so it's stable for useEffect deps
  const nextSlide = useCallback(() => {
    setIdx((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setIdx((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const startAutoSlide = useCallback(() => {
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setIdx((prev) => (prev + 1) % slides.length);
    }, 5000);
  }, [slides.length]);

  const resetAutoSlide = useCallback(() => {
    clearInterval(autoSlideRef.current);
    startAutoSlide();
  }, [startAutoSlide]);

  useEffect(() => {
    updateSlide();
  }, [updateSlide]);

  useEffect(() => {
    const handleResize = () => updateSlide();
    window.addEventListener("resize", handleResize);
    startAutoSlide();
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(autoSlideRef.current);
    };
  }, [startAutoSlide, updateSlide]);

  // Horizontal scroll helpers (kept in case used elsewhere)
  const scrollLeft = (id) => {
    document.getElementById(id)?.scrollBy(-300, 0);
  };
  const scrollRight = (id) => {
    document.getElementById(id)?.scrollBy(300, 0);
  };

  return (
    <>
      {/* === Slideshow Section === */}
      <div className="Homepage slideshow h-screen mt-0 pt-0" id="slideshow">
        <div className="track" id="track" ref={trackRef}>
          {slides.map((slide, i) => (
            <div
              className="Maindiv slide"
              key={i}
              style={{ background: slide.color }}
            >
              <div className="main-images-div">
                {/* ✅ Fix: bg image uses fill — parent must have position:relative in CSS */}
                {slide.bgImg && (
                  <Image
                    src={slide.bgImg}
                    alt="background"
                    id="Homemainbackimage"
                    fill
                    style={{ objectFit: "cover" }}
                    decoding="async"
                  />
                )}

                <div className="text-container">
                  <h2 style={{ fontSize: slide.fontSize }}>{slide.title}</h2>
                  <p>{slide.desc}</p>
                  {/* ✅ Fix: Next.js Link uses href, not to */}
                  <Link href={slide.link}>
                    <button
                      style={{
                        backgroundColor: slide.btnColor,
                        color: "white",
                      }}
                    >
                      <i
                        className="material-icons"
                        style={{ marginRight: "10px" }}
                      >
                        &#xe8cc;
                      </i>
                      Shop now
                    </button>
                  </Link>
                </div>

                {/* ✅ Fix: use width + height OR fill, not both */}
                <Image
                  src={slide.mainImg}
                  alt={slide.title}
                  id="Homemainimage"
                  width={400}
                  height={400}
                  style={{ objectFit: "contain" }}
                />

                {slide.infoImgs.map((img, j) => (
                  <Image
                    key={j}
                    src={img}
                    alt={`${slide.title} info ${j + 1}`}
                    id={`Homeimage${j + 1}`}
                    width={400}
                    height={400}
                    style={{ objectFit: "contain" }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="controls">
          <button
            id="prev"
            onClick={() => {
              prevSlide();
              resetAutoSlide();
            }}
          >
            ◀
          </button>
          <button
            id="next"
            onClick={() => {
              nextSlide();
              resetAutoSlide();
            }}
          >
            ▶
          </button>
        </div>
      </div>
    </>
  );
}