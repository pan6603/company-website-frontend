

type PrimaryButtonProps = {
    className?: string;
    text?: string;
}


export default function PrimaryButton({ className, text }: PrimaryButtonProps) {
    return (
        <button className={className}>
            {text}
        </button>
    )
}