import MapPinIcon from "@/components/ui/icons/MapPinIcon"

export default function ContactMoblieMapSection() {
    return (
        <section className="w-full min-h-[305px] h-auto  bg-[#F2F3FF] p-8 flex flex-col justify-between lg:hidden">
            <h3 className="font-bold text-[24px] text-[#131B2E]">Corporate Excellence HQ</h3>

            <div 
                className="
                    relative
                    w-full
                    min-h-[256px]
                    h-auto
                    bg-[url('/icons/building-moblie-icon.svg')]
                    bg-cover
                    bg-center
                    bg-no-repeat
                ">
                <div className="absolute flex items-center justify-center w-full h-full">
                    <MapPinIcon />
                </div>
            </div>
        </section>
    )
}