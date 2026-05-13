

type AboutTimelineCardProps = {
    className?: string
    date?: string
    title?: string
    description?: string
}


export default function AboutTimelineCard({ className, date, title, description }: AboutTimelineCardProps) {
    return (
        <div className={className}>
            <div className="absolute top-0 left-[-11px] w-full max-w-[20px] min-h-[20px] h-auto bg-[#00327D] rounded-full"></div>
            {date && <span className="font-bold text-[12px] text-[#00327D]">{date}</span>}
            {title && <h3 className="text-[18px] font-normal text-[#131B2E]">{title}</h3>}
            {description && <p className="text-[14px] font-normal text-[#434653]">{description}</p>}
        </div>
    )
}