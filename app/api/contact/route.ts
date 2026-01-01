import { NextRequest, NextResponse } from "next/server";
import {
  getContactAdminTemplate,
  getContactThankYouTemplate
} from "@/lib/email-templates";

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
const RECIPIENT_EMAIL = process.env.EMAIL_TO || "Sales@SummitDrilling.com";
const FROM_EMAIL = process.env.EMAIL_FROM || "noreply@summitdrilling.com";

async function sendMailgunEmail(to: string, subject: string, html: string, from: string) {
  const formData = new FormData();
  formData.append("from", from);
  formData.append("to", to);
  formData.append("subject", subject);
  formData.append("html", html);

  const response = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString("base64")}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Mailgun error: ${error}`);
  }

  return response.json();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, address, city, state, zip, cell, notes, newsletter, turnstileToken } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Verify Turnstile token
    const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecretKey && turnstileToken) {
      const turnstileResponse = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: turnstileSecretKey,
            response: turnstileToken,
          }),
        }
      );
      const turnstileResult = await turnstileResponse.json();
      if (!turnstileResult.success) {
        console.error("Turnstile verification failed:", turnstileResult);
        return NextResponse.json(
          { error: "Bot verification failed. Please try again." },
          { status: 400 }
        );
      }
    } else if (turnstileSecretKey && !turnstileToken) {
      return NextResponse.json(
        { error: "Bot verification required" },
        { status: 400 }
      );
    }

    // Check if Mailgun is configured
    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
      console.error("Mailgun not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Generate elegant admin notification email
    const adminEmailHtml = getContactAdminTemplate({
      name,
      email,
      company,
      phone,
      cell,
      address,
      city,
      state,
      zip,
      notes,
      newsletter,
    });

    // Send admin notification email
    await sendMailgunEmail(
      RECIPIENT_EMAIL,
      `New Contact Form: ${name}`,
      adminEmailHtml,
      `Summit Drilling Website <${FROM_EMAIL}>`
    );

    console.log("Contact form admin email sent successfully");

    // Generate and send thank you email to customer
    const thankYouEmailHtml = getContactThankYouTemplate({
      name,
      email,
    });

    await sendMailgunEmail(
      email,
      "Thank You for Contacting Summit Drilling",
      thankYouEmailHtml,
      `Summit Drilling <${FROM_EMAIL}>`
    );

    console.log("Contact form thank you email sent to customer");

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your inquiry. We'll be in touch soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
