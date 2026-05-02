

type SecondaryButtonProps = {
    className?: string;
    text?: string;
}


export default function SecondaryButton({ className, text }: SecondaryButtonProps) {
    return (
        <button className={className}>
            {text}
        </button>
    )
} 