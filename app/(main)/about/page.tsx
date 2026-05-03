import AboutHeroSection from "@/features/about/hero/AboutHeroSection";
import AboutMissionVisionSection from "@/features/about/mission-vision/AboutMissionVisionSection";
import AboutTimelineSection from "@/features/about/time-line/AboutTimelineSection";
import AboutTeamSection from "@/features/about/team/AboutTeamSection";
import AboutContactCTASection from "@/features/about/contact-cta/AboutContactCTASection";


export default function About() {
    return (
        <>
            <AboutHeroSection />
            <AboutMissionVisionSection />
            <AboutTimelineSection />
            <AboutTeamSection />
            <AboutContactCTASection />
        </>
    )
}