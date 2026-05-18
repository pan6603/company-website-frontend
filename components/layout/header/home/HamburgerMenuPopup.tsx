"use client";

import Link from "next/link";
import CloseIcon from "@/components/ui/icons/CloseIcon";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
};

type HamburgerMenuPopupProps = {
  navItems: NavItem[];
  onClose: () => void;
};

export default function HamburgerMenuPopup({
  navItems,
  onClose,
}: HamburgerMenuPopupProps) {

    const pathname = usePathname();

    return (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
            <div className="flex items-center justify-between h-[65px] px-4 border-b">
                <h2 className="text-[18px] font-extrabold text-[#0F172A]">
                  Corporate Excellence
                </h2>

                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close navigation menu"
                    className="w-[40px] h-[40px] flex items-center justify-center text-[24px]"
                >
                    <CloseIcon 
                        className="w-full max-w-[40px] min-h-[48px] flex items-center justify-center" 
                        imageSrc="../../../../icons/close-icon.svg"
                        width={24}
                        height={28}
                    />
                </button>
            </div>

            <nav className="flex flex-col px-4 py-6 gap-5">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className={`w-full min-h-[32px] h-auto text-[18px] px-[16px] font-semibold flex items-center ${
                            isActive
                            ? "text-[#1D4ED8] border-l-3 border-l-[#1D4ED8]"
                            : "text-slate-700 border-transparent"
                        }`}
                        >
                        {item.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="px-4 mt-4">
                <Link
                href="/contact"
                onClick={onClose}
                className="w-full h-[48px] bg-[#00327D] text-white rounded flex items-center justify-center font-semibold"
                >
                Get Started
                </Link>
            </div>
        </div>
  );
}