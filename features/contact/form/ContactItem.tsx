

type ContactItemProps = {
    className?: string
    title?: string
    address?: string
    phone?: string
    email?: string
    icon?: React.ReactNode
}


export default function ContactItem({ className, title, address, phone, email, icon }: ContactItemProps) {
    return (
        <div className={className}>
            {icon && <div className="w-full max-w-[48px] min-h-[48px] h-auto">{icon}</div>}
            
            <div className="w-max h-max flex flex-col justify-between">
                {title && <h4 className="font-semibold text-sm text-[#434653]">{title}</h4>}
                {address && <p className="font-normal text-base text-[#131B2E] whitespace-pre-line">{address}</p>}
                {phone && <p className="font-normal text-base text-[#131B2E]">{phone}</p>}
                {email && <p className="font-normal text-base text-[#131B2E]">{email}</p>}
            </div>
    

        </div>
    )
}