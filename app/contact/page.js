"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import ContactForm from "./contactform";

// ── Contact data ─────────────────────────────────────────────────
const BROCHURE_URL = "/Brochure.pdf"; // put your PDF in /public

const contactData = {
  india: {
    distributor:    [{ email: "distributor_india@earthmaafoods.com",    phone: "+1-786-789-2121" }],
    customer_care:  [{ email: "customercare_india@earthmaafoods.com",   phone: "+1-786-789-2121" }],
    sale:           [{ email: "sales_india@earthmaafoods.com",          phone: "+1-786-789-2121" }],
  },
  uae: {
    distributor:    [{ email: "distributor_uae@earthmaafoods.com",      phone: "+1-786-789-2121" }],
    customer_care:  [{ email: "customercare_uae@earthmaafoods.com",     phone: "+1-786-789-2121" }],
    sale:           [{ email: "sales_uae@earthmaafoods.com",            phone: "+1-786-789-2121" }],
  },
  usa: {
    distributor:    [{ email: "distributor_usa@earthmaafoods.com",      phone: "+1-786-789-2121" }],
    customer_care:  [{ email: "customercare_usa@earthmaafoods.com",     phone: "+1-786-789-2121" }],
    sale:           [{ email: "sales_usa@earthmaafoods.com",            phone: "+1-786-789-2121" }],
  },
  nepal: {
    distributor:    [{ email: "distributor_nepal@earthmaafoods.com",    phone: "+1-786-789-2121" }],
    customer_care:  [{ email: "customercare_nepal@earthmaafoods.com",   phone: "+1-786-789-2121" }],
    sale:           [{ email: "sales_nepal@earthmaafoods.com",          phone: "+1-786-789-2121" }],
  },
};

const countryFlags = { india: "🇮🇳", uae: "🇦🇪", usa: "🇺🇸", nepal: "🇳🇵" };
const countryLabels = { india: "India", uae: "UAE", usa: "USA", nepal: "Nepal" };
const deptLabels = { customer_care: "Customer Care", distributor: "Distributor", sale: "Sales Team" };

