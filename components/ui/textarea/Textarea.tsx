
type TextareaProps = {
    className?: string;
    placeholder?: string;
}


export default function Textarea({ className, placeholder }: TextareaProps) {
    return (
        <textarea className={className} placeholder={placeholder || ""} />
    )
}