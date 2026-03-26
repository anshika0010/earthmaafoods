import HeroSection from "@/components/About/HeroSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/Home/FaqSection";
import Image from "next/image";


export default function AboutPage() {
    return(
        <>
         <section className="relative w-full h-[500px]">

      {/* Background Image */}
      <Image
        src="/aboutbg.png"
        alt="Health Background"
        fill
        priority
        className="object-cover"
      />


      {/* Text Content */}
      <div className="absolute bottom-10 right-10 text-white max-w-md">
        <h2 className="text-4xl font-bold mb-3">
          Improve Your Daily Health
        </h2>

        <p className="text-lg leading-relaxed">
          Discover supplements designed to support energy, heart health,
          and balanced nutrition. Scientifically formulated ingredients
          help you stay active and healthy every day.
        </p>
      </div>

    </section>
        <AboutSection/>
        <HeroSection/>
        
        <FAQSection/>
        </>
    )
}