import ContactItem from "@/features/contact/form/ContactItem"
import MapPinIcon from "@/components/ui/icons/MapPinIcon"
import CallIcon from "@/components/ui/icons/CallIcon"
import MailIcon from "@/components/ui/icons/MailIcon"

const contactItems = [
  {
    title: "VISIT US",
    address: `1200 Avenue of the Americas
Floor 42, New York, NY 10036`,
    icon: <MapPinIcon />,
    minHeight: "min-h-[66px]",
  },
  {
    title: "CALL US",
    phone: "+1 (212) 555-0198",
    icon: <CallIcon />,
    minHeight: "min-h-[48px]",
  },
  {
    title: "EMAIL US",
    email: "contact@corporate-excellence.com",
    icon: <MailIcon />,
    minHeight: "min-h-[48px]",
  },
]


export default function ContactItems() {
    return (
        <div className="w-full max-w-[469px] min-h-[226px] h-auto flex flex-col justify-between">
            {contactItems.map((item) => (
                <ContactItem
                    key={item.title}
                    className={`w-full max-w-[469px] ${item.minHeight} h-auto flex items-start gap-2`}
                    {...item}
                />
            ))}
        
        </div>
    )
}