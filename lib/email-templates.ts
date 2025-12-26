/**
 * Email Templates Library
 * Professional HTML email templates matching Summit Drilling's brand style
 * Based on the company's existing email-template.html design
 */

// Brand colors from existing template
const COLORS = {
    navy: '#113361',
    navyLight: '#1a4a7a',
    blue: '#0e5e9d',
    accent: '#40b3de',
    text: '#444444',
    textDark: '#333333',
    white: '#ffffff',
    bgLight: '#f5f9fc',
};

/**
 * Common header used across all email templates
 */
function getEmailHeader(): string {
    return `
    <!-- Header with Logo -->
    <tr>
      <td style="background-color: ${COLORS.navy}; background: linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.blue} 50%, ${COLORS.navyLight} 100%); padding: 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
          style="background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);">
          <tr>
            <td align="center" style="padding: 36px 48px;">
              <div style="display: inline-block; padding: 12px 16px; background-color: #113361; border-radius: 8px;">
                <img src="https://summitdrilling.com/wp-content/uploads/2025/12/summit-logo-update.webp"
                  alt="Summit Drilling" width="200" style="max-width: 200px; height: auto; display: block;" />
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Accent Line -->
    <tr>
      <td style="background: linear-gradient(90deg, ${COLORS.accent} 0%, ${COLORS.blue} 50%, ${COLORS.accent} 100%); height: 4px; font-size: 0; line-height: 0;">
        &nbsp;
      </td>
    </tr>
  `;
}

/**
 * Common footer used across all email templates
 */
function getEmailFooter(): string {
    return `
    <!-- Footer -->
    <tr>
      <td style="background-color: ${COLORS.navy}; background: linear-gradient(135deg, ${COLORS.navy} 0%, #0a2444 100%); padding: 36px 52px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center">
              <!-- Logo -->
              <div style="display: inline-block; padding: 10px 14px; background-color: #113361; border-radius: 8px; margin-bottom: 20px;">
                <img src="https://summitdrilling.com/wp-content/uploads/2025/12/summit-logo-update.webp"
                  alt="Summit Drilling" width="140"
                  style="max-width: 140px; height: auto; display: block;" />
              </div>
              
              <!-- Company Name -->
              <p style="margin: 0 0 12px 0; font-size: 14px; color: rgba(255,255,255,0.85); font-weight: 500;">
                Summit Drilling & Remediation
              </p>

              <!-- Address -->
              <p style="margin: 0 0 6px 0; font-size: 12px;">
                <a href="https://www.google.com/maps/dir/?api=1&destination=81+Chimney+Rock+Road,+Bridgewater,+NJ+08807" 
                   style="color: rgba(255,255,255,0.6); text-decoration: none;">
                  81 Chimney Rock Road, Bridgewater, NJ 08807
                </a>
              </p>

              <!-- Phone -->
              <p style="margin: 0 0 6px 0; font-size: 12px;">
                <a href="tel:+18002426648" style="color: rgba(255,255,255,0.6); text-decoration: none;">
                  Phone: 800-242-6648
                </a>
              </p>

              <!-- Email -->
              <p style="margin: 0 0 16px 0; font-size: 12px;">
                <a href="mailto:info@summitdrilling.com" style="color: ${COLORS.accent}; text-decoration: none;">
                  info@summitdrilling.com
                </a>
              </p>

              <!-- Social Media Links -->
              <p style="margin: 0 0 12px 0; font-size: 12px; color: rgba(255,255,255,0.5);">
                <a href="https://www.linkedin.com/company/summit-drilling/" style="color: ${COLORS.accent}; text-decoration: none;">LinkedIn</a>
                <span style="color: rgba(255,255,255,0.3); margin: 0 8px;">|</span>
                <a href="https://www.facebook.com/p/Summit-Drilling-LLC-100083102508611/" style="color: ${COLORS.accent}; text-decoration: none;">Facebook</a>
                <span style="color: rgba(255,255,255,0.3); margin: 0 8px;">|</span>
                <a href="https://www.instagram.com/summitdrillingllc/" style="color: ${COLORS.accent}; text-decoration: none;">Instagram</a>
              </p>

              <!-- Website Link -->
              <p style="margin: 0; font-size: 13px;">
                <a href="https://summitdrilling.com" style="color: ${COLORS.accent}; text-decoration: none; font-weight: 500;">summitdrilling.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

/**
 * Email wrapper template
 */
function wrapEmailContent(content: string): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>Summit Drilling</title>
  <style type="text/css">
    :root { color-scheme: light; supported-color-schemes: light; }
    @media only screen and (max-width: 600px) {
      .outer-padding { padding: 0 !important; }
      .main-card { border-radius: 0 !important; }
      .content-padding { padding: 40px 20px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #e8f4fc 0%, #f5f9fc 50%, #e0f0fa 100%); min-height: 100vh; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
    style="background: linear-gradient(135deg, #e8f4fc 0%, #f5f9fc 50%, #e0f0fa 100%);">
    <tr>
      <td align="center" class="outer-padding" style="padding: 40px 10px;">

        <!-- Main Card -->
        <table role="presentation" width="800" cellpadding="0" cellspacing="0" border="0"
          class="main-card"
          style="max-width: 800px; width: 100%; background: rgba(255, 255, 255, 0.92); border-radius: 24px; box-shadow: 0 8px 32px rgba(17, 51, 97, 0.12), 0 2px 8px rgba(64, 179, 222, 0.08); border: 1px solid rgba(255, 255, 255, 0.6); overflow: hidden;">

          ${getEmailHeader()}

          ${content}

          ${getEmailFooter()}

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
  `;
}

