import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Send welcome email to new subscriber
    const welcomeEmail = await resend.emails.send({
      from: "Economic Justice Forum <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to Economic Justice Forum!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1a5276 0%, #27ae60 100%); padding: 40px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 32px;">Welcome to EJF!</h1>
            <p style="color: white; margin: 15px 0 0 0; font-size: 18px;">Building a Fair Future Together</p>
          </div>
          
          <div style="padding: 40px; background: #f9f9f9;">
            <h2 style="color: #2c3e50; margin-top: 0;">Thank You for Joining Us!</h2>
            
            <p style="color: #555; line-height: 1.8; font-size: 16px;">
              We're thrilled to have you as part of the Economic Justice Forum community. Together, we're working towards a fairer, more equitable Kenya.
            </p>
            
            <div style="background: white; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #27ae60;">
              <h3 style="color: #2c3e50; margin-top: 0;">What's Next?</h3>
              <ul style="color: #555; line-height: 1.8; padding-left: 20px;">
                <li>Stay updated on our latest campaigns and initiatives</li>
                <li>Receive invitations to exclusive events and workshops</li>
                <li>Connect with like-minded advocates for economic justice</li>
                <li>Access resources and reports on economic policy</li>
              </ul>
            </div>
            
            <div style="background: linear-gradient(135deg, #1a5276 0%, #27ae60 100%); padding: 25px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: white; margin-top: 0;">Our Core Pillars</h3>
              <div style="color: white; line-height: 1.8;">
                <p style="margin: 10px 0;">✓ Governance & Accountability</p>
                <p style="margin: 10px 0;">✓ Natural Resources Management</p>
                <p style="margin: 10px 0;">✓ Debt & Tax Justice</p>
                <p style="margin: 10px 0;">✓ Land Rights & Climate Justice</p>
                <p style="margin: 10px 0;">✓ Youth & Women Empowerment</p>
              </div>
            </div>
            
            <p style="color: #555; line-height: 1.8; font-size: 16px;">
              We'll keep you informed about upcoming events, policy updates, and opportunities to get involved in our advocacy work.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://economicjusticeforum.org" style="background: linear-gradient(135deg, #1a5276 0%, #27ae60 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 5px; display: inline-block; font-size: 16px; font-weight: bold;">
                Explore Our Work
              </a>
            </div>
          </div>
          
          <div style="background: #2c3e50; padding: 25px; text-align: center; color: white;">
            <p style="margin: 0 0 10px 0; font-size: 16px; font-weight: bold;">Stay Connected</p>
            <p style="margin: 0 0 15px 0; font-size: 14px;">
              Email: cmwambingu@gmail.com | Phone: +254 728 355 531
            </p>
            <p style="margin: 0; font-size: 12px; color: #ccc;">
              Economic Justice Forum - Building a Fair Future
            </p>
          </div>
        </div>
      `,
    })

    // Notify admin about new subscriber
    const adminNotification = await resend.emails.send({
      from: "EJF Subscriptions <onboarding@resend.dev>",
      to: "cmwambingu@gmail.com",
      subject: "New EJF Member Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1a5276 0%, #27ae60 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Member Alert</h1>
            <p style="color: white; margin: 10px 0 0 0;">Economic Justice Forum</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #2c3e50; margin-top: 0;">New Subscription</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <p style="margin: 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0 0 0;"><strong>Date:</strong> ${new Date().toLocaleString("en-US", {
                timeZone: "Africa/Nairobi",
                dateStyle: "full",
                timeStyle: "short",
              })}</p>
            </div>
          </div>
          
          <div style="background: #2c3e50; padding: 20px; text-align: center; color: white;">
            <p style="margin: 0; font-size: 14px;">Economic Justice Forum - Building a Fair Future</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Subscription successful",
        welcomeEmailId: welcomeEmail.data?.id,
        adminEmailId: adminNotification.data?.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Subscription error:", error)
    return NextResponse.json({ error: "Failed to process subscription" }, { status: 500 })
  }
}
