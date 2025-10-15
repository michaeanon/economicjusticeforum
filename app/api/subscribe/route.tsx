import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Subscribe API called")
    console.log("[v0] RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY)

    const { email, password } = await request.json()
    console.log("[v0] Subscribe data:", { email, hasPassword: !!password })

    // Send notification to admin
    console.log("[v0] Sending admin notification email...")
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
    console.log("[v0] Admin email result:", adminEmail)

    // Send welcome email to subscriber
    console.log("[v0] Sending welcome email...")
    const welcomeEmail = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Welcome to Economic Justice Forum!",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1a5276 0%, #16a085 50%, #27ae60 100%); color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; }
              .pillar { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #16a085; border-radius: 5px; }
              .footer { background: #1a5276; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Welcome to Economic Justice Forum!</h1>
                <p style="font-size: 18px; margin-top: 10px;">Building a Fair Future Together</p>
              </div>
              <div class="content">
                <p>Thank you for joining the Economic Justice Forum community!</p>
                <p>We are dedicated to promoting economic justice and equity across Africa. As a member, you'll receive updates on our initiatives, events, and opportunities to get involved.</p>
                
                <h2 style="color: #1a5276; margin-top: 30px;">Our Core Pillars:</h2>
                
                <div class="pillar">
                  <strong>Governance & Accountability</strong>
                  <p>Promoting transparent and accountable governance systems.</p>
                </div>
                
                <div class="pillar">
                  <strong>Natural Resources</strong>
                  <p>Ensuring fair management and distribution of natural resources.</p>
                </div>
                
                <div class="pillar">
                  <strong>Debt Justice</strong>
                  <p>Advocating for fair debt policies and financial sustainability.</p>
                </div>
                
                <div class="pillar">
                  <strong>Tax Justice</strong>
                  <p>Fighting for equitable tax systems and policies.</p>
                </div>
                
                <div class="pillar">
                  <strong>Land Rights</strong>
                  <p>Protecting community land rights and promoting fair land policies.</p>
                </div>
                
                <div class="pillar">
                  <strong>Climate Justice</strong>
                  <p>Addressing climate change impacts on vulnerable communities.</p>
                </div>
                
                <div class="pillar">
                  <strong>Youth & Women Empowerment</strong>
                  <p>Creating opportunities for youth and women in economic development.</p>
                </div>
                
                <div class="pillar">
                  <strong>Democracy & Human Rights</strong>
                  <p>Upholding democratic values and protecting human rights.</p>
                </div>
                
                <p style="margin-top: 30px;">Stay tuned for upcoming events, workshops, and ways to contribute to our mission!</p>
                
                <p>Together, we can build a more just and equitable future.</p>
              </div>
              <div class="footer">
                <p><strong>Economic Justice Forum</strong></p>
                <p>Building a Fair Future</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })
    console.log("[v0] Welcome email result:", welcomeEmail)

    return NextResponse.json({
      success: true,
      message: "Subscription successful",
      adminEmailId: adminEmail.data?.id,
      welcomeEmailId: welcomeEmail.data?.id,
    })
  } catch (error: any) {
    console.error("[v0] Subscription error:", error)
    console.error("[v0] Error details:", error.message, error.statusCode)
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
