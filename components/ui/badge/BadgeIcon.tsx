import Image from "next/image"

type BadgeIconProps = {
    className?: string;
    imageSrc?: string;
    width?: number;
    height?: number;
}


export default function BadgeIcon({ className, imageSrc, width, height }: BadgeIconProps) {
    return (
        <div className={className}>
            {imageSrc && (<Image src={imageSrc} alt="badge-icon" width={width || 64} height={height || 64} />)}
        </div>
    )
}