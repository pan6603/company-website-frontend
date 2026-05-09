import PrimaryButton from "@/components/ui/button/PrimaryButton"
import SecondaryButton from "@/components/ui/button/SecondaryButton"

const BUTTONS = [
  {
    Component: PrimaryButton,
    text: "Request a Consultation",
    className:
      "w-full max-w-[211px] min-h-[56px] h-auto bg-[#FFFFFF] text-[14px] font-bold text-[#00327D] rounded-lg",
  },
  {
    Component: SecondaryButton,
    text: "View Case Studies",
    className:
      "w-full max-w-[211px] min-h-[56px] h-auto border border-[#FFFFFF] text-[14px] font-bold text-white rounded-lg",
  },
];


export default function ServicesCTAButtons() {
    return (
        <div className="w-full max-w-[672px] min-h-[56px] h-auto flex items-center gap-[24px]">
            {BUTTONS.map(({ Component, text, className }) => (
                <Component
                    key={text}
                    className={className}
                    text={text}
                />
            ))}
        </div>
    )
}