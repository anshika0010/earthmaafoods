import Image from "next/image";
import earthmaalogoblue from "../../assets/images/earthmaalogo(blue).webp";
import greentea from "../../assets/images/greentea.webp";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-end justify-end overflow-hidden">

      {/* Background Image */}
      <Image
        src={"/images/earthmaa-why-chooseimg.webp"}
        alt="About Background"
        fill
        className="object-cover"
        priority
      />

      {/* Floating Images */}
      <Image
        src={greentea}
        alt="Caffeine-L-Theanine"
        className="absolute top-20 left-10 w-28 md:w-40"
      />

      <Image
        src={greentea}
        alt="Caffeine-L-Theanine"
        className="absolute top-40 right-20 w-28 md:w-40"
      />

      {/* Content */}
      <div className="relative z-10 max-w-xl text-right text-white p-6 md:p-12">

        {/* Logo */}
        <Image
          src={earthmaalogoblue}
          alt="earthmaa logo"
          width={150}
          className="ml-auto mb-6"
        />

    

      </div>

    </section>
  );
}