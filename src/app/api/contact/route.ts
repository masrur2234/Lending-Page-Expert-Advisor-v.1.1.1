import { NextRequest, NextResponse } from "next/server";

// Contact form API - sends email
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Semua field harus diisi" },
        { status: 400 }
      );
    }

    // Email configuration
    // You can change this to your email address
    const adminEmail = process.env.ADMIN_EMAIL || "admin@eaplatform.com";
    
    // In production, you would use a real email service like:
    // - Resend (https://resend.com)
    // - SendGrid
    // - Nodemailer with SMTP
    
    // For now, we'll log the email and return success
    // In production, replace this with actual email sending
    console.log("========================================");
    console.log("NEW CONTACT MESSAGE");
    console.log("========================================");
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log(`To: ${adminEmail}`);
    console.log("========================================");

    // Example with Resend (uncomment when you have API key):
    // const { data, error } = await resend.emails.send({
    //   from: 'EA Platform <noreply@eaplatform.com>',
    //   to: adminEmail,
    //   subject: `[Contact] ${subject}`,
    //   html: `
    //     <h2>Pesan Baru dari EA Platform</h2>
    //     <p><strong>Nama:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Subjek:</strong> ${subject}</p>
    //     <p><strong>Pesan:</strong></p>
    //     <p>${message}</p>
    //   `,
    //   reply_to: email,
    // });

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: "Pesan berhasil dikirim",
    });
  } catch (error) {
    console.error("Error sending contact message:", error);
    return NextResponse.json(
      { error: "Gagal mengirim pesan" },
      { status: 500 }
    );
  }
}
