import StatCard from "@/components/ui/card/StatCard"



export default function HomeStatCards() {
    return (
        <div className="w-full max-w-[568px] min-h-[436px] h-auto grid grid-cols-2 gap-4">
            <StatCard 
                className="w-full max-w-[276px] min-h-[234px] h-auto bg-[#3E4452] flex flex-col items-center justify-center" 
                statValue="$4.2B"
                statLabel="ASSETS UNDER ADVISORY"
            />

            <StatCard 
                className="w-full max-w-[276px] min-h-[234px] h-auto bg-[#3E4452] flex flex-col items-center justify-center"
                statValue="150+"
                statLabel="GLOBAL PARTNERS"
            />

            <StatCard 
                className="w-full max-w-[276px] min-h-[186px] h-auto bg-[#3E4452] flex flex-col items-center justify-center" 
                statValue="98%"
                statLabel="RETENTION RATE"
            />

            <StatCard 
                className="w-full max-w-[276px] min-h-[186px] h-auto bg-[#3E4452] flex flex-col items-center justify-center" 
                statValue="35yr"
                statLabel="INDUSTRY LEGACY"
            />
        </div>
    )
}