import HomeServiceCard from "@/components/ui/card/HomeServiceCard"

const services = [
  {
    iconSrc: "/icons/chart-icon.svg",
    title: "Market Intelligence",
    description:
      "Deep-dive analytical reporting that uncovers emerging trends and competitive landscapes before they impact your bottom line.",
  },
  {
    iconSrc: "/icons/bank-icon.svg",
    title: "Strategic Advisory",
    description:
      "Bespoke consultancy for organizational restructuring, mergers, and long-term capital allocation strategies for global firms.",
  },
  {
    iconSrc: "/icons/shield-icon.svg",
    title: "Risk Management",
    description:
      "Advanced risk mitigation frameworks designed to protect institutional assets against market volatility and geopolitical shifts.",
  },
];


export default function HomeDeskTopServices() {
    return (
        <section className="
            hidden 
            lg:flex
            w-full 
            max-w-[1440px] 
            min-h-[750px] 
            h-auto 
            bg-[#FAF8FF] 
            items-center
            justify-center
        ">
            <div className="w-full max-w-[1280px] min-h-[511px] h-auto flex flex-col items-center justify-between">
                <h2 className="text-[36px] font-semibold text-[#131B2E]">Specialized Services</h2>

                <div className="w-full max-w-[1216px] min-h-[363px] h-auto flex items-center justify-between">
                    {services.map((service) => (
                        <HomeServiceCard 
                            key={service.title}
                            className="w-full max-w-[384px] min-h-[364px] h-auto bg-[#FFFFFF] p-10 flex flex-col justify-between"
                            iconSrc={service.iconSrc}
                            cardTitle={service.title} 
                            cardDescription={service.description}
                            textLinkCTA="Explore Methodology"
                        />
                    ))}
       
                </div>
            </div>
        </section>
    )
}