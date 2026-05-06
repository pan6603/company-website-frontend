import Link from "next/link"
import ArrowRightIcon from "@/components/ui/icons/ArrowRightIcon"

const cardStyle =
    "w-full max-w-[469px] min-h-[210px] h-auto bg-[#EAEDFF] p-8 rounded-lg flex flex-col justify-between"

const linkStyle =
    "w-full max-w-[405px] min-h-[32px] h-auto flex items-center gap-2"    

export default function InfoCard() {
    return (
        <div className={cardStyle}>
            <h4 className="font-semibold text-2xl text-[#131B2E]">Global Operations</h4>

            <p className="font-normal text-base text-[#505F76]">
                Our presence spans across 4 continents, ensuring <br />
                localized excellence with a global perspective.
            </p>

            <Link href="#" className={linkStyle}>
                <span className="font-normal text-base text-[#00327D]">
                    View our global offices
                </span>
                
                <ArrowRightIcon 
                    className="w-full max-w-[24px] min-h-[24px] h-auto flex items-center justify-center" 
                    imageSrc="../../../icons/arrow-right-icon.svg"
                    width={15}
                    height={15}
                />
            </Link>
        </div>
    )
}