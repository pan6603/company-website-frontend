import HomeMobileServiceTitle from "@/components/layout/main/home/service/titles/HomeMobileServiceTitle"
import HomeServiceCard from "@/components/ui/card/HomeServiceCard"

const SERVICES = [
  {
    iconSrc: "/icons/chart-icon.svg",
    cardTitle: "Strategic Advisory",
    cardDescription:
      "Deep-dive analytics to inform high-stakes decisions with clarity and professional excellence.",
  },
  {
    iconSrc: "/icons/bank-icon.svg",
    cardTitle: "Market Analysis",
    cardDescription:
      "Deep-dive analytics to inform high-stakes decisions with clarity and professional excellence.",
  },
  {
    iconSrc: "/icons/shield-icon.svg",
    cardTitle: "Asset Management",
    cardDescription:
      "Timeless stewardship of corporate assets focusing on efficiency and long-term growth.",
  },
]

const CARD_CLASS =
  "w-full min-h-[248px] h-auto bg-[#FFFFFF] border border-[#F1F5F9] p-[32px] rounded-[8px] flex flex-col gap-[15px]"

export default function HomeMobileServices() {
    return (
        <section className="w-full min-h-[1037px] h-auto bg-[#F2F3FF] px-[24px] py-[64px] lg:hidden">
            <div className="w-full min-h-[910px] h-auto flex flex-col items-center justify-between">
                <HomeMobileServiceTitle />

                <div className="w-full min-h-[794px] h-auto flex flex-col items-center justify-between">
                    {SERVICES.map((service) => ( 
                        <HomeServiceCard 
                            key={service.cardTitle}
                            className={CARD_CLASS}
                            iconSrc={service.iconSrc}
                            cardTitle={service.cardTitle}
                            cardDescription={service.cardDescription}
                        />
                    ))}     
                </div>
         
            </div>
        </section>
    )
}