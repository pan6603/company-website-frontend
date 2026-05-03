import HomeStatsStability from "@/features/home/status/HomeStatsStability"
import HomeStatCards from "@/features/home/status/HomeStatCards"

export default function HomeStatusSection() {
    return (
        <section className="w-full max-w-[1440px] min-h-[699px] h-auto bg-[#283044] flex items-center justify-center">
            <div className="w-full max-w-[1216px] min-h-[459px] h-auto flex items-center justify-between">

                <HomeStatsStability />
                <HomeStatCards />
         

            </div>
        </section>
    )
}