'use client';

import { useRef, useState } from "react";
import "./home.css";
import TestimonialSection from "./TestimonialSection";
import FAQSection from "./Home/FaqSection";
import BlogSection from "./BlogSection";


export default function HomePage() {
    const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);
 const testimonials = [
  {
    id: 1,
    name: "Rohit",
    location: "Jaipur Regional Centre",
    image:"/images/sneha.webp",

    rating: "★★★★★",
    review:
      "I began taking Ashwagandha mostly to alleviate stress and fatigue. Mentally, I felt more stable after around ten to fifteen days, and my daily exhaustion went down.",
    color: "dark",
    rotate: "rotate(5deg)",
  },
  {
    id: 2,
    name: "Gulzar",
    location: "MBA—Chennai Regional Centre",
    image:"/images/sneha.webp",
    rating: "★★★★★",
    review:
      "The quality is unmatched. I love how transparent Earthmaa is about ingredients. You can feel the difference after weeks...",
    color: "light",
    rotate: "rotate(-5deg)",
  },
  {
    id: 3,
    name: "Arjun",
    location: "Delhi",
    image:"/images/sneha.webp",
    rating: "★★★★★",
    review:
      "My profession required me to spend a lot of time in front of screens, which led to chronic eye strain and cognitive fog.",
    color: "blue",
    rotate: "rotate(5deg)",
  },
  {
    id: 4,
    name: "Kunal",
    location: "Goa",
    image:"/images/sneha.webp",
    rating: "★★★★★",
    review:
      "I was drinking regular coffee before going to the gym, but I would collapse afterward. Something is up with this pre-workout.",
    color: "dark",
    rotate: "rotate(-5deg)",
  },
  {
    id: 5,
    name: "Rohit",
    location: "Jaipur Regional Centre",
    image:"/images/sneha.webp",
    rating: "★★★★★",
    review:
      "I began taking Ashwagandha mostly to alleviate stress and fatigue. Mentally, I felt more stable after around ten to fifteen days.",
    color: "dark",
    rotate: "rotate(5deg)",
  },
  {
    id: 6,
    name: "Gulzar",
    location: "MBA—Chennai Regional Centre",
    image:"/images/sneha.webp",
    rating: "★★★★★",
    review:
      "The quality is unmatched. I love how transparent Earthmaa is about ingredients.",
    color: "light",
    rotate: "rotate(-5deg)",
  },
  {
    id: 7,
    name: "Arjun",
    location: "Delhi",
    image:"/images/sneha.webp",
    rating: "★★★★★",
    review:
      "My profession required me to spend a lot of time in front of screens.",
    color: "blue",
    rotate: "rotate(5deg)",
  },
  {
    id: 8,
    name: "Kunal",
    location: "Goa",
    image:"/images/sneha.webp",
    rating: "★★★★★",
    review:
      "I was drinking regular coffee before going to the gym, but I would collapse afterward.",
    color: "dark",
    rotate: "rotate(-5deg)",
  },
];



   const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
<>

<div className="mt-2">
     <div className="quality-div">
          <div className="quality-header">
        <h3 className="text-lg sm:text-xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center md:text-left">
  OUR <span className="text-[#009BFF]">COMMITMENT</span> TO
  <br className="hidden sm:block" />
  <span className="text-[#009BFF] px-1">QUALITY</span>
</h3>
            <p>
              Earthmaa<sup>®</sup>, quality is not just a promise—it’s our
              foundation. Every supplement is crafted with precision, using only
              premium, ethically sourced ingredients. Our capsules undergo
              rigorous testing to ensure purity, potency, and safety, so you
              receive products that support your health and wellness
              effectively.
            </p>
          </div>
          <div className="quality-body">
            <div className="quality-box" id="quality-boxbg1">
              <div>
                <h2>01</h2> <h4>100% natural</h4>
              </div>{" "}
              <p>
                Crafted entirely from nature’s finest ingredients, our
                supplements are free from artificial additives, preservatives,
                or harmful chemicals. We source every component responsibly to
                ensure you receive the purest form of wellness support.
              </p>
              <button>&#8594;</button>
            </div>
            <div className="quality-box" id="quality-boxbg2">
              <div>
                <h2>02</h2> <h4>Uncompromised Quality</h4>
              </div>{" "}
              <p>
                Each product undergoes multiple stages of quality testing to
                maintain superior purity, potency, and safety standards. From
                ingredient selection to final packaging, our focus is on
                delivering only the best to you.
              </p>
              <button>&#8594;</button>
            </div>
            <div className="quality-box" id="quality-boxbg3">
              <div>
                <h2>03</h2> <h4>Vegetarian Friendly</h4>
              </div>{" "}
              <p>
                Designed to suit all lifestyles, our supplements contain no
                animal-derived ingredients. They are made with plant-based
                formulations, ensuring health-conscious and ethical choices for
                every consumer.
              </p>
              <button>&#8594;</button>
            </div>
            <div className="quality-box" id="quality-boxbg4">
              <div>
                <h2>04</h2> <h4>Soy-Free</h4>
              </div>{" "}
              <p>
                Perfect for individuals with soy sensitivities or allergies. Our
                soy-free formulations are carefully crafted to provide complete
                nutritional benefits without compromising on safety or
                effectiveness.
              </p>
              <button>&#8594;</button>
            </div>
          </div>
        </div>

   {/* === Instagram Section === */}

        <div className="instagram-section">

          {[

            "DUqIbQPE-xE",

            "DPvzjnekXkZ",

            "DVQvN7jE81a",

            "DVBZtzzExmP",

            "DU-Bu2QEb7f",

            "DVP70zwkdkT",

            

          ].map((id, i) => (

            <div

              key={i}

              className="instagram-card"

              style={{

                transform: `rotate(${i % 2 === 0 ? -10 : 10}deg)`,

                left: `${i * 200}px`,

              }}

            >

              <iframe

                src={`https://www.instagram.com/p/${id}/embed`}

                frameBorder="0"

                scrolling="no"

                allowTransparency="true"

                title={`insta-${i}`}

              ></iframe>

            </div>

          ))}

        </div>

        
    
 <section className="testimonial-section">
  <h2 className="heading">
    What Our Customers <span>Love</span> <br /> Earthmaa
  </h2>

  <p className="subtext">
    Discover how our products have made a positive difference in people's lives.
  </p>

  <div className="horizontal-marquee">
    <div className="testimonial-container">

      {testimonials.map((item) => (
        <div
          key={item.id}
          className={`testimonial-card ${item.color}`}
          style={{ transform: item.rotate }}
        >
          <div className="profile">
            <img src={item.image} alt={item.name} />
            <div className="stars">{item.rating}</div>
          </div>

          <div>
            <h3>{item.name}</h3>
            <p>{item.location}</p>
          </div>

          <p className="review">{item.review}</p>
        </div>
      ))}

    </div>
  </div>
</section>
<BlogSection/> 
<FAQSection/>

</div>
</>
  );
}
