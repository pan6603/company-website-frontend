type TextareaProps = {
  className?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function Textarea({ className, placeholder, name, value, onChange }: TextareaProps) {
  return (
    <textarea
      className={className}
      placeholder={placeholder || ""}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
