import Image from "next/image"

type HamburgerIconProps = {
    className?: string;
    imageSrc?: string;
}


export default function HamburgerIcon({ className, imageSrc }: HamburgerIconProps) {
    return (
        <div className={className}>
            <Image 
                src={imageSrc || "/icons/hamburger-icon.svg"} 
                alt="Hamburger Icon" 
                width={24} 
                height={28} 
            />
        </div>
    )
}