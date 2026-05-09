"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];


export default function HomePageHeader() {
    const pathname = usePathname();

    return (
        <header className="w-full min-h-[81px] h-auto bg-[#FFFFFF] flex items-center justify-center">
            <div className="w-full max-w-[1280px] mx-auto min-h-[80px] h-auto px-8 flex items-center justify-between">
                <h1 className="text-[20px] font-extrabold text-[#0F172A]">Corporate Excellence</h1>

                {/* Navbar */}
                <nav className="w-full max-w-[434px] min-h-[26px] h-auto flex items-center justify-between">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link 
                                key={item.href} 
                                href={item.href} 
                                className={`border-b-2 text-[14px] font-medium transition-colors ${
                                    isActive ? "border-[#1D4ED8] text-[#1D4ED8]" : "border-transparent text-slate-600 hover:text-[#1D4ED8]"
                                }`}>
                                    {item.label}
                                </Link>
                        )
                    })}   
                </nav>

                {/* CTA 버튼 */}
                <button className="w-full max-w-[128px] min-h-[38px] h-auto bg-[#00327D] text-[#FFFFFF] text-[14px] font-semibold rounded">Get Started</button>
            </div>
        </header>
    )
}