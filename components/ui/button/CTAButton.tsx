
type CTAButtonProps = {
    className?: string;
    text?: string;
}


export default function CTAButton({ className, text }: CTAButtonProps) {
    return (
        <button className={className}>{text}</button>
    )
}