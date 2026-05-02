import HomeHeroSection from "@/features/home/HomeHeroSection";
import HomeTrustedBySection from "@/features/home/HomeTrustedBySection";
import HomeServicesSection from "@/features/home/HomeServicesSection";
import HomeStatusSection from "@/features/home/HomeStatsSection";
import HomeAboutUsSection from "@/features/home/HomeAboutUsSection";
import HomeTestimonialSection from "@/features/home/HomeTestimonialSection";
import HomeFinalCTASection from "@/features/home/HomeFinalCTASection";

export default function Home() {
  return (
      <>
        <HomeHeroSection />
        <HomeTrustedBySection />
        <HomeServicesSection />
        <HomeStatusSection />
        <HomeAboutUsSection />
        <HomeTestimonialSection />
        <HomeFinalCTASection />
      </>
  );
}
