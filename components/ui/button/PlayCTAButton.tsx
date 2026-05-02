import PlayIcon from "@/components/ui/icons/PlayIcon"


type PlayCTAButtonProps = {
    className?: string;
    text?: string;
}


export default function PlayCTAButton({ className, text }: PlayCTAButtonProps) {
    return (
        <button className={className}>
            <PlayIcon 
                className="w-full max-w-[48px] min-h-[48px] h-auto flex items-center justify-center rounded-xl border border-[#00327D]" 
                imageSrc="../../../icons/play-icon.svg"
                width={10}
                height={13}
            />
            {text}
        </button>
    )
}