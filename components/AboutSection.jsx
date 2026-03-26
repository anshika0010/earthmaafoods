import Image from "next/image";
import earthmaalogoblue from "@/assets/images/earthmaalogo(blue).webp";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-6 px-3 md:px-4 bg-white text-center">

      {/* Floating Leaf Left */}
      <Image
        src={"/images/earthmaa-greentea.webp"}
        alt="green tea leaf"
        width={400}
        height={400}
        className="absolute left-[-120px] top-20 rotate-[60deg] opacity-70 hidden md:block"
      />

      {/* Floating Leaf Right */}
      <Image
        src={"/images/earthmaa-greentea.webp"}
        alt="green tea leaf"
        width={400}
        height={400}
        className="absolute right-[-120px] bottom-10 opacity-40 hidden md:block"
      />

      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src={earthmaalogoblue}
          alt="Earthmaa logo"
          width={150}
          height={100}
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-6">
        Where{" "}
        <span className="text-green-600">Nature</span> Meets <br />
        <span className="text-blue-500">Science</span> for{" "}
        <span className="text-gray-900">Everyday</span> <br />
        Wellness.
      </h1>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
        At Earthmaa, we believe that true wellness begins with nature. Our
        mission is to bring you pure, potent, and science-backed supplements
        that help you live a healthier, more balanced life.
      </p>
    </section>
  );
}