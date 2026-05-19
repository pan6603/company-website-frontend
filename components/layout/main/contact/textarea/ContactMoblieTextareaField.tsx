

type ContactMoblieTextareaFieldProps = {
    className?: string;
    label?: string;
    textareaClassName?: string;
    placeholder?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}



export default function ContactMoblieTextareaField({ className, label, textareaClassName, placeholder, name, value, onChange }: ContactMoblieTextareaFieldProps) {
    return (
        <div className={className}>
            {label && <label className="font-bold text-[12px] text-[#737784]">{label}</label>}
            <textarea className={textareaClassName} placeholder={placeholder} name={name} value={value} onChange={onChange} />
        </div>
    )
}