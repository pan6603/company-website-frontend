import Image from "next/image"


type ImageCardProps = {
    className?: string;
    imageSrc?: string;
    width?: number;
    height?: number;
}


export default function ImageCard({ className, imageSrc, width, height }: ImageCardProps) {
    return (
        <div className={className}>
           <Image
                src={imageSrc || "/assets/images/default-image.jpg"}
                alt="image-card"
                width={width}    
                height={height}       
                className="object-cover w-full h-full"
            />
        </div>
    )
}