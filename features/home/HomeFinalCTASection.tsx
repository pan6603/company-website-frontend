import PrimaryButton from "@/components/ui/button/PrimaryButton"
import SecondaryButton from "@/components/ui/button/SecondaryButton"


export default function HomeFinalCTASection() {
    return (
        <section className="w-full max-w-[1440px] min-h-[480px] h-auto bg-[#00327D] flex items-center justify-center">
            <div className="w-full max-w-[1280px] min-h-[241px] h-auto flex flex-col items-center justify-between">
                <h2 className="text-[36px] font-semibold text-white">Ready to elevate your institutional strategy?</h2>
                <p className="text-[18px] font-normal text-[#A5BDFF] text-center">
                    Join the network of world-class leaders who rely on Corporate Excellence for <br />
                    precision, stability, and growth.
                </p>

                <div className="w-full max-w-[1216px] min-h-[73px] h-auto flex items-end justify-center gap-[24px]">
                    <PrimaryButton 
                        className="w-full max-w-[249px] min-h-[56px] h-auto bg-[#FFFFFF] rounded-md text-[14px] font-semibold text-[#00327D]" 
                        text="Schedule a Consultation"
                    />
                    <SecondaryButton 
                        className="w-full max-w-[249px] min-h-[56px] h-auto border-1 border-[#FFFFFF] rounded-md text-[14px] font-semibold text-[#FFFFFF]" 
                        text="Contact Global Offices"
                    />
                </div>
            </div>        
        </section>
    )
}