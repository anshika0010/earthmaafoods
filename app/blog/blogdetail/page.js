"use client";

import Image from "next/image";
import Link from "next/link";

const relatedPosts = [
  {
    id: 1,
    title: "5 Ayurvedic Herbs for Better Sleep",
    category: "Wellness",
    date: "Feb 12, 2025",
    image: "/images/blog2.webp",
    slug: "ayurvedic-herbs-sleep",
  },
  {
    id: 2,
    title: "How Vitamin D3 Boosts Immunity",
    category: "Nutrition",
    date: "Jan 28, 2025",
    image: "/images/blog3.webp",
    slug: "vitamin-d3-immunity",
  },
  {
    id: 3,
    title: "Morning Routines for a Healthier You",
    category: "Lifestyle",
    date: "Jan 10, 2025",
    image: "/images/blog4.webp",
    slug: "morning-routines-health",
  },
];

export default function BlogDetailPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-gray-800">

      {/* ── Hero Banner ── */}
      <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
        <Image
          src="/images/blog-hero.webp"
          alt="Blog Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-3xl mx-auto text-white">
          <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
            Health & Wellness
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-3">
            The Science Behind Ashwagandha: Nature's Most Powerful Adaptogen
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-green-400 flex items-center justify-center text-xs font-bold text-white">
                E
              </div>
              <span>Earthmaa Editorial</span>
            </div>
            <span>·</span>
            <span>March 5, 2025</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

        {/* Article Body */}
        <article>

          {/* Lead paragraph */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed border-l-4 border-green-500 pl-5 mb-10 italic">
            Ashwagandha, known in Sanskrit as "the smell of a horse," has been a cornerstone
            of Ayurvedic medicine for over 3,000 years — and modern science is finally
            catching up with what ancient healers always knew.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            What Is Ashwagandha?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Ashwagandha (<em>Withania somnifera</em>) is a small shrub native to India,
            the Middle East, and parts of Africa. Its roots and berries have been used
            in traditional medicine to treat a wide range of conditions — from stress and
            fatigue to inflammation and hormonal imbalances.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            The active compounds, called withanolides, are responsible for most of its
            therapeutic benefits. These steroidal lactones have been shown in clinical
            studies to modulate the stress-response system, reduce cortisol levels, and
            support overall mental and physical vitality.
          </p>

          {/* Pull quote */}
          <blockquote className="bg-green-50 border-l-4 border-green-500 rounded-xl px-6 py-5 mb-10">
            <p className="text-green-800 font-semibold text-base md:text-lg leading-relaxed">
              "Clinical trials have demonstrated up to a 30% reduction in cortisol levels
              among participants who took a standardized ashwagandha extract daily for
              60 days."
            </p>
            <cite className="block mt-3 text-sm text-green-600">
              — Journal of the American Nutraceutical Association
            </cite>
          </blockquote>

          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Key Benefits Backed by Research
          </h2>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: "🧠", title: "Reduces Stress & Anxiety", desc: "Lowers cortisol and balances adrenal function for a calmer mind." },
              { icon: "💪", title: "Boosts Strength & Stamina", desc: "Improves VO2 max, muscle recovery, and physical endurance." },
              { icon: "😴", title: "Improves Sleep Quality", desc: "Supports deeper, more restful sleep by calming the nervous system." },
              { icon: "🛡️", title: "Strengthens Immunity", desc: "Enhances immune cell activity and reduces inflammatory markers." },
            ].map((b) => (
              <div key={b.title} className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <span className="text-2xl mt-0.5">{b.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            How to Use It
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The most effective form is a root extract standardized to contain at least
            5% withanolides. Most clinical studies use doses between 300–600 mg per day,
            taken with meals. Results are typically noticeable within 4–8 weeks of
            consistent use.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            At Earthmaa, our Double Strength Ashwagandha delivers 600 mg of KSM-66
            extract per capsule — the most clinically studied form of ashwagandha
            available today.
          </p>

          {/* CTA card */}
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-7 text-white flex flex-col sm:flex-row items-center justify-between gap-5 mb-12">
            <div>
              <p className="text-green-200 text-sm font-medium mb-1">Featured Product</p>
              <h3 className="text-xl font-bold mb-1">Double Strength Ashwagandha 600mg</h3>
              <p className="text-green-200 text-sm">KSM-66 extract · 60 capsules · 2 month supply</p>
            </div>
            <Link href="/productdetail/double-strength-ashwagandha-600mg">
              <button className="bg-yellow-400 hover:bg-yellow-300 transition-colors text-gray-900 font-bold text-sm px-6 py-3 rounded-full whitespace-nowrap shadow-lg">
                Shop Now →
              </button>
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Ashwagandha", "Adaptogens", "Stress Relief", "Ayurveda", "Supplements", "Wellness"].map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 hover:bg-green-100 hover:text-green-700 text-gray-500 text-xs font-medium px-4 py-1.5 rounded-full cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
            <span className="text-sm font-semibold text-gray-500 mr-1">Share:</span>
            {[
              { label: "Twitter", color: "bg-sky-500", icon: "𝕏" },
              { label: "Facebook", color: "bg-blue-600", icon: "f" },
              { label: "WhatsApp", color: "bg-green-500", icon: "✉" },
            ].map((s) => (
              <button
                key={s.label}
                className={`${s.color} text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}
                aria-label={`Share on ${s.label}`}
              >
                {s.icon}
              </button>
            ))}
          </div>
        </article>

        {/* ── Sidebar ── */}
        <aside className="space-y-8">

          {/* Author card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-2xl mx-auto mb-3">
              🌿
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Earthmaa Editorial</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Our team of health experts and nutritionists share evidence-based insights
              to help you live better, naturally.
            </p>
          </div>

          {/* Table of contents */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
              In This Article
            </h3>
            <ul className="space-y-2.5">
              {[
                "What Is Ashwagandha?",
                "Key Benefits Backed by Research",
                "How to Use It",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-600 hover:text-green-600 cursor-pointer transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-green-700 rounded-2xl p-6 text-white">
            <h3 className="font-bold mb-1">Stay in the loop 🌱</h3>
            <p className="text-green-200 text-xs mb-4 leading-relaxed">
              Get wellness tips and new product updates delivered to your inbox.
            </p>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-green-300 text-sm rounded-xl px-4 py-2.5 mb-3 outline-none focus:border-yellow-400 transition-colors"
            />
            <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-colors text-gray-900 font-bold text-sm py-2.5 rounded-xl">
              Subscribe
            </button>
          </div>
        </aside>
      </div>

      {/* ── Related Posts ── */}
      <div className="bg-white border-t border-gray-100 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <div className="bg-[#faf9f6] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Back to Blog ── */}
      <div className="text-center py-10">
        <Link href="/blog">
          <button className="border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-all text-sm font-bold px-8 py-3 rounded-full">
            ← Back to Blog
          </button>
        </Link>
      </div>
    </main>
  );
}