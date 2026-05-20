import AboutMobileMissionCard from "@/components/layout/main/about/mission-vision/AboutMobileMissionCard"
import AboutMobileVisionCard from "@/components/layout/main/about/mission-vision/AboutMobileVisionCard"



export default function AboutMobileMissionVisionSection() {
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
                <AboutMobileMissionCard />
                <AboutMobileVisionCard />
            </div>
        </section>
    )
}