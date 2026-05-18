import Image from "next/image"


type CloseIconProps = {
    className?: string;
    imageSrc: string;
    width?: number;
    height?: number;
}


export default function CloseIcon({ className, imageSrc, width, height }: CloseIconProps) {
    return (
        <div className={className}>
            {imageSrc && (
                <Image 
                    src={imageSrc}
                    alt="close-icon"
                    width={width}
                    height={height}
                />
            )}
        </div>
    )
}