// ── Reusable glass info card ──────────────────────────────────────
function InfoCard({ icon, title, subtitle, detail, href, isDownload }) {
  return (
    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-gray-300 rounded-2xl px-4 py-3 shadow-lg hover:bg-white/15 transition-all group">
      <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl border-2 border-[#009BFF] text-[#009BFF] text-xl">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-gray-800 font-semibold text-sm">{title}</h3>
        <p className="text-gray-800 text-xs truncate">{detail}</p>
        <span className="text-gray-800  text-[10px]">{subtitle}</span>
      </div>
      <a href={href} download={isDownload || undefined} target={isDownload ? undefined : "_blank"} rel="noopener noreferrer">
        <button className="w-10 h-10 flex-shrink-0 rounded-full bg-[#009BFF] hover:bg-[#0080d4] text-gray-800  flex items-center justify-center shadow-md shadow-[#009BFF]/30 transition-colors text-base">
          {isDownload ? "⬇" : "↗"}
        </button>
      </a>
    </div>
  );
}

// ── Custom Select ─────────────────────────────────────────────────
function GlassSelect({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-white/50 text-xs font-semibold tracking-widest uppercase">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-white/10 backdrop-blur-sm border border-gray-500 text-gray-800  rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#009BFF] transition-colors pr-8"
        >
          {options.map(([val, label]) => (
            <option key={val} value={val} className="bg-gray-900 text-gray-100 ">{label}</option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-800  text-xs">▾</span>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────
export default function Contact() {
  const [country, setCountry] = useState("india");
  const [dept, setDept]       = useState("customer_care");
  const [email, setEmail]     = useState("social@earthmaafoods.com");
  const [phone, setPhone]     = useState("+1-786-789-2121");

  useEffect(() => {
    const entry = contactData[country]?.[dept]?.[0];
    if (entry) {
      setEmail(entry.email);
      setPhone(entry.phone);
    } else {
      setEmail("social@earthmaafoods.com");
      setPhone("+1-786-789-2121");
    }
  }, [country, dept]);

  const waLink = `https://wa.me/${phone.replace(/\D/g, "")}?text=Hi,%20I%20want%20to%20order%20from%20Earthmaa.%20Can%20you%20share%20the%20details%20and%20price.`;

  return (
    <>
      <Head>
        <title>Contact Earthmaa | Customer Enquiry Assistance</title>
        <meta name="description" content="Get in touch with Earthmaa for queries, support, or partnership." />
        <link rel="canonical" href="https://www.earthmaafoods.com/contact" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      <div className="font-['DM_Sans']">
        {/* ── Hero Header ── */}
        <div
          className="relative min-h-[300px] flex flex-col items-center justify-center text-center px-4 overflow-hidden"
          style={{
            backgroundImage: "url('https://project.rbhardwaj.com/jptech/assets/img/page-title-bg-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10">
            <p className="text-[#009BFF] text-xs tracking-[0.3em] uppercase font-semibold mb-3">
              Get In Touch
            </p>
            <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
              Contact Us
            </h1>
            <div className="mt-4 flex items-center justify-center gap-2 text-gray-800  text-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-800 ">Contact</span>
            </div>
          </div>
        </div>

        {/* ── Main Container ── */}
        <div
          className="min-h-screen"
          style={{
            backgroundImage: "url('/images/earthmaa-contactbg.webp')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "#0a1628",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

              {/* ── Left: Info Panel ── */}
              <div className="space-y-4">
                <div>
                  <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-gray-800  font-bold mb-1">
                    Reach the right team
                  </h2>
                  <p className="text-gray-800  text-sm">Select your country and contact type below.</p>
                </div>

                {/* Selectors */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 space-y-4">
                  <GlassSelect
                    label="Country"
                    value={country}
                    onChange={setCountry}
                    options={Object.entries(countryLabels).map(([val, label]) => [val, `${countryFlags[val]} ${label}`])}
                  />
                  <GlassSelect
                    label="Department"
                    value={dept}
                    onChange={setDept}
                    options={Object.entries(deptLabels)}
                  />
                </div>

                {/* Contact Cards */}
                <div className="space-y-3">
                  <InfoCard
                    icon="✉"
                    title="Email Us"
                    detail={email}
                    subtitle="We'll respond within 24 hours"
                    href={`mailto:${email}`}
                  />
                  <InfoCard
                    icon="📞"
                    title="Phone"
                    detail={phone}
                    subtitle="Mon–Sun · 9AM – 6PM"
                    href={`tel:${phone}`}
                  />
                  <InfoCard
                    icon="💬"
                    title="WhatsApp"
                    detail={phone}
                    subtitle="Mon–Sun · 9AM – 6PM"
                    href={waLink}
                  />
                  <InfoCard
                    icon="📄"
                    title="Earthmaa Brochure"
                    detail="Download product catalogue"
                    subtitle="Get all product details"
                    href={BROCHURE_URL}
                    isDownload
                  />
                </div>
              </div>

              {/* ── Right: Form ── */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10">
                <div className="mb-6">
                  <h2 className="font-['Playfair_Display'] text-2xl text-gray-900 font-bold mb-1">
                    Send a message
                  </h2>
                  <p className="text-gray-800  text-sm font-medium">
                    → {deptLabels[dept]} · {countryLabels[country]}
                  </p>
                </div>

                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Your trusted partner in holistic wellness. We bring you high-quality,
                  science-backed supplements made with nature's purest ingredients.
                </p>

           
                <ContactForm Receiveemail={email}/>

                <p className="text-gray-400 text-xs mt-4">
                  By submitting this form, you agree to our{" "}
                  <Link href="/term" className="text-[#009BFF] hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}