import Image from "next/image"



export default function CallIcon() {
    return (
        <div className="w-full max-w-[48px] min-h-[48px] h-auto bg-[#DAE2FF] rounded-xl flex items-center justify-center">
            <Image
                src="../../../icons/call-icon.svg"
                alt="call-icon"
                width={17}
                height={17}
            />
        </div>
    )
}