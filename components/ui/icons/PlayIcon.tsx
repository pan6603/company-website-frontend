import Image from "next/image"

type PlayIconProps = {
    className?: string;
    imageSrc?: string;
    width?: number;
    height?: number;
}



export default function PlayIcon({ className, imageSrc, width, height}: PlayIconProps) {
    return (
        <div className={className}>
            <Image 
                src={imageSrc || "/assets/icons/play-icon.svg"} 
                alt="play-icon" 
                width={width} 
                height={height} 
            />
        </div>
    )
}