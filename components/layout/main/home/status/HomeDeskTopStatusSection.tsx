import HomeStatsStability from "@/features/home/status/HomeStatsStability"
import HomeStatCards from "@/features/home/status/HomeStatCards"



export default function HomeDeskTopStatusSection() {
    return (
            <section className="
                hidden 
                lg:flex
                w-full 
                max-w-[1440px] 
                min-h-[699px]
                h-auto
                bg-[#283044]
                items-center
                justify-center
            ">
                <div className="w-full max-w-[1216px] min-h-[459px] h-auto flex items-center justify-between">
                    <HomeStatsStability />
                    <HomeStatCards />
                </div>
            </section>
    )
} 