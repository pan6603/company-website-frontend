import Image from "next/image"



export default function MailIcon() {
    return (
        <div className="w-full max-w-[48px] min-h-[48px] h-auto bg-[#DAE2FF] rounded-xl flex items-center justify-center">
            <Image
                src="../../../icons/mail-icon.svg"
                alt="mail-icon"
                width={19}
                height={15}
            />
        </div>
    )
}