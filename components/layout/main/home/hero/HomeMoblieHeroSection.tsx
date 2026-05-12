import CTAButton from "@/components/ui/button/CTAButton";
import HomeMoblieHeroBackground from "@/components/layout/main/home/hero/HomeMoblieHeroBackground";

export default function HomeMoblieHeroSection() {
    return (
        <section className="w-full min-h-[804px] h-auto bg-[#FFFFFF] px-[24px] py-[64px] flex items-center justify-center lg:hidden">
            <div className="w-full min-h-[676px] h-auto flex flex-col gap-[15px]">
                <span className="font-bold text-[12px] text-[#00327D]">Global Leadership</span>
                <h1 className="font-bold text-[48px] text-[#131B2E]">Defining Corporate Excellence</h1>

                <p className="font-normal text-[16px] text-[#434653]">
                    Strategic institutional stability and forward-thinking solutions for high-level decision makers.
                </p>

                <CTAButton 
                    className="w-full max-w-[144px] min-h-[46px] h-auto bg-[#00327D] text-[#FFFFFF] text-[14px] font-semibold rounded" 
                    text="Get Started"
                />

                <HomeMoblieHeroBackground />

            </div>
        </section>        
    )
}