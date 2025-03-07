"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
})

type FormData = z.infer<typeof formSchema>

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedFields = formSchema.safeParse(formData)

    if (!validatedFields.success) {
      return {
        success: false,
        error: "Données de formulaire invalides. Veuillez vérifier vos entrées.",
      }
    }

    const { name, email, subject, message } = validatedFields.data

    // Create email transporter with IONOS SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.ionos.fr",
      port: Number.parseInt(process.env.EMAIL_PORT || "465"),
      secure: true, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAILTO,
      subject: `Nouveau message: ${subject}`,
      text: `
Nom: ${name}
Email: ${email}
Sujet: ${subject}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">Nouveau message de contact</h2>
  <p><strong>Nom:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Sujet:</strong> ${subject}</p>
  <div style="margin-top: 20px;">
    <p><strong>Message:</strong></p>
    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
      ${message.replace(/\n/g, "<br>")}
    </div>
  </div>
</div>
      `,
      replyTo: email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return {
      success: true,
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: "Échec de l'envoi de l'email. Veuillez réessayer plus tard.",
    }
  }
}

