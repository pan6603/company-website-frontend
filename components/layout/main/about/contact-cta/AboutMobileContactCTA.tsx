import CTAButton from "@/components/ui/button/CTAButton"



export default function AboutMobileContactCTA() {
    return (
        <section 
            className="
                w-full 
                min-h-[375px] 
                h-auto 
                bg-[#00327D] 
                px-[24px] 
                py-[80px] 
                flex 
                flex-col
                gap-[24px]
                lg:hidden
            ">
                <h2 className="text-[26px] font-normal text-white text-center">
                    Ready to elevate your institutional impact?
                </h2>

                <p className="text-[16px] font-normal text-[#DAE2FF] text-center">
                    Join the ranks of the world&apos;s most resilient organizations.
                </p>

                <CTAButton 
                    className="w-full max-w-[212px] min-h-[46px] h-auto bg-[#FFFFFF] rounded-[4px] mx-auto font-bold text-[14px] text-[#00327D]" 
                    text="Partner With Us" 
                />
        </section>
    )
}