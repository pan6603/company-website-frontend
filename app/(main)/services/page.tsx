import ServicesHeroSection from "@/features/service/hero/ServicesHeroSection"
import ServicesGridSection from "@/features/service/grid-section/ServicesGridSection"
import ServicesCTASection from "@/features/service/cta/ServicesCTASection"


export default function Services() {
    return (
        <>
            <ServicesHeroSection />
            <ServicesGridSection />
            <ServicesCTASection />
        </>
    )
}