import Image from "next/image"


type QuoteIconProps = {
    className?: string
    imageSrc?: string
    width?: number
    height?: number
}


export default function QuoteIcon({ className, imageSrc, width, height }: QuoteIconProps) {
    return (
        <div className={className}>
            <Image
                src={imageSrc || "/assets/icons/quote-icon.svg"}
                alt="quote-icon"
                width={width || 48}
                height={height || 58}
            />
        </div>
    )
}