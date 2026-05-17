



export default function ContactDeskTopHeroSection() {
    return (
        <section 
            className="
                hidden
                lg:flex
                w-full
                max-w-[1440px]
                min-h-[464px]
                h-auto
                bg-[#F2F3FF]
                p-[120px]
            ">
            <div className="w-full max-w-[768px] min-h-[224px] h-auto flex flex-col justify-between">
                <span className="font-semibold text-[12px] text-[#00327D]">Get In Touch</span>

                <h1 className="font-bold text-[48px] text-[#131B2E] leading-[1.2]">
                    Let&apos;s discuss your next <br />
                    breakthrough project.
                </h1>

                <p className="font-normal text-[18px] text-[#505F76]">
                    Our team of experts is ready to provide the institutional stability and innovative solutions <br />
                    your corporation requires for global expansion.
                </p>
            </div>
        </section>
    )
}