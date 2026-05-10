
type FeatureListItemProps = {
    className?: string;
    icon?: React.ReactNode;
    label?: string;
}


export default function FeatureListItem({ className, icon, label }: FeatureListItemProps) {
    return (
        <div className={className}>
            {icon && <div className="w-full max-w-[18px] min-h-[28px] h-auto flex items-center justify-center">{icon}</div>}
            {label && <span className="text-[16px] font-normal text-[#434653]">{label}</span>}
        </div>
    )
}