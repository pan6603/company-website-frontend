import AboutDeskTopMissionCard from "@/components/layout/main/about/mission-vision/AboutDeskTopMissionCard";
import AboutDeskTopVisionCard from "@/components/layout/main/about/mission-vision/AboutDeskTopVisionCard";


export default function AboutDeskTopMissionVisionSection() {
    return (
        <section className="
            hidden
            lg:flex
            w-full 
            max-w-[1440px] 
            min-h-[575px] 
            bg-[#FFFFFF] 
            items-center 
            justify-center
        ">
            <div className="w-full max-w-[1216px] min-h-[335px] flex items-center justify-between">
                <AboutDeskTopMissionCard />
                <AboutDeskTopVisionCard />
            </div>
        </section>
    )
}