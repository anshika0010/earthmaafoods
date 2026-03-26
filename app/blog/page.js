"use client";

import React, { useState } from "react";
import "./blog.css";
import Image from "next/image";
import noimage from "../../assets/images/noimage.webp";
import Link from "next/link";

const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function Blog() {
  const [activeCat, setActiveCat] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = [
    { id: "all", label: "All" },
    { id: "men", label: "Men's Wellness" },
    { id: "women", label: "Women's Wellness" },
    { id: "energy", label: "Energy & Strength" },
    { id: "sleep", label: "Better Sleep & Stress Relief" },
    { id: "bones", label: "Strong Bones & Joints" },
    { id: "heart", label: "Heart & Blood Sugar Support" },
    { id: "detox", label: "Detox & Weight Balance" },
    { id: "immunity", label: "Immunity & Everyday Health" },
    { id: "gut", label: "Gut & Digestion" },
    { id: "skin", label: "Skin, Hair & Beauty" },
  ];

  // Example blog data (replace with API later)
  const blogs = [
    {
      title: "Benefits of Green Tea",
      author: "Admin",
      date: "March 10, 2026",
      category: "energy",
      image: noimage,
    },
  ];

  const filteredBlogs =
    activeCat === "all"
      ? blogs
      : blogs.filter((b) => b.category === activeCat);

  return (
    <>
      <div className="blog-page">
        
        {/* HERO */}
        <section className="hero"></section>

<h1 className="text-center my-[10px] text-3xl font-bold">
  Blog
</h1>

{/* CATEGORY FILTER */}
<section className="w-full py-4">
  <div className="flex flex-wrap gap-3 px-4 justify-center">
    {categories.map((c) => (
      <button
        key={c.id}
        onClick={() => setActiveCat(c.id)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition
        ${
          activeCat === c.id
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-blue-100"
        }`}
      >
        {c.label}
      </button>
    ))}
  </div>
</section>
        {/* BLOG LIST */}
        <section className="blog-container">
          {filteredBlogs.slice(0, visibleCount).map((blog, index) => (
            <div key={index} className="blog-card">

              {/* Image */}
              <Link href={`/blogdetail/${slugify(blog.title)}`}>
                <Image
                  src={blog.image || noimage}
                  alt={blog.title}
                  width={400}
                  height={300}
                />
              </Link>

              {/* Content */}
              <div className="blog-content">
                <div className="meta">
                  Publish by {blog.author} | {blog.date}
                </div>

                <div className="blog-title">{blog.title}</div>

                <Link href={"/blog/blogdetail"}>
                  <span className="read-more">Read more →</span>
                </Link>
              </div>

            </div>
          ))}
        </section>
      </div>

      {/* LOAD MORE */}
      {visibleCount < filteredBlogs.length && (
        <div style={{ display: "flex" }}>
          <button
            className="load-more-btn"
            onClick={() => setVisibleCount((prev) => prev + 6)}
            style={{
              padding: "10px 20px",
              margin: "20px auto",
              backgroundColor: "rgba(39, 50, 114, 0.882)",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Load More
          </button>
        </div>
      )}

    </>
  );
}