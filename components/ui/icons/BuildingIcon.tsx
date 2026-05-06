import Image from "next/image"

const iconWrapperStyle = "w-full max-w-[40px] min-h-[40px] h-auto bg-[#00327D] rounded-sm flex items-center justify-center"

export default function BuildingIcon() {
    return (
        <div className={iconWrapperStyle}>
            <Image 
                src="../../../icons/building-icon.svg"
                alt="building-icon"
                width={16} 
                height={16} 
            />
        </div>
    )
}