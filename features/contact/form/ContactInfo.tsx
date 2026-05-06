import ContactItems from "@/features/contact/form/ContactItems"
import InfoCard from "@/features/contact/form/InfoCard"

export default function ContactInfo() {
    return (
        <div className="w-full max-w-[469px] min-h-[576px] h-auto flex flex-col justify-between">
            <h3 className="font-semibold text-[24px] text-[#131B2E]">Corporate Headquarters</h3>
            <ContactItems />
            <InfoCard />
        </div>
    )
}