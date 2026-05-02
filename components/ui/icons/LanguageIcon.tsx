import Link from "next/link"
import Image from "next/image"

type LanguageIconProps = {
    className?: string
    imageSrc?: string
    width?: number
    height?: number
}


export default function LanguageIcon({ className, imageSrc, width, height }: LanguageIconProps ) {
    return (
        <Link href="#" className={className}>
            <Image 
                src={imageSrc || "/assets/icons/language-icon.png"}
                alt="language-icon"
                width={width}
                height={height} 
            />
        </Link>
    )
}