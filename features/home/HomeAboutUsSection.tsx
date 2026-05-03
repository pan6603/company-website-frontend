import ImageCard from "@/components/ui/card/ImageCard"
import PlayCTAButton from "@/components/ui/button/PlayCTAButton"

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

                {/* Content Section */}
                <div className="w-full max-w-[568px] min-h-[428px] h-auto flex flex-col justify-between">
                    <h2 className="text-[36px] font-semibold text-[#131B2E]">
                        Committed to Sustainable <br />
                        Excellence and Innovation.
                    </h2>

                    <p className="text-[18px] font-normal text-[#505F76]">
                        Founded in 1989, Corporate Excellence has evolved from a <br />
                        boutique advisory firm into a global powerhouse. Our mission <br />
                        remains unchanged: to provide unwavering clarity in an <br />
                        increasingly volatile world.
                    </p>


                    <p className="text-[16px] font-normal text-[#505F76]">
                        We believe that true excellence is achieved through the meticulous <br />
                        application of logic, data, and human intuition. Our teams are composed of <br />
                        industry pioneers who have shaped the very markets they now navigate.
                    </p>

                    <PlayCTAButton 
                        className="w-full max-w-[234px] min-h-[57px] h-auto text-[14px] font-semibold text-[#00327D] flex items-center gap-3" 
                        text="Our Story & Vision"
                    />
                </div>
            </div>
        </section>
    )
}