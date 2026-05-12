import Link from "next/link";

const corporateLinks = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
];

const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
];

export default function HomePageMobileFooterContent() {
    return (
        <div className="mx-auto flex w-full max-w-[342px] flex-col px-[24px] py-[64px] lg:hidden">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-[16px]">
                    <h2 className="text-[18px] font-bold leading-none text-[#0F172A]">
                        Corporate Excellence
                    </h2>
                    <p className="w-full max-w-[342px] min-h-[16px] h-auto text-[11px] font-normal leading-5 text-[#64748B]">
                        Excellence in every interaction, stability in every decision.
                    </p>
                </div>

                <div className="w-full max-w-[342px] min-h-[95px] grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[10px] font-normal uppercase leading-none text-[#00327D]">
                            Corporate
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {corporateLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-[12px] font-normal leading-none text-[#64748B]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-[10px] font-normal uppercase leading-none text-[#00327D]">
                            Legal
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {legalLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-[12px] font-normal leading-none text-[#64748B]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[342px] min-h-[48px] mt-8 border-t border-[#E2E8F0] pt-8">
                <span className="text-[10px] font-normal leading-none text-[#64748B]">
                    © 2024 Corporate Excellence. All rights reserved.
                </span>
            </div>
        </div>
    );
}
