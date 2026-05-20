import Link from "next/link"



export default function HomeMobileCTAButton() {
    return (
        <Link 
            href="#" 
            className="w-full max-w-[160px] min-h-[55px] h-auto bg-[#00327D] rounded font-bold text-[14px] text-white flex items-center justify-center lg:hidden">
            Get Started
        </Link>
    )
}