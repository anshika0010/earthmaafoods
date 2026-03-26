"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    name: "Chromium Picolinate",
    subtitle: "Ultra High Stim Preworkout",
    dosage: "1000 mcg per serving",
    tag: "NEW",
    link: "/productlist/productdetail",
    image: "/images/earthmaa.png",
  },
  {
    id: 2,
    name: "Vitamin D3",
    subtitle: "Ultra High Stim Preworkout",
    dosage: "1000 mcg per serving",
    tag: "NEW",
    link: "/productlist/productdetail",
    image: "/images/earthmaa.png",
  },
  {
    id: 3,
    name: "Chromium Picolinate",
    subtitle: "Ultra High Stim Preworkout",
    dosage: "1000 mcg per serving",
    tag: "NEW",
    link: "/productlist/productdetail",
    image: "/images/earthmaa.png",
  },
  {
    id: 4,
    name: "Vitamin D3",
    subtitle: "Ultra High Stim Preworkout",
    dosage: "1000 mcg per serving",
    tag: "NEW",
    link: "/productlist/productdetail",
    image: "/images/earthmaa.png",
  },
   {
    id: 5,
    name: "Chromium Picolinate",
    subtitle: "Ultra High Stim Preworkout",
    dosage: "1000 mcg per serving",
    tag: "NEW",
    link: "/productlist/productdetail",
    image: "/images/earthmaa.png",
  },
   {
    id: 6,
    name: "Chromium Picolinate",
    subtitle: "Ultra High Stim Preworkout",
    dosage: "1000 mcg per serving",
    tag: "NEW",
    link: "/productlist/productdetail",
    image: "/images/earthmaa.png",
  },
];

export default function NewLaunchSection() {
  return (
    <section className="max-w-8xl mx-auto bg-white py-6 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          New Launch Product
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Discover Earthmaa's newest supplements designed to elevate your health
          and wellness journey with advanced, nature-powered formulas.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="max-w-8xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={15}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="new-launch-swiper !pb-10"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative bg-gray-50 shadow-xl  rounded-2xl overflow-visible group mx-1">
                {/* NEW tag */}
                <div className="absolute top-3 right-0 z-10">
                  <div className="bg-sky-400 text-white text-[10px] font-bold px-3 py-1 rounded-l-full tracking-widest shadow">
                    NEW
                  </div>
                </div>

                {/* View Product button */}
                <div className="absolute top-3 left-3 z-10">
                  <Link href={product.link}>
                    <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors text-gray-900 text-[10px] font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 shadow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 11H4L5 9z"
                        />
                      </svg>
                      View Product
                    </button>
                  </Link>
                </div>

                {/* Product Image */}
                <div className="flex items-end justify-center h-52 pt-10 px-4 relative">
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Card Bottom */}
                <div className="flex items-center justify-between px-4 py-4 mt-2">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {product.subtitle}
                    </p>
                    <p className="text-xs text-gray-400">{product.dosage}</p>
                  </div>

                  {/* Buy Now */}
                  <Link href={product.link}>
                    <button className="bg-gray-900 cursor-pointer hover:bg-yellow-500 transition-colors text-white text-xs font-semibold px-3 py-2.5 rounded-xl flex items-center gap-1.5 flex-shrink-0 shadow-md">
                      Buy Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H7M17 7v10"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-6">
        <Link href="/productlist">
          <button className="bg-sky-400 hover:bg-sky-500 transition-colors text-white text-sm font-semibold px-8 py-3 rounded-full shadow-md">
            View all Products
          </button>
        </Link>
      </div>
    </section>
  );
}