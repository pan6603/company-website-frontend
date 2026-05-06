import Image from "next/image"

type TrailingIconProps = {
    className?: string;
    imageSrc?: string;
    width?: number;
    height?: number;
}


export default function TrailingIcon({ className, imageSrc, width, height }: TrailingIconProps) {
    return (
        <div className={className}>
            <Image 
                src={imageSrc || "/assets/icons/arrow-right.svg"}
                alt="trailing-icon" 
                width={width} 
                height={height} 
            />
        </div>
    )
}