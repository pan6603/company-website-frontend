import HamburgerIcon from "@/components/ui/icons/HamburgerIcon"

type HamburgerButtonProps = {
    onClick: () => void
}

export default function HamburgerButton({ onClick }: HamburgerButtonProps) {
    return (
        <button 
            type="button"
            onClick={onClick}
            aria-label="Open navigation menu"
            className="
                lg:hidden 
                w-full
                max-w-[40px]
                min-h-[40px] 
                h-auto
                flex
                items-center
                justify-center
            ">
            <HamburgerIcon 
                className="w-full max-w-[24px] min-h-[28px] h-auto flex items-center justify-center" 
                imageSrc="../../../../icons/hamburger-icon.svg"
            />
        </button>
    )    
}