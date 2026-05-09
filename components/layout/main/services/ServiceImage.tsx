import Image from "next/image"

type ServiceImageProps = {
    className?: string;
    imageSrc?: string;
    width?: number;
    height?: number;
}


export default function ServiceImage({ className, imageSrc, width, height }: ServiceImageProps) {
    return (
        <div className={className}>
            {imageSrc && <Image src={imageSrc} width={width} height={height} alt="service-image" />}
        </div>
    )
}