import ContactDeskTopForm from "@/components/layout/main/contact/form/ContactDeskTopForm"
import ContactMoblieForm from "@/components/layout/main/contact/form/ContactMoblieForm"
import ContactMoblieInfoCards from "../../../components/layout/main/contact/form/ContactMoblieInfoCards"

export default function ContactFormSection() {
    return (
        <>
            <ContactDeskTopForm />
            <ContactMoblieForm />
            <ContactMoblieInfoCards />
        </>
    )
}