type AboutTimelineItemProps = {
  date: string;
  title: string;
  description: string;
  side: "left" | "right";
};

export default function AboutTimelineItem({
  date,
  title,
  description,
  side,
}: AboutTimelineItemProps) {
  const isLeft = side === "left";

  return (
    <div className="relative grid grid-cols-2 items-start">
      {/* 가운데 점 */}
      <div className="absolute left-1/2 top-5 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-[#00327D] ring-4 ring-white" />

      {/* 왼쪽 콘텐츠 */}
      <div
        className={`pr-[64px] ${
          isLeft ? "text-right" : "invisible"
        }`}
      >
        <h3 className="text-[24px] font-semibold text-[#00327D] leading-none">
          {date}
        </h3>
        <p className="mt-2 text-[16px] font-semibold text-[#131B2E]">
          {title}
        </p>
        <p className="mt-2 text-[16px] font-normal leading-[1.6] text-[#434653]">
          {description}
        </p>
      </div>

      {/* 오른쪽 콘텐츠 */}
      <div
        className={`pl-[64px] ${
          !isLeft ? "text-left" : "invisible"
        }`}
      >
        <h3 className="text-[24px] font-semibold text-[#00327D] leading-none">
          {date}
        </h3>
        <p className="mt-2 text-[16px] font-semibold text-[#131B2E]">
          {title}
        </p>
        <p className="mt-2 text-[16px] font-normal leading-[1.6] text-[#434653]">
          {description}
        </p>
      </div>
    </div>
  );
}