"use client";

import Link from "next/link";
import Image from "next/image";


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

export default function ProductList() {
  return (
    <section className="max-w-full mx-auto bg-white py-16 px-4">
    
{/* Products Grid */}
<div className="max-w-7xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
    {products.map((product) => (
      <div key={product.id}>
        <div className="relative bg-gray-50 shadow-xl   rounded-2xl overflow-visible group mx-1">
          
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
              <h3 className="text-sm font-bold text-gray-900">
                {product.name}
              </h3>
              <p className="text-xs text-gray-400">{product.subtitle}</p>
              <p className="text-xs text-gray-400">{product.dosage}</p>
            </div>

            <Link href={product.link}>
              <button className="bg-gray-900 cursor-pointer hover:bg-yellow-500 text-white text-xs font-semibold px-3 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md">
                Buy Now
              </button>
            </Link>
          </div>

        </div>
      </div>
    ))}
  </div>
</div>

    
    </section>
  );
}