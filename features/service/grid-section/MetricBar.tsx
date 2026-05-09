import ProgressBar from "@/components/ui/indicators/ProgressBar"

type MetricBarProps = {
    progress?: number;
}

export default function MetricBar({ progress = 80 }: MetricBarProps) {
    return (
        <div className="w-full max-w-[304px] min-h-[32px] h-auto flex flex-col justify-between">
            <ProgressBar 
                className="relative w-full max-w-[304px] min-h-[4px] h-auto bg-[#3C5A93] rounded-lg" 
                progress={progress}
            />
            <span className="text-[12px] text-white font-bold">Efficiency Metric: {progress}%</span>
        </div>
    )
}