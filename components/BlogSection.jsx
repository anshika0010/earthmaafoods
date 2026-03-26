"use client";

import { useState } from "react";

const posts = [
  {
    id: 1,
    category: "Design",
    tag: "Featured",
    title: "The Art of Negative Space in Modern UI",
    excerpt:
      "Less is always more — but knowing where to place the 'less' is the hardest design problem of all. We explore how whitespace shapes perception.",
    author: "Mira Osei",
    avatar: "MO",
    date: "Mar 14, 2026",
    readTime: "5 min read",
    accent: "#E8FF47",
  },
  {
    id: 2,
    category: "Engineering",
    tag: "Deep Dive",
    title: "Why Server Components Changed Everything",
    excerpt:
      "React Server Components aren't just an optimization trick — they fundamentally reshape how we think about data, rendering, and architecture.",
    author: "Dev Sharma",
    avatar: "DS",
    date: "Mar 10, 2026",
    readTime: "8 min read",
    accent: "#FF6B6B",
  },
  {
    id: 3,
    category: "Culture",
    tag: "Essay",
    title: "Slow Work in a Fast Industry",
    excerpt:
      "Shipping fast is celebrated. But the best products are often built by teams that slow down, think harder, and say no more than yes.",
    author: "Lena Kraft",
    avatar: "LK",
    date: "Mar 5, 2026",
    readTime: "4 min read",
    accent: "#7EB8FF",
  },
  {
    id: 4,
    category: "Product",
    tag: "Case Study",
    title: "From Zero to a Thousand Daily Users",
    excerpt:
      "A brutally honest breakdown of our first six months — what we got wrong, what worked, and why we almost killed the product in week three.",
    author: "James Olu",
    avatar: "JO",
    date: "Feb 28, 2026",
    readTime: "11 min read",
    accent: "#A47FFF",
  },
];

const categories = ["All", "Design", "Engineering", "Culture", "Product"];

export default function BlogSection() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState(null);

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <section
      className="min-h-screen bg-gray-100 text-white px-6 py-2 font-sans"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=DM+Serif+Display:ital@0;1&display=swap');
        .serif { font-family: 'DM Serif Display', serif; }
        .card-hover { transition: transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(0,0,0,0.5); }
        .tag-pill { backdrop-filter: blur(8px); }
        .dot-grid {
          background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .fade-in { animation: fadeUp 0.6s ease both; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-3 fade-in">
         
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h5
              className="serif text-5xl md:text-7xl text-black leading-[1.05]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Ideas worth
              <br />
              <em className="text-green-400">reading.</em>
            </h5>
            <p className="text-gray-700 text-sm max-w-xs leading-relaxed">
              Dispatches on design, engineering, and the craft of building
              products people actually love.
            </p>
          </div>
        </div>

    


        {/* Grid of remaining cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {filtered.slice(1).map((post, i) => (
            <div
              key={post.id}
              className="relative rounded-2xl overflow-hidden cursor-pointer card-hover border border-black/25 fade-in"
              style={{
                animationDelay: `${0.25 + i * 0.1}s`,
                background: `linear-gradient(160deg, #f5f0f0 50%, ${post.accent}12 100%)`,
              }}
              onMouseEnter={() => setHovered(post.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="p-7">
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="tag-pill text-[9px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border"
                    style={{
                      color: post.accent,
                      borderColor: `${post.accent}40`,
                      background: `${post.accent}10`,
                    }}
                  >
                    {post.tag}
                  </span>
                  <span className="text-[10px] text-neutral-600 uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>

                <h3
                  className="serif text-black text-xl leading-snug mb-3"
          
                >
                  {post.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-black/15">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-black flex-shrink-0"
                    style={{ background: post.accent }}
                  >
                    {post.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-black truncate">
                      {post.author}
                    </p>
                    <p className="text-[10px] text-neutral-600">
                      {post.date} · {post.readTime}
                    </p>
                  </div>
                  <svg
                    className="ml-auto flex-shrink-0 transition-all duration-200"
                    style={{ color: hovered === post.id ? post.accent : "#444" }}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div
                className="absolute bottom-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl pointer-events-none"
                style={{ background: post.accent }}
              />
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-6 text-center fade-in" style={{ animationDelay: "0.5s" }}>
          <button className="group inline-flex items-center gap-3 border border-grayl-700 hover:border-black text-neutral-400 hover:text-black px-8 py-3 rounded-full text-sm font-medium transition-all duration-300">
            Browse all articles
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}