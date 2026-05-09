import Image from "next/image"
import GradientOverlay from "@/components/ui/overlay/GradientOverlay"


export default function ServiceImagePanel() {
    return (
        <div className="w-full max-w-[607px] min-h-[607px] h-auto bg-red-300 relative">
            <GradientOverlay  className="absolute w-full max-w-[607px] min-h-[607px] h-auto bg-gradient-to-r from-[#F2F3FF] via-transparent to-transparent"/>
            <Image 
                src="../../../images/services/service-image-panel.svg"
                alt="service-image-panel"
                width={607}
                height={607} 
                className="w-full h-auto object-cover" 
            />
        </div>
    )
}