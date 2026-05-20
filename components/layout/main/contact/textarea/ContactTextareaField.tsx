import Textarea from "@/components/ui/textarea/Textarea";

type ContactTextareaFieldProps = {
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const textareaStyle =
  "w-full max-w-[600px] min-h-[190px] h-auto bg-[#FFFFFF] border border-[#C3C6D5] rounded-lg p-4 text-sm text-[#000000] resize-none";

export default function ContactTextareaField({ name, value, onChange }: ContactTextareaFieldProps) {
  return (
    <div className="w-full max-w-[600px] min-h-[190px] h-auto">
      <Textarea
        className={textareaStyle}
        placeholder="How can our excellence serve your goals?"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
