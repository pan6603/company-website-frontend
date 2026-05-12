import Link from "next/link"



export default function HomePageBottomFooter() {
    return (
        <div className="
            hidden
            w-full 
            lg:max-w-[1280px]
            lg:min-h-[65px]
            h-auto
            lg:flex
            lg:flex-col
            lg:items-center
            lg:justify-center
        ">
            <span className="text-[12px] font-normal text-slate-500">© 2024 Corporate Excellence. All rights reserved.</span>

            <div className="hidden lg:flex w-full max-w-[316px] min-h-[16px] h-auto items-center justify-between">
                <Link href="#" className="text-[12px] font-normal text-slate-500">Privacy Policy</Link>
                <Link href="#" className="text-[12px] font-normal text-slate-500">Terms of Service</Link>
                <Link href="#" className="text-[12px] font-normal text-slate-500">Cookie Policy</Link>
            </div>
        </div>
    )
}
