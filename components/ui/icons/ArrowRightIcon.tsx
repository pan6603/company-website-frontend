import Image from "next/image"


type ArrowRightIconProps = {
    className?: string;
    imageSrc?: string;
    width?: number;
    height?: number;
}


export default function ArrowRightIcon({ className, imageSrc, width, height }: ArrowRightIconProps) {
    return (
        <div className={className}>
            {imageSrc && 
                <Image 
                    src={imageSrc}
                    alt="arrow-right-icon" 
                    width={width}
                    height={height}
                />
            }
        </div>
    )
}