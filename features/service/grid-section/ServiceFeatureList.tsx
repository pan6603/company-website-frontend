import FeatureListItem from "@/features/service/grid-section/FeatureListItem"
import ServiceCheckIcon from "@/components/layout/main/services/ServiceCheckIcon"


export default function ServiceFeatureList() {
    return (
        <div className="w-full max-w-[576px] min-h-[133px] h-auto flex flex-col justify-between">
            <FeatureListItem 
                className="w-full max-w-[576px] min-h-[28px] h-auto flex items-center gap-2" 
                label="Cross-border regulatory compliance"
                icon={<ServiceCheckIcon />}
            />

            <FeatureListItem 
                className="w-full max-w-[576px] min-h-[28px] h-auto flex items-center gap-2" 
                label="Mergers and Acquisitions due diligence"
                icon={<ServiceCheckIcon />}
            />

            <FeatureListItem 
                className="w-full max-w-[576px] min-h-[28px] h-auto flex items-center gap-2" 
                label="Corporate restructuring & governance"
                icon={<ServiceCheckIcon />}
            />
        </div>
    )
}