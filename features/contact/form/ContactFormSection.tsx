import ContactForm from "@/features/contact/form/ContactForm";
import ContactInfo from "@/features/contact/form/ContactInfo";


export default function ContactFormSection() {
    return (
        <section className="w-full max-w-[1440px] min-h-[816px] h-auto bg-[#FFFFFF] flex items-center justify-center">
            <div className="w-full max-w-[1216px] min-h-[576px] h-auto flex items-center justify-between">
                <ContactForm />
                <ContactInfo />
            </div>
        </section>
    )
}