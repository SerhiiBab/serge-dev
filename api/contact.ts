import { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "sergebabych@gmail.com",
      subject: `Portfolio Nachricht: ${subject}`,
      text: `
Name: ${name}
Email: ${email}

Nachricht:
${message}
`
    });

    res.status(200).json({ success: true });

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "Error sending email" });

  }
}