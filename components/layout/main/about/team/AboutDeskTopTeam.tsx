import AboutTeamSectionHeader from "@/features/about/team/AboutTeamSectionHeader";
import AboutLeadershipSection from "@/features/about/team/AboutLeadershipSection";


export default function AboutDeskTopTeam() {
    return (
        <section 
            className="
                hidden 
                lg:flex
                w-full 
                max-w-[1440px]
                min-h-[1092px] 
                bg-[#FFFFFF] 
                items-center 
                justify-center
            ">
            <div className="w-full max-w-[1280px] min-h-[852px] h-auto flex flex-col items-center justify-between">
                <AboutTeamSectionHeader />
                <AboutLeadershipSection />
            </div>
        </section>
    )
}