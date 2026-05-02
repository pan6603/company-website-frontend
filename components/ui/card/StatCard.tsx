

type StatCardProps = {
    className?: string;
    statValue?: string;
    statLabel?: string;
}


export default function StatCard({ className, statValue, statLabel }: StatCardProps) {
    return (
        <div className={className}>
            <span className="text-[56px] font-extrabold text-[#DAE2FF]">{statValue}</span>
            <p className="text-[12px] font-semibold text-white">{statLabel}</p>
        </div>
    )
} 