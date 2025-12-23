import { NextRequest, NextResponse } from "next/server";

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
const RECIPIENT_EMAIL = process.env.EMAIL_TO || "info@summitdrilling.com";
const FROM_EMAIL = process.env.EMAIL_FROM || "noreply@summitdrilling.com";

// Allowed file types
const ALLOWED_EXTENSIONS = [
    // Documents
    '.pdf', '.doc', '.docx', '.txt', '.rtf', '.xlsx', '.xls', '.csv', '.ppt', '.pptx',
    // Images
    '.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg', '.heic', '.heif'
];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB per file
const MAX_TOTAL_SIZE = 25 * 1024 * 1024; // 25MB total (Mailgun limit)

async function sendMailgunEmailWithAttachments(
    to: string,
    subject: string,
    html: string,
    from: string,
    attachments: { filename: string; data: Buffer; contentType: string }[]
) {
    const formData = new FormData();
    formData.append("from", from);
    formData.append("to", to);
    formData.append("subject", subject);
    formData.append("html", html);

    // Add attachments
    for (const attachment of attachments) {
        const uint8Array = new Uint8Array(attachment.data);
        const blob = new Blob([uint8Array], { type: attachment.contentType });
        formData.append("attachment", blob, attachment.filename);
    }

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
        const formData = await request.formData();

        // Extract form fields
        const services = formData.getAll("services") as string[];
        const additionalNotes = formData.get("additionalNotes") as string || "";
        const name = formData.get("name") as string;
        const company = formData.get("company") as string || "";
        const address = formData.get("address") as string || "";
        const city = formData.get("city") as string || "";
        const state = formData.get("state") as string || "";
        const zip = formData.get("zip") as string || "";
        const phone = formData.get("phone") as string || "";
        const cell = formData.get("cell") as string || "";
        const email = formData.get("email") as string;
        const startDate = formData.get("startDate") as string || "";

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

        // Process file attachments
        const attachments: { filename: string; data: Buffer; contentType: string }[] = [];
        const files = formData.getAll("files") as File[];
        let totalSize = 0;

        for (const file of files) {
            if (file && file.size > 0) {
                // Check file extension
                const ext = '.' + file.name.split('.').pop()?.toLowerCase();
                if (!ALLOWED_EXTENSIONS.includes(ext)) {
                    return NextResponse.json(
                        { error: `File type not allowed: ${ext}. Allowed types: PDF, Word, Excel, Text, RTF, and images.` },
                        { status: 400 }
                    );
                }

                // Check individual file size
                if (file.size > MAX_FILE_SIZE) {
                    return NextResponse.json(
                        { error: `File ${file.name} is too large. Maximum size is 10MB per file.` },
                        { status: 400 }
                    );
                }

                totalSize += file.size;
                if (totalSize > MAX_TOTAL_SIZE) {
                    return NextResponse.json(
                        { error: "Total file size exceeds 25MB limit." },
                        { status: 400 }
                    );
                }

                const arrayBuffer = await file.arrayBuffer();
                attachments.push({
                    filename: file.name,
                    data: Buffer.from(arrayBuffer),
                    contentType: file.type || 'application/octet-stream'
                });
            }
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
      
      ${attachments.length > 0 ? `<p><strong>Attachments:</strong> ${attachments.length} file(s) attached</p>` : ""}
      
      <hr>
      <p style="color: #666; font-size: 12px;">Submitted at: ${new Date().toLocaleString()}</p>
    `;

        await sendMailgunEmailWithAttachments(
            RECIPIENT_EMAIL,
            `New Project Request: ${name}${company ? ` - ${company}` : ""}`,
            emailHtml,
            `Summit Drilling Website <${FROM_EMAIL}>`,
            attachments
        );

        console.log(`Project request email sent successfully with ${attachments.length} attachments`);

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
