
import PrimaryButton from "@/components/ui/button/PrimaryButton";
import SecondaryButton from "@/components/ui/button/SecondaryButton";


export default function HomeHeroCTAGroup() {
    return (
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
    )
}