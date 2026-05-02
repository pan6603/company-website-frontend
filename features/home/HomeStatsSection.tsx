import StatCard from "@/components/ui/card/StatCard"
import VerifiedIcon from "@/components/ui/icons/VerifiedIcon"


export default function HomeStatusSection() {
    return (
        <section className="w-full max-w-[1440px] min-h-[699px] h-auto bg-[#283044] flex items-center justify-center">
            <div className="w-full max-w-[1216px] min-h-[459px] h-auto flex items-center justify-between">

                {/* Stability Section. */}
                <div className="w-full max-w-[568px] min-h-[459px] h-auto flex flex-col justify-between">
                    <span className="text-[12px] font-semibold text-[#DAE2FF]">INSTITUTIONAL STABILITY</span>

                    <h2 className="text-[36px] font-semibold text-white">
                        Performance backed by decades <br />
                        of proven results.
                    </h2>

                    <p className="text-[18px] font-normal text-[#C3C6D5]">
                        We don&apos;t just advise; we partner with you to ensure sustainable <br />
                        growth. Our track record spans four continents and multiple <br />
                        economic cycles, proving our resilience and adaptability.
                    </p>

                    <div className="w-full max-w-[568px] min-h-[189px] h-auto flex flex-col justify-end gap-[24px]">

                        <div className="w-full max-w-[568px] min-h-[58px] h-auto flex gap-[16px]">
                            <VerifiedIcon 
                                className="w-full max-w-[40px] min-h-[24px] h-auto" 
                                imageSrc="../../icons/verified-icon.svg"
                                width={24}
                                height={28}
                            />

                            <div className="w-full max-w-[440px] min-h-[58px] h-auto">
                                <h4 className="text-[20px] font-normal text-white">Global Presence</h4>
                                <span className="text-[16px] font-normal text-[#C3C6D5]">24 strategic offices in key financial hubs across the globe.</span>
                            </div>
                        </div>

                        <div className="w-full max-w-[568px] min-h-[82px] h-auto flex gap-[16px]">
                            <VerifiedIcon 
                                className="w-full max-w-[40px] min-h-[24px] h-auto" 
                                imageSrc="../../icons/verified-icon.svg"
                                width={24}
                                height={28}
                            />

                            <div className="w-full max-w-[527px] min-h-[82px] h-auto">
                                <h4 className="text-[20px] font-normal text-white">Asset Security</h4>
                                <p className="text-[16px] font-normal text-[#C3C6D5]">
                                    Advanced multi-layered security protocols for all sensitive <br />
                                    operations.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>


                {/* Stats Section */}
                <div className="w-full max-w-[568px] min-h-[436px] h-auto grid grid-cols-2 gap-4">
                    <StatCard 
                        className="w-full max-w-[276px] min-h-[234px] h-auto bg-[#3E4452] flex flex-col items-center justify-center" 
                        statValue="$4.2B"
                        statLabel="ASSETS UNDER ADVISORY"
                    />

                    <StatCard 
                        className="w-full max-w-[276px] min-h-[234px] h-auto bg-[#3E4452] flex flex-col items-center justify-center"
                        statValue="150+"
                        statLabel="GLOBAL PARTNERS"
                    />

                    <StatCard 
                        className="w-full max-w-[276px] min-h-[186px] h-auto bg-[#3E4452] flex flex-col items-center justify-center" 
                        statValue="98%"
                        statLabel="RETENTION RATE"
                    />

                    <StatCard 
                        className="w-full max-w-[276px] min-h-[186px] h-auto bg-[#3E4452] flex flex-col items-center justify-center" 
                        statValue="35yr"
                        statLabel="INDUSTRY LEGACY"
                    />
                </div>

            </div>
        </section>
    )
}