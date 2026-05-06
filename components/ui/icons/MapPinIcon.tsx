import Image from "next/image"



export default function MapPinIcon() {
    return (
        <div className="w-full max-w-[48px] min-h-[48px] h-auto bg-[#DAE2FF] rounded-xl flex items-center justify-center">
            <Image
                src="../../../icons/map-pin-icon.svg"
                alt="map-pin-icon"
                width={15}
                height={19}
            />
        </div>
    )
}