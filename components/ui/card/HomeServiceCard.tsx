import Link from "next/link";
import Image from "next/image";
import ArrowRightIcon from "@/components/ui/icons/ArrowRightIcon";


type ServiceCardProps = {
    className?: string;
    iconSrc?: string;
    cardTitle: string;
    cardDescription: string;
    textLinkCTA?: string;
}


export default function HomeServiceCard({ className, iconSrc, cardTitle, cardDescription, textLinkCTA }: ServiceCardProps) {
    return (
        <div className={className}>
            {/* Card Icon */}
            {iconSrc && (
                <div className="w-full max-w-[56px] min-h-[56px] h-auto bg-[#F3F5F8] flex items-center justify-center rounded-lg">
                    <Image 
                        src={iconSrc} 
                        alt={`${cardTitle}-icon`}
                        width={19}
                        height={20}
                    />
                </div>
            )}

            {/* Card Title */}
            <h3 className="text-[24px] font-semibold text-[#131B2E]">{cardTitle}</h3>

            {/* Card Description */}
            <p className="text-[16px] font-normal text-[#505F76] whitespace-pre-line">{cardDescription}</p>


            {textLinkCTA && (
                <Link href="#" className="w-full max-w-[302px] min-h-[32px] h-auto flex items-center gap-2">
                    
                    <span className="text-[14px] font-semibold text-[#00327D]">{textLinkCTA}</span>
            
                    <ArrowRightIcon 
                        className="w-full max-w-[24px] min-h-[24px] h-auto flex items-center justify-center" 
                        imageSrc="../../../icons/arrow-right-icon.svg"
                        width={15}
                        height={15}
                    />
                </Link>
            )}
        </div>
    )
}