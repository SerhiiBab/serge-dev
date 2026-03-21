import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: "sergebabych@gmail.com",
      subject: subject,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `
    });

    res.status(200).json({ message: "Email sent" });

  } catch (error) {
    res.status(500).json({ message: "Error sending email" });
  }
}