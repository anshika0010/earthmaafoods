"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductList from "@/components/Product/ProductList";
import NonVegIcon from "../../../assets/images/non-vegetarianicon.webp";
import SoyFreeIcon from "../../../assets/images/soyicon.webp";
import GlutenFreeIcon from "../../../assets/images/glutenicon.webp";
import VegIcon from "../../../assets/images/vegetarianicon.webp";
// ─── Static Dummy Data ────────────────────────────────────────────────────────
const DUMMY_PRODUCT = {
  skuId: "EARTH-OMEGA3-60",
  itemName: "Earthmaa Omega-3 Fish Oil 1000mg",
  brand: "earthmaa",
  dietType: "non-vegetarian",
  fullDescription:
    "Premium cold-water fish oil delivering 1000mg of Omega-3 fatty acids per softgel. Sourced from sustainably caught wild fish, molecularly distilled for purity, and third-party tested for potency. Supports heart health, brain function, and joint mobility.",
  productBenefits: JSON.stringify([
    "Supports cardiovascular health & healthy triglyceride levels",
    "Promotes cognitive function, focus & memory",
    "Reduces inflammation and joint discomfort",
    "Contributes to healthy skin, hair & nails",
    "Aids in eye health and visual acuity",
  ]),
  use: JSON.stringify([
    "Take 2 softgels daily with a meal",
    "For best results, take with a fat-containing meal",
    "Can be split into two doses — morning and evening",
    "Keep refrigerated after opening to maintain freshness",
  ]),
  safety: JSON.stringify([
    "Consult your physician before use if pregnant or nursing",
    "Not intended for individuals with fish or shellfish allergies",
    "Keep out of reach of children",
    "Do not exceed the recommended daily dose",
    "Discontinue use 2 weeks before any scheduled surgery",
  ]),
  factdetails: `
    <div class="nutrition-wrapper">
      <div class="nutrition-title">Supplement Facts</div>
      <div class="nutrition-serving">Serving Size: 2 Softgels &nbsp;|&nbsp; Servings Per Container: 30</div>
      <table class="nutrition-table">
        <thead>
          <tr>
            <th>Amount Per Serving</th>
            <th>% Daily Value</th>
          </tr>
        </thead>
        <tbody>
          <tr class="highlight"><td>Total Fat 2g</td><td>3%</td></tr>
          <tr><td class="padded">Saturated Fat 0.5g</td><td>3%</td></tr>
          <tr><td class="padded">Trans Fat 0g</td><td>—</td></tr>
          <tr class="highlight"><td>Calories 20</td><td></td></tr>
          <tr><td>Fish Oil Concentrate 1000mg</td><td>†</td></tr>
          <tr class="padded-row"><td class="padded">EPA (Eicosapentaenoic Acid) 360mg</td><td>†</td></tr>
          <tr class="padded-row"><td class="padded">DHA (Docosahexaenoic Acid) 240mg</td><td>†</td></tr>
          <tr><td>Vitamin D3 400IU</td><td>50%</td></tr>
        </tbody>
      </table>
      <p class="nutrition-footnote">† Daily Value not established.<br/>Other Ingredients: Gelatin (Bovine), Glycerin, Purified Water, Natural Lemon Flavor, Mixed Tocopherols.</p>
    </div>
  `,
  images: [
    "/images/earthmaa.png",
    "/images/earthmaa.png",
    "/images/earthmaa.png",
    "/images/earthmaa.png",
  ],
};


const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);
const MinusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
  </svg>
);

