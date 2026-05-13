import AboutTimelineCard from "@/components/layout/main/about/time-line/AboutTimelineCard"

const timelineData = [
  {
    date: "2004",
    title: "The Foundation",
    description: `
      Founded in Zurich with a focus on
      executive alignment and strategic risk
      management for European financial
      institutions.
    `,
  },
  {
    date: "2012",
    title: "Global Expansion",
    description: `
      Opened offices in New York and
      Singapore, establishing a truly global
      presence to serve multi-national
      conglomerates.
    `,
  },
  {
    date: "Present Day",
    title: "Future Ready",
    description: `
      Leading the digital transformation of
      corporate governance through proprietary
      leadership frameworks and AI-driven
      insights.
    `,
  },
]


export default function AboutMoblieTimeline() {
    return (
        <section 
            className="
                w-full
                min-h-[781px]
                h-auto
                bg-[#FFFFFF]
                px-[24px]
                py-[64px]
                flex
                flex-col
                justify-between
                lg:hidden
            ">

            <div className="w-full h-auto flex flex-col gap-[16px]">
                <h2 className="text-[28px] font-normal text-[#131B2E]">Two Decades of Excellence</h2>
                <div className="w-full max-w-[48px] min-h-[4px] h-auto bg-[#00327D]"></div>
            </div>

            <div className="w-full min-h-[501px] h-auto border-l-2 border-[#DAE2FF] flex flex-col gap-[48px]">
                {timelineData.map((item) => (
                    <AboutTimelineCard
                        key={item.date}
                        className="w-full min-h-[135px] h-auto flex flex-col gap-[8px] pl-[40px] relative"
                        date={item.date}
                        title={item.title}
                        description={item.description.trim()}
                    />
                ))}
            </div>

        </section>
    )
}