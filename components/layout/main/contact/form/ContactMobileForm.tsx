"use client";

import { useContactForm } from "@/components/layout/main/contact/form/useContactForm";
import ContactMobileInputField from "@/components/layout/main/contact/input/ContactMobileInputField";
import ContactMobileTextareaField from "@/components/layout/main/contact/textarea/ContactMobileTextareaField";

const fieldWrapperClassName =
  "w-full min-h-[69px] h-auto flex flex-col justify-between";

const inputClassName =
  "w-full min-h-[50px] h-auto bg-[#FAF8FF] border border-[#C3C6D5] text-[#6B7280] text-[16px] px-[16px]";

export default function ContactMobileForm() {
  const { formData, status, errorMessage, isSubmitting, handleChange, handleSubmit } =
    useContactForm();

  return (
    <section
      className="
        w-full
        min-h-[560px]
        h-auto
        bg-[#F2F3FF]
        p-[24px]
        lg:hidden
      "
    >
      <div className="w-full min-h-[494px] h-auto bg-[#FFFFFF] border border-[#C3C6D5] rounded-lg p-[24px]">
        <form
          onSubmit={handleSubmit}
          className="w-full min-h-[494px] h-auto flex flex-col justify-between"
        >
          <ContactMobileInputField
            className={fieldWrapperClassName}
            label="Full Name"
            inputClassName={inputClassName}
            placeholder="John Doe"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <ContactMobileInputField
            className={fieldWrapperClassName}
            label="Email"
            inputClassName={inputClassName}
            placeholder="example@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <ContactMobileInputField
            className={fieldWrapperClassName}
            label="Subject"
            inputClassName={inputClassName}
            placeholder="Subject of your message"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <ContactMobileTextareaField
            className="w-full min-h-[140px] h-auto flex flex-col justify-between"
            label="Message"
            textareaClassName="w-full min-h-[122px] h-auto bg-[#FAF8FF] border border-[#C3C6D5] text-[#6B7280] text-[16px] p-4 resize-none"
            placeholder="How can our excellence serve your goals?"
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full min-h-[46px] h-auto bg-[#00327D] rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-200"
          >
            <span className="font-bold text-[14px] text-[#FFFFFF]">
              {isSubmitting ? "전송 중..." : "Send Message"}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}