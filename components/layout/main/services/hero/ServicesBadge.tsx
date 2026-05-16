

type ServicesBadgeProps = {
    className?: string
    text?: string
    textClassName?: string
}


export default function ServicesBadge({ className, text, textClassName }: ServicesBadgeProps) {
    return (
        <div className={className}>
            {text && <span className={textClassName}>{text}</span>}
        </div>
    )
}