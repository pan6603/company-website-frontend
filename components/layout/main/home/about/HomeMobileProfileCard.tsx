import Image from "next/image"
type HomeMobileProfileCardProps = {
    className?: string
    imageSrc?: string
    title?: string
    description?: string
}


export default function HomeMobileProfileCard({ className, imageSrc, title, description }: HomeMobileProfileCardProps) {
    return (
        <div className={className}>
            {imageSrc && 
                <Image 
                    src={imageSrc} 
                    alt={title || "Profile Image"}
                    width={342}
                    height={192}
                    className="object-cover w-full h-full"
                />}

            <div className="absolute left-[16px] top-[141px] w-full h-auto flex flex-col justify-between">
                <span className="font-normal text-[14px] text-white">{title}</span>
                <p className="font-normal text-[14px] text-white">{description}</p>
            </div>

            
        </div>
    )
}