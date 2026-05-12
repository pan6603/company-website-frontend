import PrimaryButton from "@/components/ui/button/PrimaryButton"
import SecondaryButton from "@/components/ui/button/SecondaryButton"


export default function HomeDeskTopCTAButtons() {
    return (
        <div className="
            hidden
            lg:flex
            w-full 
            max-w-[1216px] 
            min-h-[73px] 
            h-auto 
            items-end 
            justify-center 
            gap-[24px]
        ">
            <PrimaryButton 
                className="w-full max-w-[249px] min-h-[56px] h-auto bg-[#FFFFFF] rounded-md text-[14px] font-semibold text-[#00327D]" 
                text="Schedule a Consultation"
            />
            
            <SecondaryButton 
                className="w-full max-w-[249px] min-h-[56px] h-auto border-1 border-[#FFFFFF] rounded-md text-[14px] font-semibold text-[#FFFFFF]" 
                text="Contact Global Offices"
            />
        </div>
    )
}