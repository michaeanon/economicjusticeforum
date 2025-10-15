import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Contact API called")
    console.log("[v0] RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY)
    console.log("[v0] RESEND_API_KEY length:", process.env.RESEND_API_KEY?.length)

    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY is not set!")
      return NextResponse.json(
        {
          success: false,
          error: "Email service not configured. Please set RESEND_API_KEY environment variable.",
        },
        { status: 500 },
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { name, email, message } = await request.json()
    console.log("[v0] Contact form data:", { name, email, messageLength: message?.length })

    // Send notification to admin
    console.log("[v0] Sending admin notification email...")
    const adminEmail = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "economicsjusticeforums@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1a5276 0%, #16a085 50%, #27ae60 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #1a5276; }
              .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    console.log("[v0] Admin email response:", JSON.stringify(adminEmail, null, 2))

    if (adminEmail.error) {
      console.error("[v0] Resend API error:", adminEmail.error)
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send email",
          details: adminEmail.error.message || "Unknown error from Resend",
        },
        { status: 500 },
      )
    }

    // Send auto-reply to user
    console.log("[v0] Sending user confirmation email...")
    const userEmail = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Thank you for contacting Economic Justice Forum",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1a5276 0%, #16a085 50%, #27ae60 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Reaching Out!</h1>
              </div>
              <div class="content">
                <p>Dear ${name},</p>
                <p>Thank you for contacting the Economic Justice Forum. We have received your message and will get back to you as soon as possible.</p>
                <p>Your message:</p>
                <p style="padding: 15px; background: white; border-left: 4px solid #16a085; border-radius: 5px;">${message}</p>
                <p>We appreciate your interest in our work towards building a fair future.</p>
                <p>Best regards,<br><strong>Economic Justice Forum Team</strong></p>
              </div>
              <div class="footer">
                <p>Building a Fair Future</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    console.log("[v0] User email response:", JSON.stringify(userEmail, null, 2))

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
      adminEmailId: adminEmail.data?.id,
      userEmailId: userEmail.data?.id,
    })
  } catch (error: any) {
    console.error("[v0] Contact form error:", error)
    console.error("[v0] Error name:", error.name)
    console.error("[v0] Error message:", error.message)
    console.error("[v0] Error stack:", error.stack)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
        details: error.message || "Unknown error occurred",
      },
      { status: 500 },
    )
  }
}
