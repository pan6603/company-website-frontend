

type ContactMoblieInputFieldProps = {
    className?: string;
    label?: string;
    inputClassName?: string;
    placeholder?: string;
}


export default function ContactMoblieInputField({ className, label, inputClassName, placeholder }: ContactMoblieInputFieldProps) {
    return (
        <div className={className}>
            {label && <label className="font-bold text-[12px] text-[#737784]">{label}</label>}
            <input className={inputClassName} placeholder={placeholder} />
        </div>
    )
}