import Image from "next/image"

type AboutTeamProfileProps = {
    className?: string
    imgSrc?: string
    name?: string
    position?: string
}


export default function AboutTeamProfile({ className, imgSrc, name, position }: AboutTeamProfileProps) {
    return (
        <div className={className}>
            {imgSrc && 
                <div className="w-full max-w-[128px] min-h-[144px] h-auto flex items-start justify-center mt-[16px]">
                    <Image 
                        src={imgSrc} 
                        alt="about-team-profile" 
                        width={128} 
                        height={128} 
                        className="w-full h-auto" 
                    />
                </div>
          
            }
            {name && <h2 className="text-[20px] font-semibold text-[#131B2E]">{name}</h2>}
            {position && <span className="text-[12px] font-semibold text-[#00327D]">{position}</span>}
        </div>
    )
}