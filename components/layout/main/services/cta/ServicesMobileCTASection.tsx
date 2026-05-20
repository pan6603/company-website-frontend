import CTAButton from "@/components/ui/button/CTAButton"



export default function ServicesMobileCTASection() {
    return (
        <section 
            className="
                w-full 
                min-h-[417px]
                h-auto
                bg-[#00327D]
                flex
                items-center
                justify-center
                lg:hidden
            ">
                <div className="w-full min-h-[225px] h-auto flex flex-col items-center gap-[22px]">
                    <h2 className="text-[28px] font-semibold text-white">Digital Modernization</h2>

                    <p className="font-normal text-[16px] text-center text-[#DAE2FF]">
                        Transitioning legacy systems into agile,
                        cloud-first digital ecosystems designed
                        for the future.
                    </p>

                    <CTAButton 
                        className="w-full max-w-[341px] min-h-[46px] h-auto bg-white text-[#00327D] rounded-[8px] font-medium text-[16px] flex items-center justify-center"
                        text="Learn More"
                    />

                </div>
        </section>
    )
}