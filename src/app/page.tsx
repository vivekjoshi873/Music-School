import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicTestimonial from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footers from "@/components/Footers";
export default function Home() {
  return (
    <div>
      <main 
      className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02] ">
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <MusicTestimonial />
        <UpcomingWebinars />  
        <Instructors />
        <Footers />
      </main>
    </div>
  );
}
