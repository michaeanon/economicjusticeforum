import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Send email to admin (you)
    const adminEmail = await resend.emails.send({
      from: "EJF Contact Form <onboarding@resend.dev>",
      to: "cmwambingu@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1a5276 0%, #27ae60 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Economic Justice Forum</h1>
            <p style="color: white; margin: 10px 0 0 0;">New Contact Form Submission</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #2c3e50; margin-top: 0;">Contact Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            </div>
            
            <h3 style="color: #2c3e50;">Message:</h3>
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="background: #2c3e50; padding: 20px; text-align: center; color: white;">
            <p style="margin: 0; font-size: 14px;">Economic Justice Forum - Building a Fair Future</p>
          </div>
        </div>
      `,
    })

    // Send auto-reply to user
    const userEmail = await resend.emails.send({
      from: "Economic Justice Forum <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for contacting Economic Justice Forum",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1a5276 0%, #27ae60 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Economic Justice Forum</h1>
            <p style="color: white; margin: 10px 0 0 0;">Building a Fair Future</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #2c3e50; margin-top: 0;">Thank You, ${name}!</h2>
            
            <p style="color: #555; line-height: 1.6;">
              We have received your message and appreciate you reaching out to the Economic Justice Forum.
            </p>
            
            <p style="color: #555; line-height: 1.6;">
              Our team will review your message and get back to you as soon as possible. We typically respond within 24-48 hours.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2c3e50; margin-top: 0;">Your Message:</h3>
              <p style="margin: 0; color: #555; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="color: #555; line-height: 1.6;">
              In the meantime, feel free to explore our website to learn more about our work in promoting economic justice in Kenya.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://economicjusticeforum.org" style="background: linear-gradient(135deg, #1a5276 0%, #27ae60 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Visit Our Website
              </a>
            </div>
          </div>
          
          <div style="background: #2c3e50; padding: 20px; text-align: center; color: white;">
            <p style="margin: 0 0 10px 0; font-size: 14px;">Contact Us</p>
            <p style="margin: 0; font-size: 14px;">
              Email: cmwambingu@gmail.com | Phone: +254 728 355 531
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
        adminEmailId: adminEmail.data?.id,
        userEmailId: userEmail.data?.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
