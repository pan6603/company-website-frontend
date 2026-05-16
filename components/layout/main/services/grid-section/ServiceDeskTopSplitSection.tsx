import ServiceContentPanel from "@/features/service/grid-section/ServiceContentPanel";
import ServiceImagePanel from "@/features/service/grid-section/ServiceImagePanel";


export default function ServiceDeskTopSplitSection() {
    return (
        <div 
            className="
                hidden
                lg:flex
                w-full
                max-w-[1216px]
                min-h-[609px]
                h-auto
                col-span-12
                items-start
                justify-between
            ">
            <ServiceContentPanel />
            <ServiceImagePanel />
        </div>
    )
}