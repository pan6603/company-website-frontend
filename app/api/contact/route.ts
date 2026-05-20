import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "모든 항목을 입력해주세요." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Contact Form <limchaeseong.com>",
      //from: "Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: subject ? `새 문의: ${subject}` : `새 문의가 도착했습니다: ${name}`,
      replyTo: email,
      text: `이름: ${name}\n이메일: ${email}\n제목: ${subject || "(없음)"}\n\n문의 내용:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ message: "메일 전송 실패" }, { status: 500 });
    }

    return NextResponse.json({ message: "문의가 전송되었습니다.", data });
  } catch {
    return NextResponse.json(
      { message: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
