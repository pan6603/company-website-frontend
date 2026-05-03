import CTAButton from "@/components/ui/button/CTAButton"



export default function AboutContactCTASection() {
    return (
        <section className="w-full max-w-[1440px] min-h-[486px] bg-[#00327D] flex items-center justify-center">
            <div className="w-full max-w-[1280px] min-h-[247px] h-auto flex flex-col items-center justify-between">
                <h2 className="text-[30px] font-semibold text-white">Ready to elevate your institutional impact?</h2>

                <p className="text-[18px] font-normal text-white text-center">
                    Join the hundreds of organizations that have transformed their future with <br />
                    Corporate Excellence. Let&apos;s build something extraordinary together.
                </p>

                <div className="w-full max-w-[1216px] min-h-[79px] h-auto flex items-end justify-center">
                    <CTAButton 
                        className="w-full max-w-[269px] min-h-[46px] h-auto bg-[#FFFFFF] rounded flex items-center justify-center text-[14px] font-normal text-[#00327D]"
                        text="Contact Our Strategy Team"
                    />
                </div>
            </div>
        </section>
    )
}