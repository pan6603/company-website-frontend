import Link from "next/link"



export default function HomePageBottomFooter() {
    return (
        <div className="w-full max-w-[1280px] min-h-[65px] h-auto flex flex-col items-center justify-center">
            <span className="text-[12px] font-normal text-slate-500">© 2024 Corporate Excellence. All rights reserved.</span>

            <div className="w-full max-w-[316px] min-h-[16px] h-auto flex items-center justify-between">
                <Link href="#" className="text-[12px] font-normal text-slate-500">Privacy Policy</Link>
                <Link href="#" className="text-[12px] font-normal text-slate-500">Terms of Service</Link>
                <Link href="#" className="text-[12px] font-normal text-slate-500">Cookie Policy</Link>
            </div>
        </div>
    )
}