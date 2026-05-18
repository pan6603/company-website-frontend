import ContactItem from "@/features/contact/form/ContactItem"
import MapPinIcon from "@/components/ui/icons/MapPinIcon"
import CallIcon from "@/components/ui/icons/CallIcon"
import MailIcon from "@/components/ui/icons/MailIcon"


export default function ContactMoblieInfoCards() {
    return (
        <section 
            className="
                w-full
                min-h-[597px]
                h-auto
                bg-[#F2F3FF]
                p-[24px]
                flex 
                flex-col
                items-center 
                gap-[24px]
                lg:hidden
            ">

            <ContactItem
                title="VISIT US"
                address="1200 Avenue of the Americas Floor 42, New York, NY 10036"
                icon={<MapPinIcon />}
                className="w-full h-auto bg-[#EAEDFF] rounded-lg p-[16px] flex items-start gap-[24px]"
                phone="+1 (212) 555-0198"
                email="hq@excellence.corp"
            />


            <ContactItem
                title="CALL US"
                address="88 International Plaza Canary Wharf, Level 12 London E14 5AA"
                icon={<CallIcon />}
                className="w-full h-auto bg-[#EAEDFF] rounded-lg p-[16px] flex items-start gap-[24px]"
                phone="+1 (212) 555-0198"
                email="global@excellence.corp"
            />


            <ContactItem
                title="EMAIL US"
                address="88 International Plaza Canary Wharf, Level 12 London E14 5AA"
                icon={<MailIcon />}
                className="w-full h-auto bg-[#EAEDFF] rounded-lg p-[16px] flex items-start gap-[24px]"
                phone="+1 (212) 555-0198"
                email="contact@corporate-excellence.com"
            />

        </section>
    )
}