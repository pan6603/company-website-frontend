import Image from "next/image"


type CardIconProps = {
    className?: string;
    imageSrc?: string;
    width?: number;
    height?: number;
}


export default function CardIcon({ className, imageSrc = "/assets/icons/card-icon.svg", width = 48, height = 48 }: CardIconProps) {
    return (
        <div className={className}>
            <Image 
                src={imageSrc} 
                alt="card-icon" 
                width={width} 
                height={height} 
            />
        </div>
    )
}