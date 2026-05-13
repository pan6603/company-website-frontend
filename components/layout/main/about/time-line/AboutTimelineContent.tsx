import AboutTimelineItem from "@/components/layout/main/about/time-line/AboutTimelineItem";

const items = [
  {
    date: "2004",
    title: "Foundation in New York",
    description:
      "Our journey began with a small team of three visionary partners dedicated to radical transparency in finance.",
    side: "left",
  },
  {
    date: "2012",
    title: "Global Expansion",
    description:
      "Opening our London and Singapore offices, we became a truly global consultancy firm serving the Fortune 500.",
    side: "right",
  },
  {
    date: "2024",
    title: "Modern Excellence",
    description:
      "Leading the digital transformation era with AI-driven insights and human-centric leadership models.",
    side: "left",
  },
] as const;

export default function AboutTimelineContent() {
  return (
    <div className="relative w-full max-w-[1216px] mx-auto min-h-[427px] py-4">
      {/* 가운데 세로선 */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#C3C6D5]/40" />

      <div className="flex flex-col gap-[72px]">
        {items.map((item) => (
          <AboutTimelineItem key={item.date} {...item} />
        ))}
      </div>
    </div>
  );
}