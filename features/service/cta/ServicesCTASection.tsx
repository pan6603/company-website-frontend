import ServicesCTAContent from "@/features/service/cta/ServicesCTAContent";
import ServicesCTAVisual from "@/features/service/cta/ServicesCTAVisual";



export default function ServicesCTASection() {
    return (
        <section className="w-full max-w-[1440px] min-h-[624px] h-auto bg-[#131B2E] flex items-center justify-center">
            <div className="w-full max-w-[1216px] min-h-[384px] h-auto flex items-center justify-between">
                <ServicesCTAContent />
                <ServicesCTAVisual />
            </div>
        </section>
    )
}