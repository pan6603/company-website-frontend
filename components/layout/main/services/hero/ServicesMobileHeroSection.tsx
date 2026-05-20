import ServicesBadge from "@/components/layout/main/services/hero/ServicesBadge"
import CTAButton from "@/components/ui/button/CTAButton"

export default function ServicesMobileHeroSection() {
    return (
        <section 
            className="
                w-full 
                min-h-[429px]
                h-auto
                bg-[#FFFFFF]
                px-[24px]
                py-[64px]
                flex
                flex-col
                items-center
                gap-[24px]
                lg:hidden
            ">
                <ServicesBadge 
                    className="w-full max-w-[120px] min-h-[20px] h-auto bg-[#DAE2FF] rounded-[4px] flex items-center justify-center" 
                    text="OUR SERVICES"
                    textClassName="text-[12px] font-semibold text-[#001946]"
                />

                <h1 className="text-[32px] font-bold text-[#131B2E] text-center">
                    Strategic Solutions for
                    the Modern Enterprise
                </h1>

                <p className="font-normal text-[16px] text-[#505F76] text-center">
                    Empowering global leaders with precision-engineered strategies and operational mastery.
                </p>

                <CTAButton 
                    text="Get Started"
                    className="w-full max-w-[144px] min-h-[46px] h-auto bg-[#00327D] text-white rounded-[4px] font-medium text-[16px]"
                />

        </section>
    )
}