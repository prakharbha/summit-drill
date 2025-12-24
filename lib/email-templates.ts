/**
 * Email Templates Library
 * Modern, elegant HTML email templates for Summit Drilling
 */

// Brand colors
const COLORS = {
    navy: '#1A365D',
    teal: '#377d7e',
    lightTeal: '#a4c5c5',
    white: '#ffffff',
    gray: '#f5f5f5',
    darkGray: '#666666',
    lightGray: '#e0e0e0',
};

// Common styles
const baseStyles = `
  body { margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: ${COLORS.gray}; }
  .container { max-width: 600px; margin: 0 auto; background-color: ${COLORS.white}; }
`;

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

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: ${COLORS.gray};">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: ${COLORS.gray};">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" align="center" style="background-color: ${COLORS.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.teal} 100%); padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: ${COLORS.white}; font-size: 28px; font-weight: 700;">
                📬 New Contact Inquiry
              </h1>
              <p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">
                Received on ${timestamp}
              </p>
            </td>
          </tr>

          <!-- Contact Card -->
          <tr>
            <td style="padding: 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: ${COLORS.gray}; border-radius: 8px; padding: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 20px 0; color: ${COLORS.navy}; font-size: 20px; font-weight: 600; border-bottom: 2px solid ${COLORS.teal}; padding-bottom: 10px;">
                      👤 Contact Information
                    </h2>
                    
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: ${COLORS.darkGray}; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</span><br>
                          <span style="color: ${COLORS.navy}; font-size: 18px; font-weight: 600;">${name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: ${COLORS.darkGray}; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</span><br>
                          <a href="mailto:${email}" style="color: ${COLORS.teal}; font-size: 16px; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      ${company ? `
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: ${COLORS.darkGray}; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Company</span><br>
                          <span style="color: ${COLORS.navy}; font-size: 16px;">${company}</span>
                        </td>
                      </tr>
                      ` : ''}
                      ${phone ? `
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: ${COLORS.darkGray}; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</span><br>
                          <a href="tel:${phone}" style="color: ${COLORS.teal}; font-size: 16px; text-decoration: none;">${phone}</a>
                        </td>
                      </tr>
                      ` : ''}
                      ${cell ? `
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: ${COLORS.darkGray}; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Cell</span><br>
                          <a href="tel:${cell}" style="color: ${COLORS.teal}; font-size: 16px; text-decoration: none;">${cell}</a>
                        </td>
                      </tr>
                      ` : ''}
                      ${location ? `
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: ${COLORS.darkGray}; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Location</span><br>
                          <span style="color: ${COLORS.navy}; font-size: 16px;">${location}</span>
                        </td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: ${COLORS.darkGray}; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Newsletter</span><br>
                          <span style="color: ${newsletter ? COLORS.teal : COLORS.darkGray}; font-size: 16px; font-weight: 500;">
                            ${newsletter ? '✓ Subscribed' : '✗ Not subscribed'}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              ${notes ? `
              <!-- Notes Section -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 24px; background-color: ${COLORS.lightTeal}20; border-radius: 8px; border-left: 4px solid ${COLORS.teal};">
                <tr>
                  <td style="padding: 20px;">
                    <h3 style="margin: 0 0 12px 0; color: ${COLORS.navy}; font-size: 16px; font-weight: 600;">
                      💬 Message
                    </h3>
                    <p style="margin: 0; color: ${COLORS.navy}; font-size: 15px; line-height: 1.6;">
                      ${notes}
                    </p>
                  </td>
                </tr>
              </table>
              ` : ''}

              <!-- Quick Actions -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 30px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display: inline-block; background-color: ${COLORS.navy}; color: ${COLORS.white}; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
                      Reply to ${name.split(' ')[0]}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: ${COLORS.navy}; padding: 20px 40px; text-align: center;">
              <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 12px;">
                Summit Drilling Company, LLC<br>
                81 Chimney Rock Road, Bridgewater, NJ 08807
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * Generate thank you email for contact form submission
 */
export function getContactThankYouTemplate(data: {
    name: string;
    email: string;
}): string {
    const firstName = data.name.split(' ')[0];

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Summit Drilling</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: ${COLORS.gray};">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: ${COLORS.gray};">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" align="center" style="background-color: ${COLORS.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.teal} 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0; color: ${COLORS.white}; font-size: 32px; font-weight: 700;">
                Thank You! 🎉
              </h1>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px 0; color: ${COLORS.navy}; font-size: 24px; font-weight: 600;">
                Hi ${firstName},
              </h2>
              
              <p style="margin: 0 0 20px 0; color: ${COLORS.darkGray}; font-size: 16px; line-height: 1.7;">
                Thank you for reaching out to Summit Drilling! We've received your inquiry and one of our team members will get back to you within <strong style="color: ${COLORS.navy};">1-2 business days</strong>.
              </p>

              <p style="margin: 0 0 30px 0; color: ${COLORS.darkGray}; font-size: 16px; line-height: 1.7;">
                In the meantime, feel free to explore our services or give us a call if you need immediate assistance.
              </p>

              <!-- Contact Info Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: ${COLORS.gray}; border-radius: 8px;">
                <tr>
                  <td style="padding: 24px;">
                    <h3 style="margin: 0 0 16px 0; color: ${COLORS.navy}; font-size: 16px; font-weight: 600;">
                      Need Immediate Assistance?
                    </h3>
                    <table role="presentation" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding: 6px 0;">
                          <span style="color: ${COLORS.teal}; font-size: 18px;">📞</span>
                          <a href="tel:+18002426648" style="color: ${COLORS.navy}; text-decoration: none; font-size: 15px; margin-left: 10px;">
                            <strong>800-242-6648</strong>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0;">
                          <span style="color: ${COLORS.teal}; font-size: 18px;">✉️</span>
                          <a href="mailto:info@summitdrilling.com" style="color: ${COLORS.teal}; text-decoration: none; font-size: 15px; margin-left: 10px;">
                            info@summitdrilling.com
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 30px;">
                <tr>
                  <td align="center">
                    <a href="https://summitdrilling.com/services" style="display: inline-block; background-color: ${COLORS.teal}; color: ${COLORS.white}; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
                      Explore Our Services
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Social Links -->
          <tr>
            <td style="padding: 0 40px 30px 40px; text-align: center;">
              <p style="margin: 0 0 16px 0; color: ${COLORS.darkGray}; font-size: 14px;">
                Stay connected with us:
              </p>
              <table role="presentation" cellspacing="0" cellpadding="0" align="center">
                <tr>
                  <td style="padding: 0 8px;">
                    <a href="https://www.linkedin.com/company/summit-drilling/" style="color: ${COLORS.teal}; text-decoration: none; font-size: 14px;">LinkedIn</a>
                  </td>
                  <td style="padding: 0 8px; color: ${COLORS.lightGray};">|</td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.facebook.com/p/Summit-Drilling-LLC-100083102508611/" style="color: ${COLORS.teal}; text-decoration: none; font-size: 14px;">Facebook</a>
                  </td>
                  <td style="padding: 0 8px; color: ${COLORS.lightGray};">|</td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.instagram.com/summitdrillingllc/" style="color: ${COLORS.teal}; text-decoration: none; font-size: 14px;">Instagram</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: ${COLORS.navy}; padding: 24px 40px; text-align: center;">
              <p style="margin: 0 0 8px 0; color: ${COLORS.white}; font-size: 14px; font-weight: 600;">
                Summit Drilling Company, LLC
              </p>
              <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 12px;">
                81 Chimney Rock Road, Bridgewater, NJ 08807<br>
                © ${new Date().getFullYear()} Summit Drilling. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
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
        ? services.map(s => `<li style="padding: 6px 0; color: ${COLORS.navy};">${s}</li>`).join('')
        : '<li style="color: #999;">No services selected</li>';

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: ${COLORS.gray};">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: ${COLORS.gray};">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" align="center" style="background-color: ${COLORS.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.navy} 100%); padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: ${COLORS.white}; font-size: 28px; font-weight: 700;">
                🚀 New Project Request
              </h1>
              <p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">
                Received on ${timestamp}
              </p>
            </td>
          </tr>

          <!-- Services Section -->
          <tr>
            <td style="padding: 40px 40px 20px 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: ${COLORS.teal}15; border-radius: 8px; border: 1px solid ${COLORS.teal}30;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 16px 0; color: ${COLORS.teal}; font-size: 18px; font-weight: 600;">
                      📋 Requested Services
                    </h2>
                    <ul style="margin: 0; padding-left: 20px; font-size: 15px;">
                      ${servicesList}
                    </ul>
                  </td>
                </tr>
              </table>

              ${additionalNotes ? `
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 16px; background-color: ${COLORS.gray}; border-radius: 8px; border-left: 4px solid ${COLORS.navy};">
                <tr>
                  <td style="padding: 20px;">
                    <h3 style="margin: 0 0 12px 0; color: ${COLORS.navy}; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                      Additional Notes
                    </h3>
                    <p style="margin: 0; color: ${COLORS.navy}; font-size: 15px; line-height: 1.6;">
                      ${additionalNotes}
                    </p>
                  </td>
                </tr>
              </table>
              ` : ''}
              
              ${startDate ? `
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 16px;">
                <tr>
                  <td style="padding: 16px 20px; background-color: ${COLORS.navy}10; border-radius: 8px;">
                    <span style="color: ${COLORS.darkGray}; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Estimated Start Date</span><br>
                    <span style="color: ${COLORS.navy}; font-size: 18px; font-weight: 600;">📅 ${startDate}</span>
                  </td>
                </tr>
              </table>
              ` : ''}

              ${attachmentCount && attachmentCount > 0 ? `
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 16px;">
                <tr>
                  <td style="padding: 12px 20px; background-color: #fff3cd; border-radius: 8px; border: 1px solid #ffc107;">
                    <span style="color: #856404; font-size: 14px;">
                      📎 <strong>${attachmentCount} file(s) attached</strong> - See attachments below
                    </span>
                  </td>
                </tr>
              </table>
              ` : ''}
            </td>
          </tr>

          <!-- Contact Info -->
          <tr>
            <td style="padding: 0 40px 40px 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: ${COLORS.gray}; border-radius: 8px;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 20px 0; color: ${COLORS.navy}; font-size: 18px; font-weight: 600; border-bottom: 2px solid ${COLORS.teal}; padding-bottom: 10px;">
                      👤 Contact Information
                    </h2>
                    
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="50%" style="padding: 8px 8px 8px 0; vertical-align: top;">
                          <span style="color: ${COLORS.darkGray}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Name</span><br>
                          <span style="color: ${COLORS.navy}; font-size: 16px; font-weight: 600;">${name}</span>
                        </td>
                        <td width="50%" style="padding: 8px 0 8px 8px; vertical-align: top;">
                          <span style="color: ${COLORS.darkGray}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Email</span><br>
                          <a href="mailto:${email}" style="color: ${COLORS.teal}; font-size: 14px; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      ${company || phone ? `
                      <tr>
                        <td width="50%" style="padding: 8px 8px 8px 0; vertical-align: top;">
                          ${company ? `
                          <span style="color: ${COLORS.darkGray}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Company</span><br>
                          <span style="color: ${COLORS.navy}; font-size: 16px;">${company}</span>
                          ` : ''}
                        </td>
                        <td width="50%" style="padding: 8px 0 8px 8px; vertical-align: top;">
                          ${phone ? `
                          <span style="color: ${COLORS.darkGray}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Phone</span><br>
                          <a href="tel:${phone}" style="color: ${COLORS.teal}; font-size: 14px; text-decoration: none;">${phone}</a>
                          ` : ''}
                        </td>
                      </tr>
                      ` : ''}
                      ${cell || location ? `
                      <tr>
                        <td width="50%" style="padding: 8px 8px 8px 0; vertical-align: top;">
                          ${cell ? `
                          <span style="color: ${COLORS.darkGray}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Cell</span><br>
                          <a href="tel:${cell}" style="color: ${COLORS.teal}; font-size: 14px; text-decoration: none;">${cell}</a>
                          ` : ''}
                        </td>
                        <td width="50%" style="padding: 8px 0 8px 8px; vertical-align: top;">
                          ${location ? `
                          <span style="color: ${COLORS.darkGray}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Location</span><br>
                          <span style="color: ${COLORS.navy}; font-size: 14px;">${location}</span>
                          ` : ''}
                        </td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Quick Actions -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 24px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display: inline-block; background-color: ${COLORS.navy}; color: ${COLORS.white}; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
                      Reply to ${name.split(' ')[0]}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: ${COLORS.navy}; padding: 20px 40px; text-align: center;">
              <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 12px;">
                Summit Drilling Company, LLC<br>
                81 Chimney Rock Road, Bridgewater, NJ 08807
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
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
        ? data.services.map(s => `<li style="padding: 4px 0; color: ${COLORS.navy};">${s}</li>`).join('')
        : '';

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Project Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: ${COLORS.gray};">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: ${COLORS.gray};">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" align="center" style="background-color: ${COLORS.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.navy} 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0; color: ${COLORS.white}; font-size: 32px; font-weight: 700;">
                Request Received! ✅
              </h1>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px 0; color: ${COLORS.navy}; font-size: 24px; font-weight: 600;">
                Hi ${firstName},
              </h2>
              
              <p style="margin: 0 0 20px 0; color: ${COLORS.darkGray}; font-size: 16px; line-height: 1.7;">
                Thank you for submitting a project request with Summit Drilling! Our team is reviewing your requirements and will contact you within <strong style="color: ${COLORS.navy};">1 business day</strong> to discuss your project in detail.
              </p>

              ${servicesList ? `
              <!-- Services Summary -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin: 24px 0; background-color: ${COLORS.teal}10; border-radius: 8px; border: 1px solid ${COLORS.teal}30;">
                <tr>
                  <td style="padding: 20px;">
                    <h3 style="margin: 0 0 12px 0; color: ${COLORS.teal}; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                      Your Requested Services
                    </h3>
                    <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                      ${servicesList}
                    </ul>
                  </td>
                </tr>
              </table>
              ` : ''}

              <p style="margin: 0 0 30px 0; color: ${COLORS.darkGray}; font-size: 16px; line-height: 1.7;">
                A Summit representative will reach out to discuss project scope, timelines, and next steps. For urgent matters, please don't hesitate to call us directly.
              </p>

              <!-- Contact Info Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: ${COLORS.gray}; border-radius: 8px;">
                <tr>
                  <td style="padding: 24px;">
                    <h3 style="margin: 0 0 16px 0; color: ${COLORS.navy}; font-size: 16px; font-weight: 600;">
                      Need to Reach Us Sooner?
                    </h3>
                    <table role="presentation" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding: 6px 0;">
                          <span style="color: ${COLORS.teal}; font-size: 18px;">📞</span>
                          <a href="tel:+18002426648" style="color: ${COLORS.navy}; text-decoration: none; font-size: 15px; margin-left: 10px;">
                            <strong>800-242-6648</strong>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0;">
                          <span style="color: ${COLORS.teal}; font-size: 18px;">✉️</span>
                          <a href="mailto:info@summitdrilling.com" style="color: ${COLORS.teal}; text-decoration: none; font-size: 15px; margin-left: 10px;">
                            info@summitdrilling.com
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 30px;">
                <tr>
                  <td align="center">
                    <a href="https://summitdrilling.com/project-gallery" style="display: inline-block; background-color: ${COLORS.teal}; color: ${COLORS.white}; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
                      View Our Project Gallery
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Social Links -->
          <tr>
            <td style="padding: 0 40px 30px 40px; text-align: center;">
              <p style="margin: 0 0 16px 0; color: ${COLORS.darkGray}; font-size: 14px;">
                Stay connected with us:
              </p>
              <table role="presentation" cellspacing="0" cellpadding="0" align="center">
                <tr>
                  <td style="padding: 0 8px;">
                    <a href="https://www.linkedin.com/company/summit-drilling/" style="color: ${COLORS.teal}; text-decoration: none; font-size: 14px;">LinkedIn</a>
                  </td>
                  <td style="padding: 0 8px; color: ${COLORS.lightGray};">|</td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.facebook.com/p/Summit-Drilling-LLC-100083102508611/" style="color: ${COLORS.teal}; text-decoration: none; font-size: 14px;">Facebook</a>
                  </td>
                  <td style="padding: 0 8px; color: ${COLORS.lightGray};">|</td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.instagram.com/summitdrillingllc/" style="color: ${COLORS.teal}; text-decoration: none; font-size: 14px;">Instagram</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: ${COLORS.navy}; padding: 24px 40px; text-align: center;">
              <p style="margin: 0 0 8px 0; color: ${COLORS.white}; font-size: 14px; font-weight: 600;">
                Summit Drilling Company, LLC
              </p>
              <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 12px;">
                81 Chimney Rock Road, Bridgewater, NJ 08807<br>
                © ${new Date().getFullYear()} Summit Drilling. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
