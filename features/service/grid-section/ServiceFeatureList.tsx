import FeatureListItem from "@/features/service/grid-section/FeatureListItem"
import ServiceCheckIcon from "@/components/layout/main/services/ServiceCheckIcon"


const FEATURE_ITEMS = [
    "Cross-border regulatory compliance",
    "Mergers and Acquisitions due diligence",
    "Corporate restructuring & governance",
];

export default function ServiceFeatureList() {
    return (
        <div className="w-full max-w-[576px] min-h-[133px] h-auto flex flex-col justify-between">
            {FEATURE_ITEMS.map((item) => (
                <FeatureListItem
                    key={item}
                    className="w-full max-w-[576px] min-h-[28px] h-auto flex items-center gap-2"
                    label={item}
                    icon={<ServiceCheckIcon />}
                />
            ))}
      
        </div>
    )
}