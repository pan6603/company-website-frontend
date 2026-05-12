import GradientOverlay from "@/components/ui/overlay/GradientOverlay";
import HomeHeroContent from "@/features/home/hero/HomeHeroContent";


export default function HomeDeskTopHeroSection() {
    return (
        <section 
            className="
                hidden 
                lg:flex
                relative
                w-full 
                max-w-[1440px] 
                mx-auto

                min-h-[900px]
                lg:min-h-[840px]                
                h-auto
                items-center 
                justify-center

                bg-cover
                bg-center
                bg-no-repeat
            "
            style={{ backgroundImage: "url('../../images/hero/hero-bg.svg')",}}
        >
            {/* Gradient Overlay */}
            <GradientOverlay className="absolute inset-0 bg-gradient-to-r from-[#FAF8FF] via-[#FAF8FF]/80 to-[#FAF8FF]/0" />
            <HomeHeroContent />

        </section>
    )
}