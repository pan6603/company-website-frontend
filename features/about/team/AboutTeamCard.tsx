import Image from "next/image"

type AboutTeamCardProps = {
    className?: string;
    profileImageUrl?: string;
    name?: string;
    role?: string;
    description?: string; 
}


export default function AboutTeamCard({ className, profileImageUrl, name, role, description }: AboutTeamCardProps) {
    return (
        <div className={className}>
            {profileImageUrl && 
                <Image 
                    src={profileImageUrl}
                    alt="profile-image" 
                    width={384}
                    height={686}
                />}

            {name && <span className="text-[24px] font-semibold text-[#131B2E]">{name}</span>}

            {role && <span className="text-[12px] font-semibold text-[#00327D]">{role}</span>}

            {description && <p className="text-[16px] font-normal text-[#434653] whitespace-pre-line">{description}</p>}
        </div>
    )
}