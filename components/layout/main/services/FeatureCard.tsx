import BadgeIcon from "@/components/ui/badge/BadgeIcon"


type FeatureCardProps = {
    imageSrc?: string;
    title: string;
    description: string;
}


export default function FeatureCard({ imageSrc, title, description }: FeatureCardProps) {
    return (
        <div className="w-full max-w-[592px] min-h-[297px] h-auto bg-[#FFFFFF] col-span-6 p-8 flex flex-col justify-between">
            <BadgeIcon 
                className="w-full max-w-[48px] min-h-[48px] h-auto bg-[#D0E1FB] rounded-lg flex items-center justify-center"
                imageSrc={imageSrc}
                width={24}
                height={28}
            />
            <h3 className="font-bold text-[20px] text-[#131B2E]">{title}</h3>

            <p className="text-[16px] font-normal text-[#505F76]">{description}</p>
        </div>
    )
}