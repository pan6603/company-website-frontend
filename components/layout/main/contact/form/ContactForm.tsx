import ContactFormRow from "@/features/contact/form/ContactFormRow";
import ContactFormField from "@/features/contact/form/ContactFormField";
import ContactTextareaField from "@/components/layout/main/contact/textarea/ContactTextareaField";
import ContactSubmitButton from "@/features/contact/form/ContactSubmitButton";


export default function ContactForm() {
    return (
        <div 
            className="
                w-full
                max-w-[682px]
                min-h-[576px]
                h-auto
                bg-[#FFFFFF]
                border
                border-[#C3C6D5]
                rounded-lg
                flex
                items-center
                justify-center
            ">
            <form className="w-full max-w-[600px] min-h-[478px] h-auto flex flex-col justify-between">
                <ContactFormRow />
                <ContactFormField />
                <ContactTextareaField />
                <ContactSubmitButton />
            </form>
        </div>
    )
}