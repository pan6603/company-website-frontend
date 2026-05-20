import Image from "next/image"

export default function AboutMobileHeroSection() {
    return (
        <section className="
            w-full
            min-h-[653px] 
            h-auto 
            bg-[#FFFFFF] 
            px-[24px]
            py-[48px]
            flex
            items-center
            justify-center
            lg:hidden
        ">
            <div className="w-full min-h-[557px] h-auto flex flex-col gap-[15px]">
                <span className="text-[14px] font-semibold text-[#00327D]">About Our Institution</span>

                <h1 className="text-[32px] font-normal text-[#131B2E]">
                    Architecting the future of corporate leadership
                </h1>

                <p className="text-[16px] font-normal text-[#434653]">
                    We provide the strategic framework and
                    institutional stability required for global
                    organizations to navigate complex market
                    transitions with absolute precision.
                </p>

                <div className="w-full min-h-[272px] h-auto">
                    <Image
                        src="../../../../../images/about/about-mobile-hero-image.svg"
                        alt="about-mobile-hero-image"
                        width={342}
                        height={256}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    )
}