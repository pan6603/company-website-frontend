import TrailingIcon from "@/components/ui/icons/TrailingIcon";

interface ContactSubmitButtonProps {
  disabled?: boolean;
}

export default function ContactSubmitButton({ disabled = false }: ContactSubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="
        w-full max-w-[600px] min-h-[52px] h-auto
        bg-[#00327D] rounded
        font-semibold text-sm text-white
        flex items-center justify-center gap-2
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-opacity duration-200
      "
    >
      {disabled ? "전송 중..." : "Send Message"}
      <TrailingIcon
        className="w-full max-w-[14px] min-h-[20px] h-auto flex items-center justify-center"
        imageSrc="../../../icons/trailing-icon.svg"
        width={10}
        height={9}
      />
    </button>
  );
}