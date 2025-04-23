import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EmailRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request): Promise<Response> {
  const { name, email, message }: EmailRequestBody = await req.json();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL as string,
      pass: process.env.EMAIL_PASSWORD as string,
    },
  });

  try {
    // Email to yourself
    await transporter.sendMail({
      from: process.env.EMAIL as string,
      to: process.env.EMAIL as string,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL as string,
      to: email,
      subject: "Thank you for your message",
      text: `Hello ${name},\n\nThank you for reaching out! We have received your message and will get back to you as soon as possible.\n\nBest regards,\nSamir Pandey`,
    });

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error sending emails" },
      { status: 500 },
    );
  }
}
