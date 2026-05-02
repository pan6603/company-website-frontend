import Image from "next/image"


type VerifiedIconProps = {
    className?: string;
    imageSrc?: string;
    width?: number;
    height?: number;
}



export default function VerifiedIcon({ className, imageSrc, width, height }: VerifiedIconProps) {
    return (
        <div className={className}>
            {imageSrc && 
                <Image 
                    src={imageSrc}
                    alt="verified-icon" 
                    width={width || 24}
                    height={height || 24}
                />}
        </div>
    )
}