/**
 * Generate admin notification email for contact form
 */
export function getContactAdminTemplate(data: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    cell?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    notes?: string;
    newsletter?: boolean;
}): string {
    const { name, email, company, phone, cell, address, city, state, zip, notes, newsletter } = data;
    const timestamp = new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'short'
    });

    const locationParts = [address, city, state, zip].filter(Boolean);
    const location = locationParts.length > 0 ? locationParts.join(', ') : null;

    const content = `
    <!-- Content Area -->
    <tr>
      <td class="content-padding" style="padding: 48px 52px;">

        <!-- Title -->
        <p style="margin: 0 0 8px 0; font-size: 14px; color: ${COLORS.blue}; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
          New Contact Form Submission
        </p>
        <p style="margin: 0 0 32px 0; font-size: 12px; color: #666666;">
          Received on ${timestamp}
        </p>

        <!-- Contact Details Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
          <tr>
            <td style="background: linear-gradient(135deg, rgba(17, 51, 97, 0.08) 0%, rgba(17, 51, 97, 0.04) 100%); border-radius: 16px; border: 1px solid rgba(17, 51, 97, 0.12); padding: 28px 36px;">
              <p style="margin: 0 0 20px 0; font-size: 15px; font-weight: 600; color: ${COLORS.navy}; text-transform: uppercase; letter-spacing: 1px;">
                Contact Information
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="padding: 10px 0; font-size: 16px; color: ${COLORS.text}; border-bottom: 1px solid rgba(17, 51, 97, 0.08);">
                    <strong style="color: ${COLORS.navy};">Name:</strong> ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-size: 16px; color: ${COLORS.text}; border-bottom: 1px solid rgba(17, 51, 97, 0.08);">
                    <strong style="color: ${COLORS.navy};">Email:</strong> 
                    <a href="mailto:${email}" style="color: ${COLORS.blue}; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 10px 0; font-size: 16px; color: ${COLORS.text}; border-bottom: 1px solid rgba(17, 51, 97, 0.08);">
                    <strong style="color: ${COLORS.navy};">Company:</strong> ${company}
                  </td>
                </tr>
                ` : ''}
                ${phone ? `
                <tr>
                  <td style="padding: 10px 0; font-size: 16px; color: ${COLORS.text}; border-bottom: 1px solid rgba(17, 51, 97, 0.08);">
                    <strong style="color: ${COLORS.navy};">Phone:</strong> 
                    <a href="tel:${phone}" style="color: ${COLORS.blue}; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ` : ''}
                ${cell ? `
                <tr>
                  <td style="padding: 10px 0; font-size: 16px; color: ${COLORS.text}; border-bottom: 1px solid rgba(17, 51, 97, 0.08);">
                    <strong style="color: ${COLORS.navy};">Cell:</strong> 
                    <a href="tel:${cell}" style="color: ${COLORS.blue}; text-decoration: none;">${cell}</a>
                  </td>
                </tr>
                ` : ''}
                ${location ? `
                <tr>
                  <td style="padding: 10px 0; font-size: 16px; color: ${COLORS.text}; border-bottom: 1px solid rgba(17, 51, 97, 0.08);">
                    <strong style="color: ${COLORS.navy};">Address:</strong> ${location}
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 10px 0; font-size: 16px; color: ${COLORS.text};">
                    <strong style="color: ${COLORS.navy};">Newsletter:</strong> ${newsletter ? 'Yes, subscribed' : 'No'}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        ${notes ? `
        <!-- Message Section -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
          <tr>
            <td style="padding-left: 24px; border-left: 4px solid ${COLORS.accent};">
              <p style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: ${COLORS.navy}; text-transform: uppercase; letter-spacing: 1px;">
                Message
              </p>
              <p style="margin: 0; font-size: 16px; line-height: 1.85; color: ${COLORS.text};">
                ${notes}
              </p>
            </td>
          </tr>
        </table>
        ` : ''}

        <!-- Action Button -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="background-color: ${COLORS.navy}; background: linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.blue} 100%); border-radius: 14px; padding: 20px 32px; box-shadow: 0 6px 20px rgba(17, 51, 97, 0.25);">
              <p style="margin: 0; font-size: 15px; color: rgba(255,255,255,0.92); line-height: 1.7; text-align: center;">
                <a href="mailto:${email}" style="color: ${COLORS.accent}; text-decoration: none; font-weight: 600; font-size: 16px;">
                  → Reply to ${name.split(' ')[0]}
                </a>
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  `;

    return wrapEmailContent(content);
}

