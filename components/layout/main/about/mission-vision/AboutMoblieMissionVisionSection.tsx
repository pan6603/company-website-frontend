import AboutMoblieMissionCard from "@/components/layout/main/about/mission-vision/AboutMoblieMissionCard"
import AboutMoblieVisionCard from "@/components/layout/main/about/mission-vision/AboutMoblieVisionCard"



export default function AboutMoblieMissionVisionSection() {
    return (
        <section className="
            w-full 
            min-h-[736px] 
            bg-[#F2F3FF] 
            flex 
            items-center 
            justify-center 
            px-[24px] 
            py-[48px] 
            lg:hidden
        ">
            <div className="w-full min-h-[640px] flex flex-col justify-between">
                <AboutMoblieMissionCard />
                <AboutMoblieVisionCard />
            </div>
        </section>
    )
}