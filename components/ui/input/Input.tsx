type InputProps = {
  type: string;
  className?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ type, className, placeholder, name, value, onChange }: InputProps) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder || ""}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
