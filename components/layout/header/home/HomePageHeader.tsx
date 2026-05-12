"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import HamburgerButton from "@/components/layout/header/home/HamburgerButton";
import CTAButton from "@/components/ui/button/CTAButton";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];


export default function HomePageHeader() {
    const pathname = usePathname();

    return (
        <header className="w-full h-[65px] lg:h-[81px] bg-[#FFFFFF] flex items-center justify-center">
            <div className="w-full max-w-[1280px] h-full px-4 lg:px-8 flex items-center justify-between">
                <h1 className="text-[18px] lg:text-[20px] font-extrabold text-[#0F172A]">Corporate Excellence</h1>

                {/* Navbar */}
                <nav className="hidden lg:flex w-full max-w-[434px] min-h-[26px] h-auto items-center justify-between">
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
            
                <CTAButton 
                    className="hidden lg:block w-full max-w-[128px] min-h-[38px] h-auto bg-[#00327D] text-[#FFFFFF] text-[14px] font-semibold rounded" 
                    text="Get Started"
                />
                
                <HamburgerButton />                
            </div>
        </header>
    )
}