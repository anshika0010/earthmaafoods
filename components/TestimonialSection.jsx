"use client";

const testimonials = [
  { id: 1, name: "Priya Sharma",  location: "Mumbai, India",    rating: "★★★★★", review: "Absolutely love the quality! Earthmaa products have transformed my daily routine.",         image: "https://i.pravatar.cc/60?img=1",  color: "card-green",  rotate: "rotate(-1.5deg)" },
  { id: 2, name: "Arjun Mehta",   location: "Delhi, India",     rating: "★★★★★", review: "Pure, natural, and effective. I can feel the difference every single day.",               image: "https://i.pravatar.cc/60?img=3",  color: "card-yellow", rotate: "rotate(1deg)" },
  { id: 3, name: "Sneha Patel",   location: "Ahmedabad, India", rating: "★★★★☆", review: "Finally found a brand that genuinely cares about sustainability and quality.",            image: "https://i.pravatar.cc/60?img=5",  color: "card-peach",  rotate: "rotate(-0.5deg)" },
  { id: 4, name: "Rohan Verma",   location: "Bangalore, India", rating: "★★★★★", review: "The packaging is beautiful and the product is even better. Highly recommend!",           image: "https://i.pravatar.cc/60?img=8",  color: "card-blue",   rotate: "rotate(1.5deg)" },
  { id: 5, name: "Kavya Nair",    location: "Kochi, India",     rating: "★★★★★", review: "Switched to Earthmaa 3 months ago and never looking back. Pure bliss!",                 image: "https://i.pravatar.cc/60?img=9",  color: "card-green",  rotate: "rotate(-1deg)" },
  { id: 6, name: "Vikram Singh",  location: "Jaipur, India",    rating: "★★★★☆", review: "Great products with visible results. My family loves everything from Earthmaa.",         image: "https://i.pravatar.cc/60?img=12", color: "card-yellow", rotate: "rotate(0.5deg)" },
];

export default function TestimonialSection() {
  return (
    <>
      <style>{`
        .testimonial-section {
          padding: 60px 0;
          background: #faf8f4;
          overflow: hidden;
        }
        .testimonial-section .heading {
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 10px;
          font-family: Georgia, serif;
        }
        .testimonial-section .heading span { color: #4a7c59; }
        .testimonial-section .subtext {
          text-align: center;
          color: #666;
          font-size: 1rem;
          margin: 0 0 40px;
        }
        .marquee-wrapper {
          overflow: hidden;
          width: 100%;
        }
        .horizontal-marquee {
          display: flex;
          width: max-content;
          animation: scrollleft 28s linear infinite;
        }
        .horizontal-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes scrollleft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-item {
          flex-shrink: 0;
          padding: 12px 14px;
        }
        .testimonial-card {
          width: 280px;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 4px 18px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
          box-sizing: border-box;
        }
        .testimonial-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 12px 30px rgba(0,0,0,0.13);
        }
        .card-green  { background: #e8f5ec; }
        .card-yellow { background: #fef9e7; }
        .card-peach  { background: #fdecea; }
        .card-blue   { background: #e8f0fe; }
        .profile {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .profile img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        .stars { color: #f5a623; font-size: 14px; letter-spacing: 1px; }
        .card-name { font-size: 0.95rem; font-weight: 700; color: #1a1a1a; margin: 0 0 2px; }
        .card-loc  { font-size: 0.78rem; color: #888; margin: 0; }
        .review    { font-size: 0.88rem; color: #444; line-height: 1.6; margin-top: 12px; font-style: italic; }
      `}</style>

      <section className="testimonial-section">
        <h2 className="heading">
          What Our Customers <span>Love</span><br />About Earthmaa
        </h2>
        <p className="subtext">
          Discover how our products have made a positive difference in people's lives.
        </p>

        <div className="marquee-wrapper">
          {/* Cards are duplicated for seamless infinite loop */}
          <div className="horizontal-marquee">
            {[...testimonials, ...testimonials].map((item, i) => (
              <div key={i} className="marquee-item">
                <div
                  className={`testimonial-card ${item.color}`}
                  style={{ transform: item.rotate }}
                >
                  <div className="profile">
                    <img src={item.image} alt={item.name} />
                    <div className="stars">{item.rating}</div>
                  </div>
                  <div>
                    <p className="card-name">{item.name}</p>
                    <p className="card-loc">{item.location}</p>
                  </div>
                  <p className="review">{item.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}