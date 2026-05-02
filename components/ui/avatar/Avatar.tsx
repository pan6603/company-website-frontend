import Image from "next/image"



type AvatarProps = {
    className?: string
    imageSrc?: string
    width?: number
    height?: number
}


export default function Avatar({ className, imageSrc, width, height }: AvatarProps) {
    return (
        <div className={className}>
            <Image
                src={imageSrc || "/assets/images/avatar-image.png"}
                alt="avatar-image"
                width={width}
                height={height}
            />
        </div>
    )
}