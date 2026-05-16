import FeaturedServiceCard from "@/features/service/grid-section/FeaturedServiceCard";
import ServiceHighlightCard from "@/features/service/grid-section/ServiceHighlightCard";
import FeatureCard from "@/components/layout/main/services/FeatureCard";
import ServiceSplitSection from "@/features/service/grid-section/ServiceSplitSection";


const featureCards = [
  {
    imageSrc: "/icons/operations-icon.svg",
    title: "Operational Excellence",
    description:
      "Streamlining internal processes through Lean Six Sigma methodologies and advanced automation technologies to maximize organizational throughput.",
  },
  {
    imageSrc: "/icons/security-icon.svg",
    title: "Customer Centricity",
    description:
      "Focusing on delivering exceptional customer experiences through personalized solutions and proactive support.",
  },
];


export default function ServicesDeskTopGridSection() {
    return (
        <section 
            className="
                hidden 
                lg:flex
                w-full 
                max-w-[1440px]
                min-h-[1887px]
                h-auto
                bg-[#FAF8FE]
                mx-auto
                items-center
                justify-center
            ">
                <div className="w-full max-w-[1216px] min-h-[1687px] h-auto grid grid-cols-12 gap-8">
                    <FeaturedServiceCard />
                    <ServiceHighlightCard />
                
                    {featureCards.map((card) => (
                        <FeatureCard
                            key={card.title}
                            imageSrc={card.imageSrc}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                    
                    <ServiceSplitSection />
                </div>       
            </section>
    )
}