// ─── Helpers ──────────────────────────────────────────────────────────────────
const jsonParseSafe = (value) => {
  if (!value) return [];
  try {
    return Array.isArray(value) ? value : JSON.parse(value);
  } catch {
    return typeof value === "string" ? value.split(",") : [];
  }
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function AccordionItem({ title, items, isOpen, onToggle }) {
  return (
    <div className="border border-[#C7A566] rounded-sm overflow-hidden mb-3">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left text-base font-semibold tracking-wide text-gray-800 hover:bg-amber-50 transition-colors duration-200 select-none"
      >
        <span>{title}</span>
        <span className="text-[#C7A566] flex-shrink-0">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="list-disc px-8 py-4 space-y-1.5">
          {items.map((item, i) => (
            <li key={i} className="text-gray-700 text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CertBadge({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-1.5 min-w-[60px]">
      {icon}
      <span className="text-[10px] font-medium text-gray-600 text-center leading-tight">{label}</span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const ProductDetail = () => {
  const product = DUMMY_PRODUCT;
  const [mainImage, setMainImage] = useState("/images/earthmaa.png");
  const [activeIndex, setActiveIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [qty, setQty] = useState(1);

  const isVeg = product.dietType === "vegetarian";

  const accordionData = [
    { title: "Benefits", items: jsonParseSafe(product.productBenefits) },
    { title: "Suggested Use", items: jsonParseSafe(product.use) },
    { title: "Safety Information", items: jsonParseSafe(product.safety) },
  ];

  return (
    <div className="min-h-screen mt-20 bg-white font-sans">

      {/* ── Breadcrumb ── */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 text-xs text-gray-500 flex items-center gap-1.5">
        <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-amber-600 transition-colors">Products</Link>
        <span>/</span>
        <span className="text-gray-800 font-bold truncate max-w-[200px]">{product.itemName}</span>
      </nav>

      {/* ── Product Header ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

        {/* Left — Image Gallery */}
        <div className="flex gap-3 lg:sticky lg:top-6 h-fit">
          {/* Thumbnails */}
          <div className="flex flex-col gap-2 w-[72px] flex-shrink-0 overflow-y-auto max-h-[520px] scrollbar-hide">
            {product.images.map((src, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(src)}
                className={`aspect-square rounded-md overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                  mainImage === src
                    ? "border-[#C7A566] shadow-md"
                    : "border-gray-200 hover:border-amber-300"
                }`}
              >
                <img src={ "/images/earthmaa.png"} alt={`product-${idx}`} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 aspect-square rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
            <img
              src={mainImage}
              alt={product.itemName}
              className="w-full h-full object-contain transition-all duration-500"
            />
          </div>
        </div>

        {/* Right — Product Info */}
        <div className="flex flex-col">
          {/* Brand */}
          <span className="text-xs font-bold tracking-[0.2em] text-[#C7A566] uppercase mb-2">
            Earthmaa
          </span>

          {/* Title */}
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug mb-4">
            {product.itemName}
          </h3>

          {/* Rating stars (static) */}
          <div className="flex items-center gap-2 mb-5">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} className={`w-4 h-4 ${s <= 4 ? "text-amber-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500">4.0 (128 reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-5">
            <span className="text-3xl font-extrabold text-gray-900">₹1,299</span>
            <span className="text-lg text-gray-400 line-through">₹1,599</span>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">19% OFF</span>
          </div>

          {/* Certifications */}
       <div className="flex items-center gap-6 py-4 border-t border-b border-gray-100 mb-5">

  <div className="flex flex-col items-center">
    <Image src={NonVegIcon} alt="Non Veg" width={70} height={70} />
    <span className="text-[11px] text-gray-600 mt-1">Non-Veg</span>
  </div>

  <div className="flex flex-col items-center">
    <Image src={VegIcon} alt="Vegetarian" width={70} height={70} />
    <span className="text-[11px] text-gray-600 mt-1">Vegetarian</span>
  </div>

  <div className="flex flex-col items-center">
    <Image src={SoyFreeIcon} alt="Soy Free"width={70} height={70}/>
    <span className="text-[11px] text-gray-600 mt-1">Soy Free</span>
  </div>

  <div className="flex flex-col items-center">
    <Image src={GlutenFreeIcon} alt="Gluten Free" width={70} height={70} />
    <span className="text-[11px] text-gray-600 mt-1">Gluten Free</span>
  </div>

</div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {product.fullDescription}
          </p>

          {/* Quantity + Buy */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-3 py-3 hover:bg-gray-100 transition-colors text-gray-700"
              >
                <MinusIcon />
              </button>
              <span className="px-5 py-3 text-sm font-semibold text-gray-800 min-w-[40px] text-center">
                {qty}
              </span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-3 hover:bg-gray-100 transition-colors text-gray-700"
              >
                <PlusIcon />
              </button>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="flex-1 bg-[#C7A566] hover:bg-amber-600 text-white font-bold py-3.5 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm tracking-wide uppercase"
            >
              Shop Now
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 text-xs text-gray-500">
            {["🚚 Free delivery above ₹499", "🔁 Easy 7-day returns", "✅ Lab tested & certified"].map((b) => (
              <span key={b} className="bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5">{b}</span>
            ))}
          </div>

          {/* Accordion */}
          <div className="mt-8">
            {accordionData.map((item, idx) => (
              <AccordionItem
                key={idx}
                title={item.title}
                items={item.items}
                isOpen={activeIndex === idx}
                onToggle={() => setActiveIndex(activeIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Nutrition Facts ── */}
      <section className="bg-[#f9ecd9] py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-2xl font-extrabold text-gray-900 mb-8">
            Nutrition <span className="text-[#C7A566]">Facts</span>
          </h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 sm:grid-cols-2">
            {/* Product image */}
            <div className="bg-gray-50 flex items-center justify-center p-6">
              <img
                src={product.images[0]}
                alt="Nutrition"
                className="w-full max-w-[220px] rounded-xl object-cover shadow-md"
              />
            </div>
            {/* Facts table */}
            <div
              className="p-5 text-sm"
              style={{ fontFamily: "Arial, sans-serif" }}
              dangerouslySetInnerHTML={{ __html: product.factdetails }}
            />
          </div>
        </div>

        <style>{`
          .nutrition-wrapper { padding: 8px 0; }
          .nutrition-title { font-size: 22px; font-weight: 900; border-bottom: 6px solid black; padding-bottom: 6px; margin-bottom: 4px; }
          .nutrition-serving { font-size: 11px; color: #555; margin-bottom: 10px; }
          .nutrition-table { width: 100%; border-collapse: collapse; font-size: 13px; }
          .nutrition-table thead tr { border-bottom: 3px solid black; }
          .nutrition-table th { text-align: left; padding: 4px 0; font-weight: 700; font-size: 11px; color: #444; }
          .nutrition-table td { padding: 4px 0; border-bottom: 1px solid #ddd; }
          .nutrition-table tr.highlight td { font-weight: 700; border-bottom: 3px solid #000; }
          .nutrition-table td.padded { padding-left: 14px; font-size: 12px; }
          .nutrition-table tr.padded-row td { padding-left: 14px; font-size: 12px; }
          .nutrition-footnote { font-size: 10px; color: #666; margin-top: 10px; line-height: 1.5; }
        `}</style>
      </section>

      {/* ── Related Products ── */}
      {/* <section className="bg-[#F3F4F6] py-12 px-4 sm:px-6">
        <h2 className="text-center text-2xl font-extrabold text-gray-900 mb-8">
          <span className="text-[#009bff]">Explore Related</span> Products
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {RELATED_PRODUCTS.map((item) => (
            <Link key={item.skuId} href={`/productdetail/${item.skuId}`}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer h-full">
                <div className="w-full aspect-square overflow-hidden bg-gray-50">
                  <img
                    src={item.images[0]}
                    alt={item.itemName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
                    {item.itemName}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section> */}
      <ProductList/>

      {/* ── Modal ── */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Where to Buy?</h3>
            <div className="flex gap-3 mb-4">
              <img
                src={product.images[0]}
                alt={product.itemName}
                className="w-20 h-20 object-cover rounded-xl border border-gray-100"
              />
              <div>
                <p className="font-semibold text-gray-800 text-sm leading-snug mb-1">
                  {product.itemName}
                </p>
                <p className="text-[#C7A566] font-bold text-lg">₹1,299 × {qty}</p>
              </div>
            </div>
            <div className="space-y-3">
              {["Amazon", "Flipkart", "Earthmaa Website"].map((store) => (
                <button
                  key={store}
                  className="w-full py-3 rounded-lg border-2 border-gray-200 hover:border-[#C7A566] hover:bg-amber-50 text-gray-800 font-semibold text-sm transition-all duration-200"
                >
                  Buy on {store} →
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-5 w-full py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;