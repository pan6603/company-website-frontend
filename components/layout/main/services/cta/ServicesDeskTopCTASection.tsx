import ServicesCTAContent from "@/features/service/cta/ServicesCTAContent";
import ServicesCTAVisual from "@/features/service/cta/ServicesCTAVisual";


export default function ServicesDeskTopCTASection() {
    return (
        <section 
            className="
                hidden
                lg:flex
                w-full
                max-w-[1440px]
                min-h-[624px]
                h-auto
                bg-[#131B2E]
                items-center
                justify-center
            ">
                <div className="w-full max-w-[1216px] min-h-[384px] h-auto flex items-center justify-between">
                    <ServicesCTAContent />
                    <ServicesCTAVisual />
                </div>
        </section>
    )
}