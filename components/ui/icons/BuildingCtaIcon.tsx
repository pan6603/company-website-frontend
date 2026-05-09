import Image from "next/image";

type BuildingCtaIconProps = {
    className?: string;
    imageSrc?: string;
    width?: number;
    height?: number;
}


export default function BuildingCtaIcon({ className, imageSrc, width, height }: BuildingCtaIconProps) {
    return (
        <div className={className}>
            <Image 
                src={imageSrc || "../../../icons/building-cta-icon.svg"} 
                alt="building-cta-icon" 
                width={width || 50} 
                height={height || 45} 
            />
        </div>
    )
}