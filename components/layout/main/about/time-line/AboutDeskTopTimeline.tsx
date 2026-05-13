import AboutTimelineHeader from "@/components/layout/main/about/time-line/AboutTimelineHeader";
import AboutTimelineContent from "@/components/layout/main/about/time-line/AboutTimelineContent";




export default function AboutDeskTopTimeline() {
    return (
        <section 
            className="
                hidden 
                lg:flex
                w-full 
                max-w-[1440px] 
                min-h-[806px] 
                bg-[#F4F4FE] 
                items-center 
                justify-center
            ">
            <div className="w-full max-w-[1280px] min-h-[566px] px-8 flex flex-col items-center justify-between">
                <AboutTimelineHeader />
                <AboutTimelineContent />
            </div>
        </section>
    )
}