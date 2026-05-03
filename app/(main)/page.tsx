import HomeHeroSection from "@/features/home/hero/HomeHeroSection";
import HomeTrustedBySection from "@/features/home/trusted/HomeTrustedBySection";
import HomeServicesSection from "@/features/home/service/HomeServicesSection";
import HomeStatusSection from "@/features/home/status/HomeStatsSection";
import HomeAboutUsSection from "@/features/home/about/HomeAboutUsSection";
import HomeTestimonialSection from "@/features/home/testimonial/HomeTestimonialSection";
import HomeFinalCTASection from "@/features/home/final-cta/HomeFinalCTASection";

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
