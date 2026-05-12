import HamburgerIcon from "@/components/ui/icons/HamburgerIcon"


export default function HamburgerButton() {
    return (
        <div className="lg:hidden w-full max-w-[40px] min-h-[40px] h-auto flex items-center justify-center">
            <HamburgerIcon 
                className="w-full max-w-[24px] min-h-[28px] h-auto flex items-center justify-center" 
                imageSrc="../../../../icons/hamburger-icon.svg"
            />
        </div>
    )    
}