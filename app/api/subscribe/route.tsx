import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error: "Email service not configured.",
        },
        { status: 500 },
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { email, password } = await request.json()

    // Note: To send welcome emails to subscribers, you need to verify your domain at resend.com/domains
    const adminEmail = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "economicsjusticeforums@gmail.com",
      subject: "New Subscription to Economic Justice Forum",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1a5276 0%, #16a085 50%, #27ae60 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Member Subscription</h1>
              </div>
              <div class="content">
                <p><strong>New subscriber email:</strong></p>
                <p style="padding: 15px; background: white; border-radius: 5px; font-size: 18px;">${email}</p>
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
          error: "Failed to process subscription",
          details: adminEmail.error.message,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Subscription successful! Thank you for joining us.",
      emailId: adminEmail.data?.id,
    })
  } catch (error: any) {
    console.error("[v0] Subscription error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process subscription",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
