import StatCard from "@/components/ui/card/StatCard"

const STATS = [
  {
    statValue: "25+",
    statLabel: "Years Experience",
  },
  {
    statValue: "400+",
    statLabel: "Global Partners",
  },
  {
    statValue: "12B",
    statLabel: "Assets Managed",
  },
  {
    statValue: "15",
    statLabel: "Global Offices",
  },
]

export default function HomeMobileStatusSection() {
    return (
        <section className="
            w-full 
            h-auto
            bg-[#00327D]
            px-[24px]
            py-[48px]
            flex
            items-center
            justify-center
            lg:hidden
        ">
            <div className="w-full max-w-[332px] h-auto grid grid-cols-2 gap-4">
                {STATS.map((stat) => ( 
                    <StatCard 
                        key={stat.statLabel}
                        className="w-full max-w-[155px] min-h-[67px] h-auto flex flex-col items-center justify-between"
                        statValue={stat.statValue}
                        statLabel={stat.statLabel}
                    />
                ))}

            </div>
        </section>
    )
}