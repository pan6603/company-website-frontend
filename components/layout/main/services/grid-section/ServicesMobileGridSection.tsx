import ServiceCard from "@/components/ui/card/ServiceCard";
import CardIcon from "@/components/ui/icons/CardIcon";

const services = [
  {
    icon: "/icons/strategy-icon.svg",
    title: "Global Strategy & Advisory",
    description:
      "High-level market analysis and cross-border expansion strategies tailored for Fortune 500 partners.",
  },
  {
    icon: "/icons/service-badge-icon.svg",
    title: "Financial Intelligence",
    description:
      "Advanced capital allocation models and fiscal risk assessment to ensure institutional stability.",
  },
  {
    icon: "/icons/operations-icon.svg",
    title: "Operational Excellence",
    description:
      "Optimizing complex supply chains and internal processes through lean, data-driven methodologies.",
  },
  {
    icon: "/icons/security-icon.svg",
    title: "Risk & Compliance",
    description:
      "Comprehensive regulatory navigation and governance frameworks for a shifting global landscape.",
  },
];

const cardClassName =
  "w-full min-h-[294px] h-auto bg-white border border-[#C3C6D5] rounded-[4px] p-8 flex flex-col gap-[16px]";

const iconClassName =
  "w-full max-w-[48px] min-h-[48px] h-auto bg-[#D0E1FB] rounded-[4px] flex items-center justify-center";

export default function ServicesMobileGridSection() {
  return (
    <section className="w-full min-h-[1269px] h-auto bg-[#F2F3FF] px-[24px] py-[48px] lg:hidden">
      <div className="w-full min-h-[1173px] h-auto flex flex-col gap-[24px]">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            className={cardClassName}
            icon={
              <CardIcon
                className={iconClassName}
                imageSrc={service.icon}
                width={24}
                height={24}
              />
            }
            title={service.title}
            titleClassName="text-[24px] font-semibold text-[#131B2E]"
            description={service.description}
            descriptionClassName="text-[16px] font-normal text-[#434653]"
          />
        ))}
      </div>
    </section>
  );
}