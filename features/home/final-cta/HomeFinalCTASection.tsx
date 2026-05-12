import HomeSizeCTATitles from "@/components/layout/main/home/cta-section/titles/HomeSizeCTATitles"
import HomeSizeCTAContents from "@/components/layout/main/home/cta-section/contents/HomeSizeCTAContents"
import HomeSizeCTAButtons from "@/components/layout/main/home/cta-section/buttons/HomeSizeCTAButtons"

export default function HomeFinalCTASection() {
    return (
        <section className="
            w-full
            min-h-[441px]
            h-auto
            bg-[#EAEDFF]
            px-[24px]
            py-[78px]

            lg:flex
            lg:items-center
            lg:justify-center
            lg:max-w-[1440px]
            lg:min-h-[480px]
          lg:bg-[#00327D]
        ">
            <div className="
                w-full 
                h-auto
                flex 
                flex-col 
                items-center 
                justify-between
                gap-[22px]
            
                lg:max-w-[1280px] 
                lg:min-h-[241px]  
            ">
                <HomeSizeCTATitles />
                <HomeSizeCTAContents />
                <HomeSizeCTAButtons />
            </div>        
        </section>
    )
}