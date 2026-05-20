import HomeMobileAboutProfileCards from "@/components/layout/main/home/about/HomeMobileAboutProfileCards"



export default function HomeMobileAboutSection() {
    return (
        <section className="w-full h-auto flex items-center justify-center bg-[#FFFFFF] px-[24px] py-[64px] lg:hidden">
            <div className="w-full h-auto flex flex-col items-center justify-center gap-[32px]">

                <div className="w-full h-auto gap-[7px]">
                    <h2 className="text-[36px] font-semibold text-[#131B2E]">Global Portfolio</h2>
                    <p className="text-[16px] font-normal text-[#434653]">A curated selection of our high-impact institutional projects.</p>
                </div>

                <HomeMobileAboutProfileCards />

            </div>
        </section>
    )
}