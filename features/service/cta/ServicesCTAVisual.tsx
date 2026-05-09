import BuildingCtaIcon from "@/components/ui/icons/BuildingCtaIcon";


export default function ServicesCTAVisual() {
    return (
        <div className="w-full max-w-[384px] min-h-[384px] h-auto border border-[#FFFFFF] rounded-lg flex items-center justify-center">
            <div className="w-full max-w-[318px] min-h-[318px] h-auto border border-[#FFFFFF] rounded-lg flex items-center justify-center">
                <div className="w-full max-w-[252px] min-h-[252px] h-auto border border-[#FFFFFF] rounded-lg flex items-center justify-center">
                    <BuildingCtaIcon 
                        className="w-full max-w-[60px] min-h-[72px] h-auto" 
                        imageSrc="../../../icons/building-cta-icon.svg"
                        width={50}
                        height={45}
                    />
                </div>
            </div>
        </div>
    )
}