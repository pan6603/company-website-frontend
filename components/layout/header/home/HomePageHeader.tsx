"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";


export default function HomePageHeader() {
    const pathname = usePathname();

    return (
        <header className="w-full max-w-[1440px] min-h-[81px] h-auto bg-[#FFFFFF] flex items-center justify-center">
            <div className="w-full max-w-[1280px] min-h-[80px] h-auto px-8 flex items-center justify-between">
                <h1 className="text-[20px] font-extrabold text-[#0F172A]">Corporate Excellence</h1>

                {/* Navbar */}
                <nav className="w-full max-w-[434px] min-h-[26px] h-auto flex items-center justify-between">
                    <Link 
                        href="/" 
                        className={pathname === "/" ? "text-[14px] font-medium text-[#1D4ED8] border-b-2 border-[#1D4ED8]" : "text-[14px] font-medium text-slate-600"}>Home</Link>

                    <Link href="/about" className="text-[14px] font-medium text-slate-600">About</Link>
                    <Link href="/services" className="text-[14px] font-medium text-slate-600">Services</Link>
                    <Link href="/contact" className="text-[14px] font-medium text-slate-600">Contact</Link>
                </nav>

                {/* CTA 버튼 */}
                <button className="w-full max-w-[128px] min-h-[38px] h-auto bg-[#00327D] text-[#FFFFFF] text-[14px] font-semibold rounded">Get Started</button>
            </div>
        </header>
    )
}