/**
 * Generate thank you email for contact form submission
 */
export function getContactThankYouTemplate(data: {
    name: string;
    email: string;
}): string {
    const firstName = data.name.split(' ')[0];

    const content = `
    <!-- Content Area -->
    <tr>
      <td class="content-padding" style="padding: 48px 52px;">

        <!-- Greeting -->
        <p style="margin: 0 0 24px 0; font-size: 18px; line-height: 1.7; color: ${COLORS.textDark};">
          <strong style="color: ${COLORS.navy};">Dear ${firstName},</strong>
        </p>

        <!-- Main Message -->
        <p style="margin: 0 0 22px 0; font-size: 16px; line-height: 1.85; color: ${COLORS.text};">
          Thank you for reaching out to Summit Drilling! We have received your inquiry and appreciate you taking the time to contact us.
        </p>

        <p style="margin: 0 0 36px 0; font-size: 16px; line-height: 1.85; color: ${COLORS.text};">
          One of our team members will review your message and get back to you within <strong style="color: ${COLORS.navy};">1-2 business days</strong>.
        </p>

        <!-- What You Can Expect Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 32px;">
          <tr>
            <td style="background: linear-gradient(135deg, rgba(17, 51, 97, 0.08) 0%, rgba(17, 51, 97, 0.04) 100%); border-radius: 16px; border: 1px solid rgba(17, 51, 97, 0.12); padding: 28px 36px;">
              <p style="margin: 0 0 18px 0; font-size: 15px; font-weight: 600; color: ${COLORS.navy}; text-transform: uppercase; letter-spacing: 1px;">
                What Happens Next
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding: 8px 0; font-size: 16px; color: ${COLORS.text};">
                    <span style="color: ${COLORS.blue}; margin-right: 12px;">✓</span> Your inquiry has been received
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 16px; color: ${COLORS.text};">
                    <span style="color: ${COLORS.blue}; margin-right: 12px;">✓</span> A team member will review your request
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 16px; color: ${COLORS.text};">
                    <span style="color: ${COLORS.blue}; margin-right: 12px;">✓</span> You'll receive a personalized response
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- Contact Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 36px;">
          <tr>
            <td style="background-color: ${COLORS.navy}; background: linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.blue} 100%); border-radius: 14px; padding: 24px 32px; box-shadow: 0 6px 20px rgba(17, 51, 97, 0.25);">
              <p style="margin: 0; font-size: 15px; color: rgba(255,255,255,0.92); line-height: 1.7;">
                Need immediate assistance? Give us a call:<br />
                <a href="tel:+18002426648" style="color: ${COLORS.accent}; text-decoration: none; font-weight: 600; font-size: 18px;">
                  800-242-6648
                </a>
              </p>
            </td>
          </tr>
        </table>

        <!-- Closing -->
        <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.85; color: ${COLORS.text};">
          We truly appreciate your interest in Summit Drilling and look forward to speaking with you soon.
        </p>

        <!-- Signature -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding-left: 24px; border-left: 4px solid ${COLORS.accent};">
              <p style="margin: 0 0 6px 0; font-size: 14px; color: #666666;">Sincerely,</p>
              <p style="margin: 0 0 2px 0; font-size: 17px; font-weight: 600; color: ${COLORS.navy};">The Summit Drilling Team</p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  `;

    return wrapEmailContent(content);
}

/**
 * Generate admin notification email for project request
 */
