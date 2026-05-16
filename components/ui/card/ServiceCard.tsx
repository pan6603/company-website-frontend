
type ServiceCardProps = {
    className?: string;
    icon?: React.ReactNode;
    title?: string;
    titleClassName?: string;
    description?: string;
    descriptionClassName?: string;
}


export default function ServiceCard({ className, icon, title, titleClassName, description, descriptionClassName }: ServiceCardProps) {
    return (
        <div className={className}>
            {icon && <div className="">{icon}</div>}
            {title && <h3 className={titleClassName}>{title}</h3>}
            {description && <p className={descriptionClassName}>{description}</p>}
        </div>
    )
}