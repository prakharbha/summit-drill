import { NextRequest, NextResponse } from "next/server";

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
const RECIPIENT_EMAIL = "info@summitdrilling.com";

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
        const {
            services,
            additionalNotes,
            name,
            company,
            address,
            city,
            state,
            zip,
            phone,
            cell,
            email,
            startDate
        } = body;

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

        // Check if Mailgun is configured
        if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
            console.error("Mailgun not configured");
            return NextResponse.json(
                { error: "Email service not configured" },
                { status: 500 }
            );
        }

        // Format services list
        const servicesList = services && services.length > 0
            ? services.map((s: string) => `<li>${s}</li>`).join("")
            : "<li>No services selected</li>";

        // Build email content
        const emailHtml = `
      <h2>New Project Request</h2>
      
      <h3>Selected Services:</h3>
      <ul>${servicesList}</ul>
      ${additionalNotes ? `<p><strong>Additional Notes:</strong> ${additionalNotes}</p>` : ""}
      
      <hr>
      
      <h3>Contact Information:</h3>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
        ${company ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Company:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${company}</td></tr>` : ""}
        ${phone ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>` : ""}
        ${cell ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Cell:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${cell}</td></tr>` : ""}
        ${address ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Address:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${address}</td></tr>` : ""}
        ${city ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>City:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${city}</td></tr>` : ""}
        ${state ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>State:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${state}</td></tr>` : ""}
        ${zip ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Zip:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${zip}</td></tr>` : ""}
        ${startDate ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Estimated Start Date:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${startDate}</td></tr>` : ""}
      </table>
      
      <hr>
      <p style="color: #666; font-size: 12px;">Submitted at: ${new Date().toLocaleString()}</p>
    `;

        await sendMailgunEmail(
            RECIPIENT_EMAIL,
            `New Project Request: ${name}${company ? ` - ${company}` : ""}`,
            emailHtml,
            `Summit Drilling Website <noreply@${MAILGUN_DOMAIN}>`
        );

        console.log("Project request email sent successfully");

        return NextResponse.json(
            {
                success: true,
                message: "Thank you for your project request. A Summit representative will respond promptly!",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Project request error:", error);
        return NextResponse.json(
            { error: "Failed to submit request. Please try again." },
            { status: 500 }
        );
    }
}
