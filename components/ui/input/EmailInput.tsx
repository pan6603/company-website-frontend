import SubmitButton from "@/components/ui/button/SubmitButton"

type EmailInputProps = {
    className?: string
    placeholder?: string
}


export default function EmailInput({ className, placeholder }: EmailInputProps) {
    return (
        <div className="relative w-full max-w-[400px]">
            <input type="email" className={className} placeholder={placeholder} />
            <SubmitButton 
                className="absolute right-[3px] top-[15px] w-full max-w-[40px] min-h-[26px] h-auto bg-[#00327D] flex items-center justify-center"
                imageSrc="../../../icons/submit-icon.svg"
                width={10}
                height={10}
            />
        </div>
    
    )
}