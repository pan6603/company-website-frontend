"use client";

import { useState } from "react";
import ContactMobileInputField from "@/components/layout/main/contact/input/ContactMobileInputField";
import ContactMobileTextareaField from "@/components/layout/main/contact/textarea/ContactMobileTextareaField";

const fieldWrapperClassName =
  "w-full min-h-[69px] h-auto flex flex-col justify-between";

const inputClassName =
  "w-full min-h-[50px] h-auto bg-[#FAF8FF] border border-[#C3C6D5] text-[#6B7280] text-[16px] px-[16px]";

export default function ContactMobileForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "메일 전송 실패");
        return;
      }

      alert("문의가 전송되었습니다.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("서버 오류가 발생했습니다.");
    }
  };

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

          <button
            type="submit"
            className="w-full min-h-[46px] h-auto bg-[#00327D] rounded-lg flex items-center justify-center"
          >
            <span className="font-bold text-[14px] text-[#FFFFFF]">
              Send Message
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}