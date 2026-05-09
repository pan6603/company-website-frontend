import BadgeIcon from "@/components/ui/badge/BadgeIcon"
import ServiceFeatureList from "@/features/service/grid-section/ServiceFeatureList"
import ServiceImage from "@/components/layout/main/services/ServiceImage"


export default function FeaturedServiceCard() {
    return (
        <div className="w-full max-w-[658px] min-h-[862px] h-auto bg-[#FFFFFF] border border-[#C3C6D5] rounded-lg p-10 flex flex-col justify-between col-span-8">
            <BadgeIcon 
                className="w-full max-w-[64px] min-h-[64px] h-auto bg-[#DAE2FF] rounded-lg flex items-center justify-center" 
                imageSrc="../../../icons/strategy-icon.svg"
                width={25}
                height={25}
            />

            <h2 className="text-[36px] font-semibold text-[#131B2E]">Global Strategy & Advisory</h2>

            <p className="text-[15px] font-normal text-[#505F76]">
                Comprehensive market entry strategies and competitive analysis designed <br />
                for multinational corporations. Our advisory services provide the structural <br />
                roadmap needed for sustainable international growth and risk mitigation in <br />
                volatile economic climates.
            </p>

            <ServiceFeatureList />
            
            <ServiceImage 
                className="w-full max-w-[576px] min-h-[307px] h-auto rounded-lg flex items-center justify-center"
                imageSrc="../../../images/services/service-image-1.svg"
                width={576}
                height={307}
            />
        </div>
    )
}