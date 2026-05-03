import CardIcon from "@/components/ui/icons/CardIcon"



export default function AboutVisionCard() {
    return (
        <div className="w-full max-w-[575px] min-h-[333px] h-auto p-8 border border-[#C3C6D5]/30">
            <div className="w-full max-w-[48px] min-h-[72px] h-auto">
                <CardIcon 
                    className="w-full max-w-[48px] min-h-[48px] h-auto bg-blue-200 flex items-center justify-center rounded" 
                    imageSrc="../../../icons/eye-icon.svg"
                    width={24}
                    height={28}
                />
            </div>
            
            <h2 className="text-[36px] font-semibold text-[#131B2E]">Our Vision</h2>

            <p className="text-[16px] font-normal text-[#434653]">
                To be the global benchmark for corporate transformation, <br />
                recognized for our ability to turn systemic challenges into <br />
                sustainable opportunities for the world&apos;s most influential <br />
                institutions.
            </p>
        </div>
    )
}