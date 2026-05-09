import ServicesCTAButtons from "@/features/service/cta/ServicesCTAButtons";



export default function ServicesCTAContent() {
    return (
        <div className="w-full max-w-[672px] min-h-[267px] h-auto flex flex-col justify-between">
            <h2 className="text-[48px] font-bold text-white leading-[1.2]">
                Ready to Elevate Your Global <br />
                Presence?
            </h2>

            <p className="text-[16px] font-normal text-white">
                Partner with our specialists to develop a bespoke strategy that aligns with your <br />
                institutional goals and market demands.
            </p>

            <ServicesCTAButtons />
        </div>
    )
}