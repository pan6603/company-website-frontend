import GradientOverlay from "@/components/ui/overlay/GradientOverlay";
import PrimaryButton from "@/components/ui/button/PrimaryButton";
import SecondaryButton from "@/components/ui/button/SecondaryButton";

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

            {/* Content */}
            <div className="absolute w-full max-w-[1280px] min-h-[366px] h-auto">
                <div className="w-full max-w-[672px] min-h-[366px] h-auto flex flex-col justify-between">
                    <h1 className="text-[48px] font-bold text-[#131B2E] z-10">
                        Architecting the Future of <br />
                        Professional Excellence.
                    </h1>

                    <p className="text-[18px] font-normal text-[#505F76]">
                        We provide institutional-grade solutions for high-level decision makers. Our <br />
                        strategic frameworks enable global enterprises to navigate complex markets <br />
                        with stability and precision.
                    </p>

                    {/* CTA Group */}
                    <div className="w-full max-w-[672px] min-h-[65px] h-auto flex items-center gap-2">
                        <PrimaryButton 
                            className="w-full max-w-[210px] min-h-[48px] h-auto bg-[#00327D] text-white font-bold rounded flex items-center justify-center"
                            text="Consult Our Partners"
                        />
                        <SecondaryButton 
                            className="w-full max-w-[164px] min-h-[48px] h-auto bg-[#FFFFFF] border border-[#737784] text-[#131B2E] font-bold rounded flex items-center justify-center" 
                            text="View Portfolio"
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}