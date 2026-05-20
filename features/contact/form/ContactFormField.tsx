import Input from "@/components/ui/input/Input";

type ContactFormFieldProps = {
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const inputStyle =
  "w-full max-w-[600px] min-h-[49px] h-auto bg-[#FFFFFF] p-4 border border-[#C3C6D5] rounded-lg text-[16px] text-[#6B7280]";

export default function ContactFormField({ name, value, onChange }: ContactFormFieldProps) {
  return (
    <div className="w-full max-w-[600px] min-h-[69px] h-auto flex flex-col justify-between">
      <label className="font-semibold text-xs text-[#434653]">SUBJECT</label>
      <Input
        type="text"
        placeholder="Consultation Inquiry"
        className={inputStyle}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
