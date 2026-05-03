import GradientOverlay from "@/components/ui/overlay/GradientOverlay";
import HomeHeroContent from "@/features/home/hero/HomeHeroContent";

export default function HomeHeroSection() {
    return (
        <section 
            className="w-full max-w-[1440px] min-h-[840px] h-auto bg-red-300 relative flex items-center justify-center"
            style={{
                backgroundImage: "url('../../images/hero/hero-bg.svg')",
            }}
        >
            {/* Gradient Overlay */}
            <GradientOverlay className="absolute inset-0 bg-gradient-to-r from-[#FAF8FF] via-[#FAF8FF]/80 to-[#FAF8FF]/0" />

            <HomeHeroContent />

        </section>
    )
}