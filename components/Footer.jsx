import Image from "next/image";
import Link from "next/link";

import earthmaalogo from "../assets/images/earthmaalogo.webp";
import twitter from "../assets/images/twitter-icon.svg";
import youtube from "../assets/images/YouTube-icon.svg";
import facebook from "../assets/images/Facebook-icon.svg";
import linkdin from "../assets/images/LinkedIn-icon.svg";
import instagram from "../assets/images/Instagram-icon.svg";
import pinterest from "../assets/images/Pinterest-icon.svg";

export default function Footer() {
  const socialLinks = [
    { src: instagram, link: "https://www.instagram.com/earthmaa.official/" },
    { src: pinterest, link: "https://in.pinterest.com/earthmaaofficial/" },
    { src: youtube, link: "https://www.youtube.com/@earthmaa.official" },
    { src: linkdin, link: "https://www.linkedin.com/company/earthmaa%C2%AE/" },
    { src: facebook, link: "https://www.facebook.com/earthmaa.officials/" },
    { src: twitter, link: "https://x.com/earthmaafoods" },
  ];

  return (
    <footer
      className="bg-cover bg-no-repeat text-white px-6 md:px-12 py-12 overflow-x-hidden"
      style={{ backgroundImage: "url('/images/earthmaa-footerbg-background-image.webp')" }}
    >
      {/* Middle Section */}
      <div className="grid md:grid-cols-[40%_30%_30%] gap-10">

        {/* Logo & About */}
        <div className="space-y-4">
          <Image
            src={earthmaalogo}
            alt="Earthmaa Logo"
            width={150}
            height={70}
            priority
          />

          <p className="text-sm">
            Earthmaa® — Your trusted partner in holistic wellness. We bring you
            high-quality, science-backed supplements made with nature’s purest
            ingredients. Our mission is to help you live healthier, stronger,
            and more balanced — the natural way.
          </p>

          <h2 className="text-xl font-semibold mt-4">Contact Info</h2>

          <a href="tel:+17867892121" className="block hover:underline">
            +1 786-789-2121
          </a>

          <a
            href="mailto:social@earthmaafoods.com"
            className="block hover:underline"
          >
            social@earthmaafoods.com
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border border-white bg-white/5 p-3 rounded-md hover:bg-white/10 transition">
                  <Image
                    src={item.src}
                    alt="social icon"
                    width={20}
                    height={20}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>

          <div className="space-y-3 text-sm flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/productlist">Product</Link>
            <Link href="/contact">Contact us</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Categories</h4>

          <div className="space-y-3 text-sm flex flex-col">
            <Link href="/productlist">Men’s Wellness</Link>
            <Link href="/productlist">Women’s Wellness</Link>
            <Link href="/productlist">Energy & Strength</Link>
            <Link href="/productlist">Better Sleep & Stress Relief</Link>
            <Link href="/productlist">Strong Bones & Joints</Link>
            <Link href="/productlist">Detox & Weight Balance</Link>
            <Link href="/productlist">Immunity & Everyday Health</Link>
            <Link href="/productlist">Skin, Hair & Beauty</Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/30 mt-10 pt-6 grid md:grid-cols-2 text-sm gap-4">
        <div className="text-center md:text-left">
          Copyright © 2025 Earthmaa®, All rights reserved.
        </div>

        <div className="md:text-right text-center">
          <Link href="/term">Term of Use</Link>
          <span className="mx-2">|</span>
          <Link href="/return-policy">Return & Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}