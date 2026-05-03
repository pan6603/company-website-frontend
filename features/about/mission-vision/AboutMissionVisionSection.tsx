import AboutMissionCard from "@/features/about/mission-vision/AboutMissionCard";
import AboutVisionCard from "@/features/about/mission-vision/AboutVisionCard";

export default function AboutMissionVisionSection() {
    return (
        <section className="w-full max-w-[1440px] min-h-[575px] bg-[#FFFFFF] flex items-center justify-center">
            <div className="w-full max-w-[1216px] min-h-[335px] flex items-center justify-between">
                <AboutMissionCard />
                <AboutVisionCard />
            </div>
        </section>
    )
}