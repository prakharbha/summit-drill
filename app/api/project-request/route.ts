import { NextRequest, NextResponse } from "next/server";
import {
    getProjectRequestAdminTemplate,
    getProjectRequestThankYouTemplate,
} from "@/lib/email-templates";

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

        // Generate elegant admin notification email
        const adminEmailHtml = getProjectRequestAdminTemplate({
            name,
            email,
            company,
            phone,
            cell,
            address,
            city,
            state,
            zip,
            startDate,
            services,
            additionalNotes,
            attachmentCount: attachments.length,
        });

        // Send admin notification with attachments
        await sendMailgunEmailWithAttachments(
            RECIPIENT_EMAIL,
            `New Project Request: ${name}${company ? ` - ${company}` : ""}`,
            adminEmailHtml,
            `Summit Drilling Website <${FROM_EMAIL}>`,
            attachments
        );

        console.log(`Project request admin email sent successfully with ${attachments.length} attachments`);

        // Generate and send thank you email to customer
        const thankYouEmailHtml = getProjectRequestThankYouTemplate({
            name,
            email,
            services,
        });

        await sendMailgunEmail(
            email,
            "Thank You for Your Project Request - Summit Drilling",
            thankYouEmailHtml,
            `Summit Drilling <${FROM_EMAIL}>`
        );

        console.log("Project request thank you email sent to customer");

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
