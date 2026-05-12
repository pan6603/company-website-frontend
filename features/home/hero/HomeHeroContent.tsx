import HomeHeroCTAGroup from "@/features/home/hero/HomeHeroCTAGroup";



export default function HomeHeroContent() {
    return (
        <div className="absolute w-full max-w-[1280px] min-h-[366px] h-auto">
            <div className="w-full max-w-[672px] min-h-[366px] h-auto flex flex-col justify-between">
                <h1 className="text-[48px] font-bold text-[#131B2E] z-10">
                    Architecting the Future of <br />
                    Professional Excellence.
                </h1>
                
                <p className="text-[18px] font-normal text-[#505F76]">
                    We provide institutional-grade solutions for high-level decision makers. Our <br />
                    strategic frameworks enable global enterprises to navigate complex markets <br />
                    with stability and precision.
                </p>
                
                <HomeHeroCTAGroup />
            </div>
        </div>
    )
}