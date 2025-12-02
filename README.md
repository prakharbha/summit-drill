# Summit Drilling, LLC - Website

A modern, performant website for Summit Drilling, LLC built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16 with App Router, TypeScript, Tailwind CSS
- **Elegant UI**: Shadcn/ui components with minimal, smooth animations using Framer Motion
- **Fully Responsive**: Mobile-first design with breakpoints at 320px, 768px, 1024px, and 1440px
- **SEO Optimized**: Comprehensive metadata, Open Graph tags, and semantic HTML
- **Modular Architecture**: Reusable components for easy maintenance and scalability
- **Performance Focused**: Optimized images, lazy loading, and efficient rendering

## 📁 Project Structure

```
summit-drilling/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── api/                     # API routes
│   │   └── contact/             # Contact form endpoint
│   ├── services/                # Services pages
│   ├── careers/                 # Careers page
│   ├── about-us/                # About page
│   └── [other pages]/           # Additional pages
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx          # Header with navigation
│   │   ├── Footer.tsx          # Footer
│   │   └── PageTemplate.tsx    # Reusable page template
│   ├── home/                    # Homepage sections
│   │   ├── Discovery.tsx       # Hero carousel
│   │   ├── Services.tsx        # Services section
│   │   ├── Careers.tsx         # Careers section
│   │   ├── OurPeople.tsx       # Team carousel
│   │   ├── FeaturedProject.tsx # Project showcase
│   │   ├── StartProject.tsx    # Contact form
│   │   ├── HealthSafety.tsx    # H&S section
│   │   ├── ExpertInsights.tsx  # Blog section
│   │   └── CompanyNews.tsx     # News section
│   └── ui/                      # Shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/
│   └── utils.ts                 # Utility functions
└── public/
    └── images/                  # Static assets
        └── summit-logo.png
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+ (using nvm v22.17.1)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design Guidelines

- **Typography**: Lato font family (weights: 300, 400, 700)
- **Color Scheme**: Sky blue primary (#0EA5E9), Gray secondary
- **Spacing**: Generous whitespace for clean, uncluttered design
- **Animations**: Minimal and elegant (0.3-0.5s duration)

## 📄 Pages

### Main Pages
- **Homepage** (`/`) - Full homepage with all sections
- **Services** (`/services`) - Overview of services
  - Drilling (`/services/drilling`)
  - Geophysics (`/services/geophysics`)
  - Remediation (`/services/remediation`)
- **Careers** (`/careers`) - Career opportunities
- **About Us** (`/about-us`) - Company vision and culture
- **Health & Safety** (`/health-safety`) - Safety information
- **Industries** (`/industries`) - Industries served
- **News** (`/news`) - Company news
- **Projects Gallery** (`/projects-gallery`) - Project showcase
- **Expertise & Insights** (`/expertise-insights`) - Blog/articles
- **Start a Project** (`/start-a-project`) - Contact form
- **Contact** (`/contact`) - Contact information

### Footer Pages
- **Certifications** (`/certifications`)
- **Locations** (`/locations`)
- **Employee Login** (`/employee-login`)

## 🔌 API Routes

### POST `/api/contact`

Contact form submission endpoint.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string (optional)",
  "company": "string (optional)",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your inquiry. We'll be in touch soon!"
}
```

## 🚢 Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings

## 🔮 Future Enhancements

- [ ] Sanity CMS integration for content management
- [ ] Email service integration (SendGrid/Resend)
- [ ] Advanced animations and interactions
- [ ] Blog functionality with dynamic routing
- [ ] Project gallery with filtering
- [ ] Multi-language support

## 📝 Notes

- All images are currently using placeholder URLs from Unsplash
- Replace placeholder images with actual company images
- Update contact information in Footer component
- Configure email service for contact form
- Add actual content to replace Lorem ipsum text

## 🤝 Contributing

This is a private project for Summit Drilling, LLC.

## 📄 License

Copyright ©2026 Summit Drilling, LLC. All rights reserved.

