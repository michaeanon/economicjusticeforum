import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
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

    // Note: To send auto-reply emails to users, you need to verify your domain at resend.com/domains
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

    if (adminEmail.error) {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send email",
          details: adminEmail.error.message || "Unknown error from Resend",
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! We'll get back to you soon.",
      emailId: adminEmail.data?.id,
    })
  } catch (error: any) {
    console.error("[v0] Contact form error:", error)

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
