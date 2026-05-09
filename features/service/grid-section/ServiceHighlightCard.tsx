import BadgeIcon from "@/components/ui/badge/BadgeIcon"
import MetricBar from "@/features/service/grid-section/MetricBar"

export default function ServiceHighlightCard() {
    return (
        <div className="w-full max-w-[384px] min-h-[863px] h-auto bg-[#00327D] p-10 rounded-lg flex flex-col gap-[24px] col-span-4">
            <div className="w-full max-w-[64px] min-h-[96px] h-auto">
                <BadgeIcon 
                    className="w-full max-w-[64px] min-h-[64px] h-auto bg-[#3C5A93] rounded-lg flex items-center justify-center" 
                    imageSrc="../../../icons/service-badge-icon.svg"
                    width={27}
                    height={21}
                />

            </div>

            <h3 className="text-[24px] font-bold text-white">Financial Intelligence</h3>

            <p className="text-[16px] font-normal text-white">
                Data-driven financial modeling and <br />
                capital management strategies to <br />
                optimize shareholder value and ensure <br />
                long-term fiscal health.
            </p>

            <div className="w-full max-w-[304px] min-h-[477px] h-auto flex items-end justify-center">
                <MetricBar />
            </div>
  
        </div>
    )
}