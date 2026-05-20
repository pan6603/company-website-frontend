import { useState } from "react";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type FormData = typeof INITIAL_FORM_DATA;
type SubmitStatus = "idle" | "loading" | "success" | "error";

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message ?? "메일 전송 실패");
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      console.error(error);
      setErrorMessage("서버 오류가 발생했습니다.");
      setStatus("error");
    }
  };

  return {
    formData,
    status,
    errorMessage,
    isSubmitting: status === "loading",
    handleChange,
    handleSubmit,
  };
}