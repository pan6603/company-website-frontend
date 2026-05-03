import AboutTeamSectionHeader from "@/features/about/team/AboutTeamSectionHeader";
import AboutLeadershipSection from "@/features/about/team/AboutLeadershipSection";

export default function AboutTeamSection() {
    return (
        <section className="w-full max-w-[1440px] min-h-[1092px] bg-[#FFFFFF] flex items-center justify-center">
            <div className="w-full max-w-[1280px] min-h-[852px] h-auto flex flex-col items-center justify-between">
                <AboutTeamSectionHeader />
                <AboutLeadershipSection />
            </div>
        </section>
    )
}