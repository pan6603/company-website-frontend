import Image from "next/image"

type SubmitButtonProps = {
    className?: string
    imageSrc?: string
    width?: number
    height?: number
}



export default function SubmitButton({ className, imageSrc, width, height }: SubmitButtonProps) {
    return (
        <button className={className}>
            <Image 
                src={imageSrc || "/assets/icons/arrow-right.svg"}
                alt="submit-icon" 
                width={width} 
                height={height} 
            />
        </button>
    )
}