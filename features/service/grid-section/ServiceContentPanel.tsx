import CTAButton from "@/components/ui/button/CTAButton"



export default function ServiceContentPanel() {
    return (
        <div className="w-full max-w-[607px] min-h-[607px] h-auto bg-[#F2F3FE] px-12 py-[147px] flex flex-col gap-6">
            <div className="w-full max-w-[511px] min-h-[28px] h-auto">
                <span className="text-[12px] font-semibold text-[#00327D]">TRANSFORMATION</span>
            </div>

            <h2 className="text-[36px] font-semibold text-[#131B2E]">Digital Modernization</h2>

            <p className="text-[18px] font-normal text-[#505F76]">
                We guide legacy enterprises through the complexities of <br />
                digital adoption, from cloud migration to AI-integrated <br />
                decision systems. Our approach ensures that technology <br />
                serves as a catalyst for growth rather than a disruption to <br />
                core operations.
            </p>


            <CTAButton 
                className="w-full max-w-[215px] min-h-[46px] h-auto bg-[#00327D] text-white font-bold rounded-[4px] text-[14px]"
                text="View Digital Roadmap"
            />
        </div>
    )
}