export function getProjectRequestAdminTemplate(data: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    cell?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    startDate?: string;
    services: string[];
    additionalNotes?: string;
    attachmentCount?: number;
}): string {
    const {
        name, email, company, phone, cell, address, city, state, zip,
        startDate, services, additionalNotes, attachmentCount
    } = data;

    const timestamp = new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'short'
    });

    const locationParts = [address, city, state, zip].filter(Boolean);
    const location = locationParts.length > 0 ? locationParts.join(', ') : null;

    const servicesList = services && services.length > 0
        ? services.map(s => `
      <tr>
        <td style="padding: 8px 0; font-size: 16px; color: ${COLORS.text};">
          <span style="color: ${COLORS.blue}; margin-right: 12px;">✓</span> ${s}
        </td>
      </tr>
    `).join('')
        : `<tr><td style="padding: 8px 0; font-size: 16px; color: #999;">No services selected</td></tr>`;

    const content = `
    <!-- Content Area -->
    <tr>
      <td class="content-padding" style="padding: 48px 52px;">

        <!-- Title -->
        <p style="margin: 0 0 8px 0; font-size: 14px; color: ${COLORS.blue}; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
          New Project Request
        </p>
        <p style="margin: 0 0 32px 0; font-size: 12px; color: #666666;">
          Received on ${timestamp}
        </p>

        <!-- Services Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
          <tr>
            <td style="background: linear-gradient(135deg, rgba(17, 51, 97, 0.08) 0%, rgba(17, 51, 97, 0.04) 100%); border-radius: 16px; border: 1px solid rgba(17, 51, 97, 0.12); padding: 28px 36px;">
              <p style="margin: 0 0 18px 0; font-size: 15px; font-weight: 600; color: ${COLORS.navy}; text-transform: uppercase; letter-spacing: 1px;">
                Requested Services
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                ${servicesList}
              </table>
            </td>
          </tr>
        </table>

        ${startDate ? `
        <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.85; color: ${COLORS.text};">
          <strong style="color: ${COLORS.navy};">Estimated Start Date:</strong> ${startDate}
        </p>
        ` : ''}

        ${attachmentCount && attachmentCount > 0 ? `
        <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.85; color: ${COLORS.text};">
          <strong style="color: ${COLORS.navy};">Attachments:</strong> ${attachmentCount} file(s) attached to this email
        </p>
        ` : ''}

        ${additionalNotes ? `
        <!-- Notes Section -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
          <tr>
            <td style="padding-left: 24px; border-left: 4px solid ${COLORS.accent};">
              <p style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: ${COLORS.navy}; text-transform: uppercase; letter-spacing: 1px;">
                Additional Notes
              </p>
              <p style="margin: 0; font-size: 16px; line-height: 1.85; color: ${COLORS.text};">
                ${additionalNotes}
              </p>
            </td>
          </tr>
        </table>
        ` : ''}

        <!-- Contact Details Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
          <tr>
            <td style="background: linear-gradient(135deg, rgba(17, 51, 97, 0.08) 0%, rgba(17, 51, 97, 0.04) 100%); border-radius: 16px; border: 1px solid rgba(17, 51, 97, 0.12); padding: 28px 36px;">
              <p style="margin: 0 0 20px 0; font-size: 15px; font-weight: 600; color: ${COLORS.navy}; text-transform: uppercase; letter-spacing: 1px;">
                Contact Information
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="padding: 10px 0; font-size: 16px; color: ${COLORS.text}; border-bottom: 1px solid rgba(17, 51, 97, 0.08);">
                    <strong style="color: ${COLORS.navy};">Name:</strong> ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-size: 16px; color: ${COLORS.text}; border-bottom: 1px solid rgba(17, 51, 97, 0.08);">
                    <strong style="color: ${COLORS.navy};">Email:</strong> 
                    <a href="mailto:${email}" style="color: ${COLORS.blue}; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 10px 0; font-size: 16px; color: ${COLORS.text}; border-bottom: 1px solid rgba(17, 51, 97, 0.08);">
                    <strong style="color: ${COLORS.navy};">Company:</strong> ${company}
                  </td>
                </tr>
                ` : ''}
                ${phone ? `
                <tr>
                  <td style="padding: 10px 0; font-size: 16px; color: ${COLORS.text}; border-bottom: 1px solid rgba(17, 51, 97, 0.08);">
                    <strong style="color: ${COLORS.navy};">Phone:</strong> 
                    <a href="tel:${phone}" style="color: ${COLORS.blue}; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ` : ''}
                ${cell ? `
                <tr>
                  <td style="padding: 10px 0; font-size: 16px; color: ${COLORS.text}; border-bottom: 1px solid rgba(17, 51, 97, 0.08);">
                    <strong style="color: ${COLORS.navy};">Cell:</strong> 
                    <a href="tel:${cell}" style="color: ${COLORS.blue}; text-decoration: none;">${cell}</a>
                  </td>
                </tr>
                ` : ''}
                ${location ? `
                <tr>
                  <td style="padding: 10px 0; font-size: 16px; color: ${COLORS.text};">
                    <strong style="color: ${COLORS.navy};">Address:</strong> ${location}
                  </td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>
        </table>

        <!-- Action Button -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="background-color: ${COLORS.navy}; background: linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.blue} 100%); border-radius: 14px; padding: 20px 32px; box-shadow: 0 6px 20px rgba(17, 51, 97, 0.25);">
              <p style="margin: 0; font-size: 15px; color: rgba(255,255,255,0.92); line-height: 1.7; text-align: center;">
                <a href="mailto:${email}" style="color: ${COLORS.accent}; text-decoration: none; font-weight: 600; font-size: 16px;">
                  → Reply to ${name.split(' ')[0]}
                </a>
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  `;

    return wrapEmailContent(content);
}

