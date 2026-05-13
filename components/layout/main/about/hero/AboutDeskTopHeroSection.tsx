import AboutHeroOurStory from "@/features/about/hero/AboutHeroOurStory"
import AboutHeroImageSection from "@/features/about/hero/AboutHeroImageSection"



export default function AboutDeskTopHeroSection() {
    return (
        <section className="
            hidden 
            lg:flex
            w-full
            max-w-[1440px] 
            min-h-[740px] 
            bg-[#FAF8FF] 
            items-center 
            justify-center
        ">

            <div className="w-full max-w-[1280px] min-h-[500px] h-auto px-8 flex items-center justify-between">
                <AboutHeroOurStory />
                <AboutHeroImageSection />
            </div>

        </section>
    )
}