import Link from "next/link"
import Image from "next/image"

type ShareIconProps = {
    className?: string
    imageSrc?: string
    width?: number
    height?: number
}


export default function ShareIcon({ className, imageSrc, width, height }: ShareIconProps) {
    return (
        <Link href="#" className={className}>
            <Image 
                src={imageSrc || "/assets/icons/share-icon.png"}
                alt="share-icon"
                width={width}
                height={height} 
            />
        </Link>
    )
}