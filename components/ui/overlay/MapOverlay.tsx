
type MapOverlayProps = {
    className?: string;
    icon?: React.ReactNode;
    locationTitle?: string;
}


export default function MapOverlay({ className, icon, locationTitle }: MapOverlayProps) {
    return (
        <div className={className}>
            <div className="w-full max-w-[40px] min-h-[48px] h-auto">{icon}</div>

            {locationTitle && <h3 className="font-normal text-base text-[#131B2E]">{locationTitle}</h3>}
        </div>
    )
}