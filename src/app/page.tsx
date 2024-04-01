import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import RamahAnak from "@/components/Blog/RamahAnak";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Slider from "@/components/Sliders";
import Statistic from "@/components/Statistic";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sumedang Virtual Tourism",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  const wisatafavorite="Destinasi Favorite";
  const ramahanak="Destinasi Ramah Anak"
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Slider /> */}
      <Blog title={wisatafavorite}/>
      <RamahAnak title={ramahanak}/>
     
      <Statistic />
      {/* <Features /> */}
      <Video />
      {/* <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing /> */}
      
      {/* <Contact /> */}
    </>
  );
}
