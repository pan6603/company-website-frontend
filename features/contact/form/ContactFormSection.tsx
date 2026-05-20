import ContactDeskTopForm from "@/components/layout/main/contact/form/ContactDeskTopForm";
import ContactMobileForm from "@/components/layout/main/contact/form/ContactMobileForm";
import ContactMobileInfoCards from "@/components/layout/main/contact/form/ContactMobileInfoCards";

export default function ContactFormSection() {
  return (
    <>
      <ContactDeskTopForm />
      <ContactMobileForm />
      <ContactMobileInfoCards />
    </>
  );
}
