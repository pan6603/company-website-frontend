import ImageCard from "@/components/ui/card/ImageCard"
import HomeAboutUsContent from "@/features/home/about/HomeAboutUsContent"

export default function HomeAboutUsSection() {
    return (
        <section className="w-full max-w-[1440px] min-h-[950px] h-auto bg-[#FFFFFF] flex items-center justify-center">
            <div className="w-full max-w-[1216px] min-h-[710px] h-auto flex items-center justify-between">
                <ImageCard 
                    className="w-full max-w-[568px] min-h-[710px] h-auto" 
                    imageSrc="../../images/about/about-team.svg"
                    width={568}
                    height={710}
                />

                <HomeAboutUsContent />
            </div>
        </section>
    )
}