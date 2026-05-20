

type ContactMobileInputFieldProps = {
    className?: string;
    label?: string;
    inputClassName?: string;
    placeholder?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function ContactMobileInputField({ className, label, inputClassName, placeholder, name, value, onChange }: ContactMobileInputFieldProps) {
    return (
        <div className={className}>
            {label && <label className="font-bold text-[12px] text-[#737784]">{label}</label>}
            <input className={inputClassName} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
        </div>
    )
}