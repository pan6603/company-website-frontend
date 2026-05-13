import AboutTeamProfile from "@/components/layout/main/about/team/AboutTeamProfile"

const teamMembers = [
  {
    imgSrc: "/images/team/team-card-1.svg",
    name: "Marcus Thorne",
    position: "Chief Executive Officer",
  },
  {
    imgSrc: "/images/team/team-card-2.svg",
    name: "Sarah Jenkins",
    position: "Managing Director",
  },
  {
    imgSrc: "/images/team/team-card-3.svg",
    name: "David Chen",
    position: "Head of Global Strategy",
  },
]




export default function AboutMoblieTeam() {
    return (
        <section 
            className="
                w-full 
                min-h-[864px]
                h-auto
                bg-[#EAEDFF] 
                px-[24px] 
                py-[64px]
                flex 
                flex-col 
                items-center 
                justify-between
                lg:hidden
            ">
                <div className="w-full h-auto flex flex-col justify-between">
                    <h2 className="text-[28px] font-normal text-[#131B2E] text-center">Meet the Executive Team</h2>
                    <span className="text-[16px] font-normal text-[#434653] text-center">The minds behind our strategic precision.</span>
                </div>


                <div className="w-full min-h-[622px] h-auto flex flex-col justify-between">
                    {teamMembers.map((member) => ( 
                        <AboutTeamProfile
                            key={member.name}
                            className="w-full min-h-[186px] h-auto flex flex-col items-center"
                            imgSrc={member.imgSrc}
                            name={member.name}
                            position={member.position}
                        />
                    ))}
                   
                </div>
        </section>
    )
}