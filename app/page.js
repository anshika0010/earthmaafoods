import AboutSection from "@/components/AboutSection";
import CapsuleScroll from "@/components/CapsuleScroll";
import HeroSection3 from "@/components/HeroSection3";
import HeroSection from "@/components/Home/HeroSection";
import HeroSection2 from "@/components/Home/HersoSection2";
import NewLaunchSection from "@/components/Home/NewLaunchSection";
import OurProducts from "@/components/Home/OurProducts";
import HomePage from "@/components/HomePage";


import Image from "next/image";

export default function Home() {
  return (
<>
<div className="">
  {/* <HeroSection/> */}
  {/* <HeroSection2/> */}
  <HeroSection3/>
    <AboutSection/>
  <CapsuleScroll/>
  <OurProducts/>
  <NewLaunchSection/>
<HomePage/>




</div>
</>
  );
}
