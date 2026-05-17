import Input from "@/components/ui/input/Input";

type ContactInputFieldProps = {
    className?: string;
    label?: string;
    type?: React.HTMLInputTypeAttribute
    placeholder?: string;
}

const inputStyle = "w-full max-w-[284px] min-h-[49px] h-auto bg-[#FFFFFF] border border-[#C3C6D5] rounded p-4 font-normal text-base text-[#6B7280]"

export default function ContactInputField({ 
    className = "", 
    label, 
    type = "text", 
    placeholder = "" 
}: ContactInputFieldProps) {
    return (
        <div className={className}>
            {label && 
                <label className="font-semibold text-xs text-[#434653]">{label}</label>
            }

            <Input 
                type={type} 
                placeholder={placeholder}
                className={inputStyle}
            />
            
        </div>
    )
}