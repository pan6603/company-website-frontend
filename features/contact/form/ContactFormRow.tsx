import ContactInputField from "@/components/layout/main/contact/input/ContactInputField";

type ContactFormRowProps = {
  nameValue?: string;
  emailValue?: string;
  onNameChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const fieldWrapperClass =
  "w-full max-w-[284px] min-h-[69px] h-auto flex flex-col justify-between";

export default function ContactFormRow({
  nameValue,
  emailValue,
  onNameChange,
  onEmailChange,
}: ContactFormRowProps) {
  return (
    <div className="w-full max-w-[600px] min-h-[70px] h-auto flex items-center justify-between">
      <ContactInputField
        className={fieldWrapperClass}
        label="FULL NAME"
        type="text"
        placeholder="John Doe"
        name="name"
        value={nameValue}
        onChange={onNameChange}
      />
      <ContactInputField
        className={fieldWrapperClass}
        label="EMAIL ADDRESS"
        type="email"
        placeholder="j.doe@corporate.com"
        name="email"
        value={emailValue}
        onChange={onEmailChange}
      />
    </div>
  );
}
