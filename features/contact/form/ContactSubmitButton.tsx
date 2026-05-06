import TrailingIcon from "@/components/ui/icons/TrailingIcon"


export default function ContactSubmitButton() {
    return (
        <button 
            type="submit" 
            className="w-full max-w-[600px] min-h-[52px] h-auto bg-[#00327D] rounded font-semibold text-sm text-white flex items-center justify-center gap-2">
                Send Message
                
                <TrailingIcon 
                    className="w-full max-w-[14px] min-h-[20px] h-auto flex items-center justify-center" 
                    imageSrc="../../../icons/trailing-icon.svg"
                    width={10}
                    height={9}
                />
            </button>
    )
}