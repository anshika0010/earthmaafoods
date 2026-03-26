'use client';

import React, { useState, useRef } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "Which health supplement actually works for daily weakness and fatigue?",
      a: "A health supplement that works for daily fatigue should support energy production at the cellular level, not just provide instant stimulation. Supplements with magnesium, vitamin D3, B-complex, and natural adaptogens help restore long-term energy balance instead of giving short caffeine spikes.",
    },
    {
      q: "Do dietary supplements really work or are they just hype?",
      a: "Dietary supplements that work are the ones that are lab-tested, properly dosed, and made with bioavailable ingredients. Results depend on consistency, correct dosage, and quality of manufacturing. USA-manufactured supplements often show better reliability due to strict quality standards.",
    },
    {
      q: "What is the best magnesium supplement used for sleep, stress, and cramps?",
      a: "A good magnesium supplement supports sleep quality, nerve relaxation, muscle recovery, anxiety control, PMS relief, and night-time cramps. The most useful forms are magnesium glycinate or citrate due to their high absorption.",
    },
    {
      q: "Which heart health supplement is best for daily protection?",
      a: "A heart health supplement should focus on cholesterol control, blood circulation, blood pressure balance, and triglyceride support. Omega-3 fatty acids are globally considered the safest daily heart-support supplement.",
    },
    {
      q: "Is there any natural sugar control supplement for daily blood sugar balance?",
      a: "Yes. A natural sugar control supplement usually contains plant compounds that support insulin sensitivity and glucose metabolism. These supplements help maintain stable energy levels and reduce frequent sugar crashes.",
    },
  ];

  return (
    <section className="bg-gray-100 py-6">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-black">
            Frequently Asked
          </h2>
          <h2 className="text-5xl font-bold text-lime-500">
            Questions
          </h2>
        </div>

        {/* FAQ */}
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="rounded-2xl overflow-hidden">

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between bg-[#c5d8e8] px-6 py-6 rounded-2xl text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="font-bold text-lg">
                    {index + 1}.
                  </span>

                  <h4 className="text-lg font-semibold text-black">
                    {item.q}
                  </h4>
                </div>

                <span className="text-2xl font-bold">
                  {openIndex === index ? "×" : "+"}
                </span>
              </button>

              {/* Answer */}
           <div
  ref={(el) => (answerRefs.current[index] = el)}
  style={{
    maxHeight: openIndex === index ? "500px" : "0px",
  }}
  className="overflow-hidden transition-all duration-500"
>
                <div className="bg-white px-6 py-6 text-gray-600 text-lg leading-relaxed rounded-b-2xl">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;