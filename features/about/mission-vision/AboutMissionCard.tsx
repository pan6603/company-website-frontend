import CardIcon from "@/components/ui/icons/CardIcon"

export default function AboutMissionCard() {
    return (
        <div className="w-full max-w-[575px] min-h-[333px] h-auto bg-[#FFFFFF] p-8 border border-[#C3C6D5]/30">
            
            <div className="w-full max-w-[48px] min-h-[72px] h-auto">
                <CardIcon 
                    className="w-full max-w-[48px] min-h-[48px] h-auto bg-blue-200 flex items-center justify-center rounded" 
                    imageSrc="../../../icons/rocket-icon.svg"
                    width={24}
                    height={28}
                />
            </div>
            
            <h2 className="text-[36px] font-semibold text-[#131B2E]">Our Mission</h2>

            <p className="text-[16px] font-normal text-[#434653]">
                To empower organizations through strategic clarity, fostering <br />
                an environment where innovation thrives and excellence <br />
                becomes the standard, not the exception. We bridge the gap <br />
                between vision and execution.
            </p>
        </div>
    )
}