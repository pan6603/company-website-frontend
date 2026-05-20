import CardIcon from "@/components/ui/icons/CardIcon"



export default function AboutMobileVisionCard() {
    return (
        <div className="w-full min-h-[308px] h-auto bg-[#FFFFFF] border border-[#C3C6D5] rounded-[4px] p-[32px] flex flex-col gap-[16px]">
            <CardIcon 
                className="w-full max-w-[48px] min-h-[48px] h-auto bg-[#D0E1FB] rounded-[12px] flex items-center justify-center"
                imageSrc="../../../icons/eye-icon.svg"
                width={21}
                height={14}
            />
            
            <h3 className="text-[24px] font-semibold text-[#131B2E]">Our Vision</h3>

            <p className="text-[16px] font-normal text-[#434653]">
                To be the definitive global anchor
                for institutional strategy, recognized
                for setting the gold standard in
                corporate governance and
                leadership development.
            </p>
        </div>
    )
}