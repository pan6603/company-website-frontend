import AboutTimelineHeader from "@/features/about/time-line/AboutTimelineHeader";
import AboutTimelineContent from "@/features/about/time-line/AboutTimelineContent";



export default function AboutTimelineSection() {
    return (
        <section className="w-full max-w-[1440px] min-h-[806px] bg-[#F4F4FE] flex items-center justify-center">
            <div className="w-full max-w-[1280px] min-h-[566px] px-8 flex flex-col items-center justify-between">
                <AboutTimelineHeader />
                <AboutTimelineContent />
            </div>
        </section>
    )
}