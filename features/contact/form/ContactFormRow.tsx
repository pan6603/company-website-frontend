import ContactInputField from "@/components/layout/main/contact/input/ContactInputField"

const fields = [
  {
    label: "FULL NAME",
    type: "text",
    placeholder: "John Doe",
  },
  {
    label: "EMAIL ADDRESS",
    type: "email",
    placeholder: "j.doe@corporate.com",
  },
]


export default function ContactFormRow() {
    return (
        <div className="w-full max-w-[600px] min-h-[70px] h-auto flex items-center justify-between">
            
            {fields.map((field) => (
                <ContactInputField 
                    key={field.label}
                    className="w-full max-w-[284px] min-h-[69px] h-auto flex flex-col justify-between"
                    {...field}
                />
            ))}
         
        </div>
    )
}