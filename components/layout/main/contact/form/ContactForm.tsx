"use client";

import ContactFormRow from "@/features/contact/form/ContactFormRow";
import ContactFormField from "@/features/contact/form/ContactFormField";
import ContactTextareaField from "@/components/layout/main/contact/textarea/ContactTextareaField";
import ContactSubmitButton from "@/features/contact/form/ContactSubmitButton";
import { useContactForm } from "@/components/layout/main/contact/form/useContactForm";

export default function ContactForm() {
  const {
    formData,
    status,
    errorMessage,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div
      className="
        w-full max-w-[682px] min-h-[576px] h-auto
        bg-white border border-[#C3C6D5] rounded-lg
        flex items-center justify-center
      "
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[600px] min-h-[478px] h-auto flex flex-col justify-between"
      >
        <ContactFormRow
          nameValue={formData.name}
          emailValue={formData.email}
          onNameChange={handleChange}
          onEmailChange={handleChange}
        />
        <ContactFormField
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <ContactTextareaField
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        {status === "success" && (
          <div className="w-full p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="font-semibold text-sm text-green-700">✓ 문의가 전송되었습니다.</p>
            <p className="text-xs text-green-600 mt-1">빠른 시일 내에 회신 드리겠습니다.</p>
          </div>
        )}
        {status === "error" && (
          <div className="w-full p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="font-semibold text-sm text-red-700">✕ {errorMessage}</p>
          </div>
        )}

        <ContactSubmitButton disabled={isSubmitting} />
      </form>
    </div>
  );
}