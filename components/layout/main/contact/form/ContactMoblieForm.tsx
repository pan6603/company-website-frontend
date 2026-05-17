import ContactMoblieInputField from "@/components/layout/main/contact/input/ContactMoblieInputField";
import ContactMoblieTextareaField from "@/components/layout/main/contact/textarea/ContactMoblieTextareaField";


const inputFields = [
  {
    label: "Full Name",
    placeholder: "John Doe",
  },
  {
    label: "Email",
    placeholder: "example@example.com",
  },
  {
    label: "Subject",
    placeholder: "Subject of your message",
  },
];


const fieldWrapperClassName =
  "w-full min-h-[69px] h-auto flex flex-col justify-between";

const inputClassName =
  "w-full min-h-[50px] h-auto bg-[#FAF8FF] border border-[#C3C6D5] text-[#6B7280] text-[16px] px-[16px]";

export default function ContactMoblieForm() {
    return (
        <section 
            className="
                w-full
                min-h-[560px]
                h-auto
                bg-[#F2F3FF]
                p-[24px]
                lg:hidden
            ">
            <div className="w-full min-h-[494px] h-auto bg-[#FFFFFF] border border-[#C3C6D5] rounded-lg p-[24px]">
                <form className="w-full min-h-[494px] h-auto flex flex-col justify-between">
                    {inputFields.map((field) => (
                        <ContactMoblieInputField
                            key={field.label}
                            className={fieldWrapperClassName}
                            label={field.label}
                            inputClassName={inputClassName}
                            placeholder={field.placeholder}
                            />
                        ))}


                    <ContactMoblieTextareaField 
                        className="w-full min-h-[140px] h-auto flex flex-col justify-between"
                        label="Message"
                        textareaClassName="w-full min-h-[122px] h-auto bg-[#FAF8FF] border border-[#C3C6D5] text-[#6B7280] text-[16px] p-4 resize-none"
                        placeholder="How can our excellence serve your goals?"
                    />

                    
                    <button className="w-full min-h-[46px] h-auto bg-[#00327D] rounded-lg flex items-center justify-center">
                        <span className="font-bold text-[14px] text-[#FFFFFF]">Send Message</span>
                    </button>

                </form>
            </div>

        </section>
    )
}