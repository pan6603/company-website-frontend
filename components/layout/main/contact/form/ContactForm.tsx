"use client";

import { useState } from "react";
import ContactFormRow from "@/features/contact/form/ContactFormRow";
import ContactFormField from "@/features/contact/form/ContactFormField";
import ContactTextareaField from "@/components/layout/main/contact/textarea/ContactTextareaField";
import ContactSubmitButton from "@/features/contact/form/ContactSubmitButton";

export default function ContactForm() {
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "메일 전송 실패");
        return;
      }

      alert("문의가 전송되었습니다.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return (
    <div
      className="
        w-full
        max-w-[682px]
        min-h-[576px]
        h-auto
        bg-[#FFFFFF]
        border
        border-[#C3C6D5]
        rounded-lg
        flex
        items-center
        justify-center
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
        <ContactSubmitButton />
      </form>
    </div>
  );
}
