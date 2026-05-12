import QuoteIcon from "@/components/ui/icons/QuoteIcon"
import Avatar from "@/components/ui/avatar/Avatar"

export default function HomeTestimonialSection() {
    return (
        <section className="
            hidden
            lg:flex 
            w-full 
            lg:max-w-[1440px]
            lg:min-h-[758px]
            lg:h-auto 
            lg:bg-[#F2F3FF] 
            lg:items-center 
            lg:justify-center
        ">
            <div className="w-full max-w-[896px] min-h-[518px] h-auto flex flex-col items-center justify-between">
                <QuoteIcon 
                    className="w-full max-w-[48px] min-h-[58px] h-auto flex items-center justify-center"  
                    imageSrc="../../icons/quote-icon.svg"
                    width={34}
                    height={24}
                />

                <p className="text-[31px] font-normal text-[#131B2E] text-center">
                    &quot;Corporate Excellence has been instrumental in our <br />
                    expansion into European markets. Their strategic <br />
                    oversight and risk assessment protocols allowed us to <br />
                    move with a level of confidence we hadn&apos;t experienced <br />
                    with previous partners.&quot;
                </p>


                <div className="w-full max-w-[832px] min-h-[146px] h-auto flex flex-col items-center justify-center gap-2">
                    <Avatar 
                        className="w-full max-w-[60px] min-h-[60px] h-auto bg-green-300"
                        imageSrc="../../images/avatars/avatar-1.svg"
                        width={60}
                        height={60}
                    />
                    
                    <div className="w-full max-w-[264px] min-h-[50px] h-auto flex flex-col items-center justify-between">
                        <span className="text-[24px] font-semibold text-[#131B2E]">Dr. Julian Vance</span>
                        <span className="text-[12px] font-semibold text-[#505F76]">CEO, Global Tech Infrastructure</span>
                    </div>
                </div>

            </div>
        </section>
    )
}