/**
 * Generate thank you email for project request submission
 */
export function getProjectRequestThankYouTemplate(data: {
    name: string;
    email: string;
    services: string[];
}): string {
    const firstName = data.name.split(' ')[0];

    const servicesList = data.services && data.services.length > 0
        ? data.services.map(s => `
      <tr>
        <td style="padding: 6px 0; font-size: 15px; color: ${COLORS.text};">
          <span style="color: ${COLORS.blue}; margin-right: 12px;">✓</span> ${s}
        </td>
      </tr>
    `).join('')
        : '';

    const content = `
    <!-- Content Area -->
    <tr>
      <td class="content-padding" style="padding: 48px 52px;">

        <!-- Greeting -->
        <p style="margin: 0 0 24px 0; font-size: 18px; line-height: 1.7; color: ${COLORS.textDark};">
          <strong style="color: ${COLORS.navy};">Dear ${firstName},</strong>
        </p>

        <!-- Main Message -->
        <p style="margin: 0 0 22px 0; font-size: 16px; line-height: 1.85; color: ${COLORS.text};">
          Thank you for submitting a project request with Summit Drilling! We have received your information and are excited to learn more about your project needs.
        </p>

        <p style="margin: 0 0 36px 0; font-size: 16px; line-height: 1.85; color: ${COLORS.text};">
          A Summit representative will contact you within <strong style="color: ${COLORS.navy};">1 business day</strong> to discuss your project in detail and provide a customized solution.
        </p>

        ${servicesList ? `
        <!-- Services Summary Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 32px;">
          <tr>
            <td style="background: linear-gradient(135deg, rgba(17, 51, 97, 0.08) 0%, rgba(17, 51, 97, 0.04) 100%); border-radius: 16px; border: 1px solid rgba(17, 51, 97, 0.12); padding: 28px 36px;">
              <p style="margin: 0 0 18px 0; font-size: 15px; font-weight: 600; color: ${COLORS.navy}; text-transform: uppercase; letter-spacing: 1px;">
                Your Requested Services
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                ${servicesList}
              </table>
            </td>
          </tr>
        </table>
        ` : ''}

        <!-- Contact Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 36px;">
          <tr>
            <td style="background-color: ${COLORS.navy}; background: linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.blue} 100%); border-radius: 14px; padding: 24px 32px; box-shadow: 0 6px 20px rgba(17, 51, 97, 0.25);">
              <p style="margin: 0; font-size: 15px; color: rgba(255,255,255,0.92); line-height: 1.7;">
                Need to reach us sooner? Give us a call:<br />
                <a href="tel:+18002426648" style="color: ${COLORS.accent}; text-decoration: none; font-weight: 600; font-size: 18px;">
                  800-242-6648
                </a>
              </p>
            </td>
          </tr>
        </table>

        <!-- Closing -->
        <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.85; color: ${COLORS.text};">
          We truly appreciate your interest in partnering with Summit Drilling and look forward to working with you.
        </p>

        <!-- Signature -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding-left: 24px; border-left: 4px solid ${COLORS.accent};">
              <p style="margin: 0 0 6px 0; font-size: 14px; color: #666666;">Sincerely,</p>
              <p style="margin: 0 0 2px 0; font-size: 17px; font-weight: 600; color: ${COLORS.navy};">The Summit Drilling Team</p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  `;

    return wrapEmailContent(content);
}
