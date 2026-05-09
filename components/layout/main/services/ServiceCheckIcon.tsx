import Image from "next/image"


export default function ServiceCheckIcon() {
    return (
        <div className="w-full max-w-[18px] min-h-[22px] h-auto flex items-center justify-center">
            <Image 
                src="../../../../icons/service-check-icon.svg" 
                alt="service-check-icon" 
                width={15} 
                height={15} 
            />
        </div>
    )
}