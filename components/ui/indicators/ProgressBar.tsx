

type ProgressBarProps = {
    className?: string;
    progress: number; // 0 to 100
}


export default function ProgressBar({ className, progress }: ProgressBarProps) {
    return (
        <div className={className}>
            <div style={{ width: `${progress}%` }} className="absolute top-0 left-0 h-full bg-[#FFFFFF]"></div>
        </div>
    )
}