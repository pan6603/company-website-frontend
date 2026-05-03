import AboutTeamCard from "@/features/about/team/AboutTeamCard";



export default function AboutLeadershipSection() {
    return (
        <div className="w-full max-w-[1216px] min-h-[685px] h-auto flex items-center justify-between">
            <AboutTeamCard 
                className="w-full max-w-[384px] min-h-[686px] h-auto p-8 flex flex-col gap-[4px] border-[1px] border-[#F1F5F9]" 
                profileImageUrl="../../../images/team/team-card-1.svg"
                name="Marcus Thorne"
                role="Chief Executive Officer"
                description={
                    `With over 25 years in strategic
                    management, Marcus leads our global
                    operations with a focus on sustainable
                `}
            />

            <AboutTeamCard 
                className="w-full max-w-[384px] min-h-[686px] h-auto p-8 flex flex-col gap-[4px] border-[1px] border-[#F1F5F9]" 
                profileImageUrl="../../../images/team/team-card-2.svg"
                name="Sarah Jenkins"
                role="Chief Strategy Officer"
                description={
                    `Sarah specializes in cross-border
                    mergers and digital transformation
                    strategies for multi-national
                `}
            />

            <AboutTeamCard 
                className="w-full max-w-[384px] min-h-[686px] h-auto p-8 flex flex-col gap-[4px] border-[1px] border-[#F1F5F9]" 
                profileImageUrl="../../../images/team/team-card-3.svg"
                name="David Chen"
                role="VP of Innovation"
                description={
                   `David pioneers our R&D initiatives,
                    focusing on how emerging technologies
                    can solve legacy infrastructure problems.`
                }
            />
        </div>
    )
}