"use client";
import React from 'react';
import '@/app/globals.css';
import dynamic from 'next/dynamic';
import { SectionDivider } from '@/components/ui/SectionDivider';

const PDFDownloadButton = dynamic(() => import('./PDFDownloadButton'), { ssr: false });

// CSS-in-JS styles with Summit brand identity
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,700&family=Inter:wght@300;400;500;600&display=swap');

:root {
    --summit-red: #C8102E;
    --summit-blue: #003087;
    --summit-teal: #a4c5c5;
    --forest-green: #52755b;
    --dark-gray: #2d3748;
    --medium-gray: #718096;
    --light-gray: #F5F5F7;
}

.deck-container {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #000000;
    background: #fff;
    overflow-x: hidden;
}

/* Page Container */
.page {
    width: 8.5in;
    height: 11in; /* Strict fixed height */
    margin: 20px auto;
    position: relative;
    background: white;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    page-break-after: always;
    overflow: hidden; /* Cut off overflow to ensure fixed size */
}

/* Glass Effects */
.glass-dark {
    background: rgba(120, 168, 168, 0.95);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Page 1 - Cover */
.page-1 {
    background: linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.cover-logo {
    position: absolute;
    top: 40px;
    left: 40px;
    z-index: 10;
    background: rgba(29,29,31,0.85);
    padding: 12px 16px;
    border-radius: 8px;
}

.cover-logo img {
    height: 50px;
    width: auto;
}

.cover-logo span {
    display: block;
    font-size: 11px;
    font-weight: 400;
    color: var(--medium-gray);
    margin-top: 2px;
}

.cover-image-container {
    width: 90%;
    height: 400px;
    border-radius: 24px;
    overflow: hidden;
    margin-bottom: 60px;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
}

.cover-image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.cover-title-container {
    text-align: center;
    position: relative;
    z-index: 5;
}

.cover-accent-bar {
    width: 80px;
    height: 5px;
    background: linear-gradient(90deg, var(--summit-red), var(--summit-blue));
    margin: 0 auto 30px;
    border-radius: 10px;
}

.cover-title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 64px;
    line-height: 1.1;
    margin-bottom: 10px;
    background: linear-gradient(135deg, var(--summit-blue), var(--summit-red));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -2px;
}

.cover-footer {
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 12px;
    color: var(--medium-gray);
}

.cover-footer a {
    color: var(--summit-blue);
    text-decoration: none;
    margin: 0 15px;
    transition: color 0.3s;
}

/* Page Header */
.page-header {
    margin-bottom: 50px;
}

.page-title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 48px;
    color: #000000;
    margin-bottom: 10px;
    letter-spacing: -1px;
}

.page-subtitle {
    font-size: 18px;
    color: #000000;
    font-weight: 300;
}

/* TOC Items */
.toc-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
}

.toc-item:hover {
    padding-left: 10px;
    background: rgba(255,255,255,0.3);
    border-radius: 8px;
}

.toc-item-title {
    font-size: 16px;
    font-weight: 500;
    color: #000000;
}

.toc-item-page {
    font-size: 16px;
    font-weight: 700;
    color: #000000;
}

.toc-image {
    width: 100%;
    height: 180px;
    border-radius: 16px;
    overflow: hidden;
    margin-top: 30px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.toc-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Page 3 - Mission/Vision/Values */
.split-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 30px;
}

.content-section {
    margin-bottom: 30px;
}

.section-heading {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 20px;
    color: #000000;
    margin-bottom: 15px;
}

.section-text {
    font-size: 14px;
    line-height: 1.7;
    color: #000000;
}

.values-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 30px;
}

.value-card {
    padding: 25px;
    border-radius: 16px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.value-icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    font-size: 24px;
}

.value-title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 16px;
    color: white;
    margin-bottom: 10px;
}

.value-description {
    font-size: 14px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.95);
}

.side-image {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.side-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Page 4 - Who We Are */
.timeline-section {
    position: absolute;
    right: 60px;
    top: 120px;
    width: 280px;
    padding: 30px;
    border-radius: 20px;
    background: rgb(166, 80, 39);
    box-shadow: 0 20px 60px rgba(166, 80, 39, 0.4);
}

.timeline-item {
    margin-bottom: 30px;
    position: relative;
    padding-left: 30px;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--summit-red);
    box-shadow: 0 0 0 4px rgba(200, 16, 46, 0.2);
}

.timeline-year {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 16px;
    color: white;
    margin-bottom: 5px;
}

.timeline-text {
    font-size: 11px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
}

.main-content {
    max-width: 420px;
}

/* Page 5 - Services */
.services-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 30px;
}

.service-card {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.service-image {
    width: 100%;
    height: 180px;
    overflow: hidden;
}

.service-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.service-card:hover .service-image img {
    transform: scale(1.1);
}

.service-content {
    padding: 25px;
    background: white;
    height: 100%;
}

.service-header {
    padding: 20px 25px;
    color: white;
}

.service-title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 16px;
    margin-bottom: 10px;
}

.service-description {
    font-size: 14px;
    line-height: 1.6;
    color: #000000;
    margin-bottom: 15px;
}

.service-features {
    margin-top: 15px;
}

.features-title {
    font-weight: 700;
    font-size: 12px;
    color: #000000;
    margin-bottom: 10px;
}

.feature-item {
    font-size: 14px;
    line-height: 1.6;
    color: #000000;
    margin-bottom: 6px;
    padding-left: 15px;
    position: relative;
}

.feature-item::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #000000;
    font-weight: bold;
}

/* Footer */
.page-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: #003d7a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    color: white;
    font-size: 10px;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 8px;
}

.footer-logo img {
    height: 24px;
    width: auto;
}

/* Print Styles */
@media print {
    @page {
        size: 8.5in 11in;
        margin: 0;
    }

    * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        box-sizing: border-box !important;
    }

    body {
        margin: 0;
        padding: 0;
        background: white;
    }

    .deck-container {
        width: 100%;
        background: white;
    }
    
    .page {
        margin: 0 !important;
        /* Minimal padding: 0 top/bottom, 10px left/right per request */
        padding: 0 10px !important; 
        width: 8.5in !important;
        height: 11in !important;
        min-height: 11in !important;
        max-height: 11in !important;
        box-shadow: none !important;
        border: none !important;
        page-break-after: always !important;
        page-break-inside: avoid !important;
        overflow: hidden !important;
        position: relative !important;
        
        /* 100% Scale */
        zoom: 1 !important; 
        transform: none !important;
        display: flex !important;
        flex-direction: column !important;
    }
    
    /* Ensure page titles are properly sized */
    .page-title {
        font-size: 34px !important;
        line-height: 1.2 !important;
    }
    
    /* Relative positioning effectively places headers in flow */
    .page-header {
        position: relative !important;
        width: 100% !important;
        /* Add internal padding to header so text isn't stuck to very top edge */
        padding: 20px 0 20px 0 !important; 
        margin-bottom: 20px !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
    }

    .page-footer {
        position: absolute !important; 
        bottom: 10px !important; /* Minimal bottom offset */
        left: 10px !important;
        right: 10px !important;
        width: auto !important;
    }
    
    /* Content wrapper */
    .page > div:not(.page-header):not(.page-footer) {
        width: 100% !important;
        max-width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
    }

    /* Hide scrollbars */
    ::-webkit-scrollbar {
        display: none;
    }
}
`;

export default function DeckPage() {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <div className="deck-container">
                {/* Page 1: Cover */}
                <div className="page" style={{ padding: 0, position: 'relative', overflow: 'hidden' }}>
                    <img src="/images/deck-cover.jpg" alt="Summit Drilling - An Exceptional Experience" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>

                {/* Page 2: Table of Contents */}
                <div className="page" style={{ padding: '60px', background: 'rgb(164, 197, 197)' }}>
                    <div className="page-header">
                        <h2 className="page-title">Index</h2>
                        <div style={{ width: '60px', height: '4px', background: 'rgb(166, 80, 39)', borderRadius: '4px', marginTop: '10px', marginBottom: '15px' }}></div>
                        <p className="page-subtitle">Table of Contents</p>
                    </div>

                    <div className="toc-item">
                        <span className="toc-item-title">1. Mission | Vision | Values</span>
                        <span className="toc-item-page">03</span>
                    </div>
                    <div className="toc-item">
                        <span className="toc-item-title">2. Who We Are</span>
                        <span className="toc-item-page">04</span>
                    </div>
                    <div className="toc-item">
                        <span className="toc-item-title">3. Services Overview</span>
                        <span className="toc-item-page">05</span>
                    </div>
                    <div className="toc-item">
                        <span className="toc-item-title">4. Specialized Divisions & Strategic Growth</span>
                        <span className="toc-item-page">07</span>
                    </div>
                    <div className="toc-item">
                        <span className="toc-item-title">5. Suite of Services</span>
                        <span className="toc-item-page">09</span>
                    </div>
                    <div className="toc-item">
                        <span className="toc-item-title">6. By the Numbers</span>
                        <span className="toc-item-page">12</span>
                    </div>
                    <div className="toc-item">
                        <span className="toc-item-title">7. Investing in People, Culture, and Long-Term Impact</span>
                        <span className="toc-item-page">14</span>
                    </div>
                    <div className="toc-item">
                        <span className="toc-item-title">8. Project Highlights</span>
                        <span className="toc-item-page">16</span>
                    </div>
                    <div className="toc-item">
                        <span className="toc-item-title">9. Let's Get to Work</span>
                        <span className="toc-item-page">18</span>
                    </div>

                    <div className="toc-image">
                        <img src="/images/remediation/hero-banner.webp" alt="Equipment" />
                    </div>
                    <div className="absolute bottom-10 left-0 right-0 w-full z-30 translate-y-[1px]">
                        <svg className="w-full h-auto block" viewBox="0 0 1280 60" width="100%" style={{ height: '30px' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#003d7a" d="m1280 402.22h-433.84-846.27v-345.68h1280.11z"></path>
                            <path fill="#003d7a" d="m676.21 14.39l84.76-13.54 132.65 20.46 69.65 0.4 109.38 28.05 159.71 31.78h-1232.42l257.96-22.31 155.77-24.28 60.71-2.93 56.39-6.24 51.99 3.27z"></path>
                        </svg>
                    </div>

                    <div className="page-footer">
                        <span className="footer-logo"><img src="/images/summit-logo-scrolled.webp" alt="Summit" /></span>
                        <span>Table of Contents / 02</span>
                    </div>
                </div>


                {/* Page 3: Mission, Vision & Values */}
                <div className="page" style={{ height: '11in', maxHeight: '11in', overflow: 'hidden', padding: '30px 40px', background: 'rgb(164, 197, 197)' }}>
                    <div className="page-header" style={{ marginBottom: '20px' }}>
                        <h2 className="page-title" style={{ fontSize: '32px' }}>Mission, Vision & Values</h2>
                        <div style={{ width: '70px', height: '4px', background: 'linear-gradient(90deg, var(--summit-red), var(--summit-teal))', borderRadius: '4px', marginTop: '10px' }}></div>
                    </div>

                    <div className="split-layout" style={{ gap: '25px', marginTop: '10px' }}>
                        <div className="main-content" style={{ maxWidth: '100%' }}>
                            <div className="content-section" style={{ marginBottom: '20px' }}>
                                <h3 className="section-heading" style={{ marginBottom: '8px', fontSize: '18px' }}>Our Mission</h3>
                                <p className="section-text" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                                    To deliver exceptional environmental and geotechnical drilling services by prioritizing
                                    safety, client partnership, and operational excellence; creating lasting value for our clients,
                                    communities, and the environment.
                                </p>
                            </div>

                            <div className="content-section" style={{ marginBottom: '20px' }}>
                                <h3 className="section-heading" style={{ marginBottom: '8px', fontSize: '18px' }}>Our Vision</h3>
                                <p className="section-text" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                                    To set the industry benchmark for professionalism, performance, and people by
                                    continuously expanding our capabilities, investing in technology, and developing a
                                    workforce grounded in accountability and care.
                                </p>
                            </div>

                            <div className="content-section" style={{ marginBottom: '10px' }}>
                                <h3 className="section-heading" style={{ marginBottom: '8px', fontSize: '18px' }}>Our Values</h3>
                            </div>

                            <div className="values-grid" style={{ marginTop: '10px', gap: '15px' }}>
                                <div className="value-card glass-dark" style={{ padding: '15px' }}>
                                    <div className="value-icon" style={{ marginBottom: '10px', width: '40px', height: '40px', fontSize: '20px' }}>🛡️</div>
                                    <h4 className="value-title" style={{ fontSize: '15px', marginBottom: '5px' }}>Safety</h4>
                                    <p className="value-description" style={{ fontSize: '12px', lineHeight: 1.4 }}>Every decision begins and ends with safety.</p>
                                </div>
                                <div className="value-card glass-dark" style={{ padding: '15px' }}>
                                    <div className="value-icon" style={{ marginBottom: '10px', width: '40px', height: '40px', fontSize: '20px' }}>👤</div>
                                    <h4 className="value-title" style={{ fontSize: '15px', marginBottom: '5px' }}>Ownership</h4>
                                    <p className="value-description" style={{ fontSize: '12px', lineHeight: 1.4 }}>We take full ownership of our work.</p>
                                </div>
                                <div className="value-card glass-dark" style={{ padding: '15px' }}>
                                    <div className="value-icon" style={{ marginBottom: '10px', width: '40px', height: '40px', fontSize: '20px' }}>🤝</div>
                                    <h4 className="value-title" style={{ fontSize: '15px', marginBottom: '5px' }}>Partnership</h4>
                                    <p className="value-description" style={{ fontSize: '12px', lineHeight: 1.4 }}>We build trust through collaboration.</p>
                                </div>
                                <div className="value-card glass-dark" style={{ padding: '15px' }}>
                                    <div className="value-icon" style={{ marginBottom: '10px', width: '40px', height: '40px', fontSize: '20px' }}>⭐</div>
                                    <h4 className="value-title" style={{ fontSize: '15px', marginBottom: '5px' }}>Excellence</h4>
                                    <p className="value-description" style={{ fontSize: '12px', lineHeight: 1.4 }}>Exceeding expectations is our standard.</p>
                                </div>
                            </div>
                        </div>

                        <div className="side-image">
                            <img src="/images/careers/your-career.webp" alt="Team Member" className="pdf-object-fit-cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-0 right-0 w-full z-30 translate-y-[1px]">
                        <svg className="w-full h-auto block" viewBox="0 0 1280 60" width="100%" style={{ height: '30px' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#003d7a" d="m1280 402.22h-433.84-846.27v-345.68h1280.11z"></path>
                            <path fill="#003d7a" d="m676.21 14.39l84.76-13.54 132.65 20.46 69.65 0.4 109.38 28.05 159.71 31.78h-1232.42l257.96-22.31 155.77-24.28 60.71-2.93 56.39-6.24 51.99 3.27z"></path>
                        </svg>
                    </div>

                    <div className="page-footer">
                        <span className="footer-logo"><img src="/images/summit-logo-scrolled.webp" alt="Summit" /></span>
                        <span>Mission, Vision & Values / 03</span>
                    </div>
                </div>

                {/* Page 4: Who We Are */}
                <div className="page" style={{ padding: '60px', position: 'relative', background: 'rgb(164, 197, 197)' }}>
                    <div className="page-header" style={{ marginBottom: 0 }}>
                        <h2 className="page-title">Who We Are</h2>
                        <div style={{ width: '70px', height: '4px', background: 'linear-gradient(90deg, var(--summit-teal), var(--summit-blue))', borderRadius: '4px', marginTop: '10px', marginBottom: '12px' }}></div>
                        <p className="page-subtitle" style={{ marginBottom: '5px' }}>Built on Trust</p>
                    </div>

                    <div className="main-content" style={{ maxWidth: '55%', marginRight: '40px' }}>
                        <div className="content-section">
                            <p className="section-text" style={{ fontStyle: 'italic', fontWeight: 500 }}>
                                Summit Drilling is a trusted environmental and geotechnical drilling partner with more than 50 years
                                of experience helping clients solve complex subsurface challenges.
                            </p>
                        </div>

                        <div className="content-section">
                            <h3 className="section-heading">We specialize in</h3>
                            <p className="section-text">
                                environmental investigation, site remediation support, utility clearance, and specialized drilling
                                services across the Eastern United States. Our clients rely on us for our technical range,
                                operational consistency, and the strong relationships we build on every job.
                            </p>
                        </div>

                        <div className="content-section">
                            <p className="section-text">
                                Summit's operations are shaped by a hands-on leadership team, a field-proven staff, and a culture
                                we call <strong style={{ color: 'var(--summit-blue)' }}>"An Exceptional Experience."</strong> This philosophy
                                drives how we approach every project; with personal ownership, a high safety standard, and a commitment
                                to delivering outcomes that exceed expectations.
                            </p>
                        </div>

                        <div className="content-section">
                            <p className="section-text">
                                Whether it's a sensitive PFAS site, a tight-access urban investigation, or a high-volume injection
                                campaign, we bring the expertise and adaptability needed to get the job done safely and efficiently.
                            </p>
                        </div>

                        <div className="content-section">
                            <h3 className="section-heading">Our History</h3>
                            <p className="section-text">
                                Summit's legacy dates back to the 1950s, when founders Bob Kreilick Sr. and Don Gramer drilled test
                                borings throughout the Northeast. Over the decades, our services expanded and our team grew, while
                                staying grounded in the values that made us successful: safety, integrity, and customer focus.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-section">
                        <div className="timeline-item">
                            <div className="timeline-year">1969</div>
                            <div className="timeline-text">Launched as Summit Well & Pump Co. in Pennsylvania</div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-year">1986</div>
                            <div className="timeline-text">Official founding of Summit Drilling Co., Inc. with 6 employees</div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-year">1995</div>
                            <div className="timeline-text">Introduced direct-push services</div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-year">2009</div>
                            <div className="timeline-text">Added first sonic drill rig; began injection and geophysical services</div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-year">2010-2015</div>
                            <div className="timeline-text">Expanded into new regional offices in NJ, PA, and NY</div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-year">2021-2023</div>
                            <div className="timeline-text">Acquired TPI Environmental, Subsurface Environmental Technologies, Hill Environmental Group</div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-year">Today</div>
                            <div className="timeline-text">Full-service team supporting major firms and government agencies across the Eastern U.S.</div>
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-0 right-0 w-full z-30 translate-y-[1px]">
                        <svg className="w-full h-auto block" viewBox="0 0 1280 60" width="100%" style={{ height: '30px' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#003d7a" d="m1280 402.22h-433.84-846.27v-345.68h1280.11z"></path>
                            <path fill="#003d7a" d="m676.21 14.39l84.76-13.54 132.65 20.46 69.65 0.4 109.38 28.05 159.71 31.78h-1232.42l257.96-22.31 155.77-24.28 60.71-2.93 56.39-6.24 51.99 3.27z"></path>
                        </svg>
                    </div>

                    <div className="page-footer">
                        <span className="footer-logo"><img src="/images/summit-logo-scrolled.webp" alt="Summit" /></span>
                        <span>Who We Are / 04</span>
                    </div>
                </div>

                {/* Page 5: Services Overview */}
                <div className="page" style={{ padding: '60px', background: 'rgb(164, 197, 197)' }}>
                    <div className="page-header">
                        <h2 className="page-title">Services Overview</h2>
                        <p className="page-subtitle">Expertise in Action</p>
                    </div>

                    <div className="content-section">
                        <p className="section-text" style={{ fontWeight: 600, fontSize: '15px' }}>
                            Complete Drilling & Subsurface Solutions - From Concept to Completion
                        </p>
                        <p className="section-text">
                            Summit Drilling delivers a full suite of drilling, investigation, and remediation services tailored to meet
                            the diverse needs of environmental consultants, engineers, and infrastructure partners.
                        </p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-image">
                                <img src="/images/drilling/sonic.webp" alt="Environmental Drilling" />
                            </div>
                            <div className="service-header glass-dark">
                                <h3 className="service-title" style={{ color: 'white', marginBottom: 0 }}>Environmental Drilling & Subsurface Investigation</h3>
                            </div>
                            <div className="service-content" style={{ background: 'rgb(120, 168, 168)', padding: '20px' }}>
                                <p className="service-description" style={{ color: '#fff' }}>
                                    Our crews are trained across multiple drilling technologies and subsurface access methods,
                                    allowing us to match the right approach to your site's needs.
                                </p>
                                <div className="service-features">
                                    <div className="features-title" style={{ color: '#fff' }}>Features</div>
                                    <div className="feature-item" style={{ color: '#fff' }}>Sonic, Mud Rotary, Hollow-Stem Auger, Air Rotary</div>
                                    <div className="feature-item" style={{ color: '#fff' }}>Rock Coring And Probe-Push Tooling</div>
                                    <div className="feature-item" style={{ color: '#fff' }}>Limited-Access And Remote Terrain Drilling</div>
                                    <div className="feature-item" style={{ color: '#fff' }}>Hydropunch And Packer Testing</div>
                                </div>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-image">
                                <img src="/images/remediation/injection.webp" alt="Remediation Services" />
                            </div>
                            <div className="service-header glass-dark">
                                <h3 className="service-title" style={{ color: 'white', marginBottom: 0 }}>Remediation & Injection Services</h3>
                            </div>
                            <div className="service-content" style={{ background: 'rgb(120, 168, 168)', padding: '20px' }}>
                                <p className="service-description" style={{ color: '#fff' }}>
                                    Summit's in-house remediation division brings advanced injection experience and specialized
                                    tooling to deliver precise, high-volume amendments safely.
                                </p>
                                <div className="service-features">
                                    <div className="features-title" style={{ color: '#fff' }}>Features</div>
                                    <div className="feature-item" style={{ color: '#fff' }}>Direct-Push And Pneumatic Injection Systems</div>
                                    <div className="feature-item" style={{ color: '#fff' }}>In-Situ Chemical Oxidation (ISCO) And Reduction (ISCR)</div>
                                    <div className="feature-item" style={{ color: '#fff' }}>High-Resolution Emplacement Strategies</div>
                                    <div className="feature-item" style={{ color: '#fff' }}>Feasibility Testing And Pilot Studies</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-0 right-0 w-full z-30 translate-y-[1px]">
                        <svg className="w-full h-auto block" viewBox="0 0 1280 60" width="100%" style={{ height: '30px' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#003d7a" d="m1280 402.22h-433.84-846.27v-345.68h1280.11z"></path>
                            <path fill="#003d7a" d="m676.21 14.39l84.76-13.54 132.65 20.46 69.65 0.4 109.38 28.05 159.71 31.78h-1232.42l257.96-22.31 155.77-24.28 60.71-2.93 56.39-6.24 51.99 3.27z"></path>
                        </svg>
                    </div>

                    <div className="page-footer">
                        <span className="footer-logo"><img src="/images/summit-logo-scrolled.webp" alt="Summit" /></span>
                        <span>Services Overview / 05</span>
                    </div>
                </div >

                {/* Page 6: Services Continued */}
                <div className="page" style={{ padding: '0 50px 30px', background: 'rgb(164, 197, 197)' }}>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-card-image">
                                <img src="/images/geophysics/borehole-geophysics.webp" alt="PFAS Drilling" />
                            </div>
                            <div className="service-header glass-dark">
                                <h3 className="service-title" style={{ color: 'white', marginBottom: 0 }}>PFAS Drilling & Decontamination Protocols</h3>
                            </div>
                            <div className="service-content" style={{ background: 'rgb(120, 168, 168)', padding: '18px 20px 8px' }}>
                                <p className="service-description" style={{ color: '#fff' }}>
                                    We offer dedicated tooling, training, and field protocols designed specifically for PFAS sites,
                                    minimizing cross-contamination risk.
                                </p>
                                <div className="service-features">
                                    <div className="features-title" style={{ color: '#fff' }}>Features</div>
                                    <div className="feature-item" style={{ color: '#fff' }}>Dedicated PFAS-Only Tooling Kits</div>
                                    <div className="feature-item" style={{ color: '#fff' }}>No-Teflon, PTFE-Free Materials</div>
                                    <div className="feature-item" style={{ color: '#fff' }}>Crew Training In AFFF-Free Decon</div>
                                    <div className="feature-item" style={{ color: '#fff' }}>QA/QC Documentation</div>
                                </div>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-card-image">
                                <img src="/images/geophysics/utility-locating.webp" alt="Geophysical Services" />
                            </div>
                            <div className="service-header glass-dark">
                                <h3 className="service-title" style={{ color: 'white', marginBottom: 0 }}>Geophysical & Utility Locating</h3>
                            </div>
                            <div className="service-content" style={{ background: 'rgb(120, 168, 168)', padding: '18px 20px 20px' }}>
                                <p className="service-description" style={{ color: '#fff' }}>
                                    Summit provides in-house utility clearance and geophysical services to reduce risk before drilling begins.
                                </p>
                                <div className="service-features">
                                    <div className="features-title" style={{ color: '#fff' }}>Features</div>
                                    <div className="feature-item" style={{ color: '#fff' }}>Borehole Geophysics: Caliper, Gamma, Optical</div>
                                    <div className="feature-item" style={{ color: '#fff' }}>Electrical Resistivity And Seismic Refraction</div>
                                    <div className="feature-item" style={{ color: '#fff' }}>Underground Storage Tank (UST) Detection</div>
                                    <div className="feature-item" style={{ color: '#fff' }}>Utility And Septic Line Mapping</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Geotechnical Card - Compacted to fit */}
                    <div style={{ marginTop: '15px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)', background: 'rgb(120, 168, 168)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                            <div style={{ background: 'rgb(120, 168, 168)' }}>
                                <div className="service-header" style={{ background: 'rgb(120, 168, 168)', padding: '15px 20px', display: 'flex', alignItems: 'center' }}>
                                    <h3 className="service-title" style={{ color: 'white', fontSize: '15px', margin: 0, lineHeight: 1.2 }}>Geotechnical & Infrastructure Support</h3>
                                </div>
                                <div className="service-content" style={{ padding: '15px 20px', background: 'rgb(120, 168, 168)' }}>
                                    <p className="service-description" style={{ fontSize: '12px', marginBottom: '10px', lineHeight: 1.5, color: '#fff' }}>
                                        We support geotechnical site investigations, aggregate drilling, barge-mounted access, and other infrastructure-related projects.
                                    </p>
                                    <div className="service-features">
                                        <div className="features-title" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#fff', marginBottom: '5px' }}>Features</div>
                                        <div className="feature-item" style={{ fontSize: '11px', marginBottom: '2px', paddingLeft: '10px', display: 'flex', alignItems: 'center', color: '#fff' }}>
                                            <span style={{ color: '#fff', marginRight: '6px' }}>•</span>CPT And SPT Sampling
                                        </div>
                                        <div className="feature-item" style={{ fontSize: '11px', marginBottom: '2px', paddingLeft: '10px', display: 'flex', alignItems: 'center', color: '#fff' }}>
                                            <span style={{ color: '#fff', marginRight: '6px' }}>•</span>Rock Coring (BQ, NQ, HQ, PQ)
                                        </div>
                                        <div className="feature-item" style={{ fontSize: '11px', marginBottom: '2px', paddingLeft: '10px', display: 'flex', alignItems: 'center', color: '#fff' }}>
                                            <span style={{ color: '#fff', marginRight: '6px' }}>•</span>Instrumentation Installation
                                        </div>
                                        <div className="feature-item" style={{ fontSize: '11px', marginBottom: '2px', paddingLeft: '10px', display: 'flex', alignItems: 'center', color: '#fff' }}>
                                            <span style={{ color: '#fff', marginRight: '6px' }}>•</span>Packer Testing
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-card-image" style={{ height: '100%', minHeight: '220px', backgroundImage: 'url(/images/drilling/air-rotary.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        </div>
                    </div>

                    <div className="content-section" style={{ marginTop: '15px' }}>
                        <p className="section-text" style={{ fontStyle: 'italic', textAlign: 'center' }}>
                            Summit's multi-disciplinary approach means fewer subcontractors, smoother project execution,
                            and faster path to results. Whatever your project demands, we're built to deliver.
                        </p>
                    </div>
                    <div className="absolute bottom-10 left-0 right-0 w-full z-30 translate-y-[1px]">
                        <svg className="w-full h-auto block" viewBox="0 0 1280 60" width="100%" style={{ height: '30px' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#003d7a" d="m1280 402.22h-433.84-846.27v-345.68h1280.11z"></path>
                            <path fill="#003d7a" d="m676.21 14.39l84.76-13.54 132.65 20.46 69.65 0.4 109.38 28.05 159.71 31.78h-1232.42l257.96-22.31 155.77-24.28 60.71-2.93 56.39-6.24 51.99 3.27z"></path>
                        </svg>
                    </div>

                    <div className="page-footer">
                        <span className="footer-logo"><img src="/images/summit-logo-scrolled.webp" alt="Summit" /></span>
                        <span>Services Overview / 06</span>
                    </div>
                </div>

                {/* Page 7: Specialized Divisions & Strategic Growth */}
                <div className="page" style={{ padding: '48px 56px 50px', background: 'rgb(164, 197, 197)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-80px', right: '-60px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,48,135,0.06) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

                    <div style={{ marginBottom: '16px' }}>
                        <h2 className="page-title" style={{ fontSize: '40px', marginBottom: '2px' }}>Specialized Divisions</h2>
                        <p className="page-subtitle" style={{ fontSize: '21px', color: 'var(--summit-blue)', fontWeight: 600 }}>& Strategic Growth</p>
                        <div style={{ width: '70px', height: '4px', background: 'linear-gradient(90deg, var(--summit-red), var(--summit-blue))', borderRadius: '4px', marginTop: '10px' }}></div>
                    </div>

                    <p className="section-text" style={{ fontStyle: 'italic', fontSize: '12.5px', lineHeight: 1.6, maxWidth: '96%', marginBottom: '4px' }}>
                        Over the years, Summit Drilling has expanded its expertise through the strategic integration of several respected industry leaders.
                    </p>
                    <p className="section-text" style={{ fontStyle: 'italic', fontSize: '12.5px', lineHeight: 1.6, maxWidth: '96%', marginBottom: '16px' }}>
                        What began as a drilling firm has grown into a full-service subsurface solutions partner capable of supporting environmental investigation, site remediation, and infrastructure development across the Eastern United States.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '22px', marginBottom: '20px' }}>
                        <div className="glass-dark" style={{ borderRadius: '18px', padding: '24px' }}>
                            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(200,16,46,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', fontSize: '17px' }}>🔧</div>
                            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '15px', color: '#fff', marginBottom: '8px' }}>Summit Injection &<br />Remediation Services</h3>
                            <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)' }}>Our in-house injection team is supported by decades of hands-on experience in delivering in-situ remedial strategies for complex sites.</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', justifyContent: 'center' }}>
                            <div style={{ background: 'rgba(0,48,135,0.06)', border: '1px solid rgba(0,48,135,0.12)', borderRadius: '12px', padding: '12px 16px', fontSize: '12.5px', color: 'var(--dark-gray)', fontWeight: 500 }}>Pneumatic and direct-push systems</div>
                            <div style={{ background: 'rgba(0,48,135,0.06)', border: '1px solid rgba(0,48,135,0.12)', borderRadius: '12px', padding: '12px 16px', fontSize: '12.5px', color: 'var(--dark-gray)', fontWeight: 500 }}>Multi-reagent compatibility (ZVI, emulsified oil, carbon-based amendments)</div>
                            <div style={{ background: 'rgba(0,48,135,0.06)', border: '1px solid rgba(0,48,135,0.12)', borderRadius: '12px', padding: '12px 16px', fontSize: '12.5px', color: 'var(--dark-gray)', fontWeight: 500 }}>High-volume injections with minimal disruption</div>
                            <div style={{ background: 'rgba(0,48,135,0.06)', border: '1px solid rgba(0,48,135,0.12)', borderRadius: '12px', padding: '12px 16px', fontSize: '12.5px', color: 'var(--dark-gray)', fontWeight: 500 }}>Pilot testing, modeling, and monitoring support</div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '22px', alignItems: 'start' }}>
                        <div>
                            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '17px', color: 'var(--dark-gray)', marginBottom: '5px' }}>Summit Geophysics & Utility Locating</h3>
                            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#000000', marginBottom: '12px' }}>This specialized team offers advanced geophysical surveys and underground utility mapping to de-risk drilling and provide key subsurface insights.</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}><span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgb(166, 80, 39)', flexShrink: 0 }}></span><span style={{ fontSize: '14px', color: 'var(--dark-gray)', fontWeight: 500 }}>Borehole Logging And Stratigraphic Profiling</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}><span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgb(166, 80, 39)', flexShrink: 0 }}></span><span style={{ fontSize: '14px', color: 'var(--dark-gray)', fontWeight: 500 }}>Utility And UST Detection</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}><span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgb(166, 80, 39)', flexShrink: 0 }}></span><span style={{ fontSize: '14px', color: 'var(--dark-gray)', fontWeight: 500 }}>Seismic And Resistivity Imaging</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}><span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgb(166, 80, 39)', flexShrink: 0 }}></span><span style={{ fontSize: '14px', color: 'var(--dark-gray)', fontWeight: 500 }}>Pre-Drilling Clearance And Documentation</span></div>
                            </div>
                        </div>
                        <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.12)', height: '195px' }}>
                            <img src="/images/geophysics/utility-locating-banner.webp" alt="Geophysics" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-0 right-0 w-full z-30 translate-y-[1px]">
                        <svg className="w-full h-auto block" viewBox="0 0 1280 60" width="100%" style={{ height: '30px' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#003d7a" d="m1280 402.22h-433.84-846.27v-345.68h1280.11z"></path>
                            <path fill="#003d7a" d="m676.21 14.39l84.76-13.54 132.65 20.46 69.65 0.4 109.38 28.05 159.71 31.78h-1232.42l257.96-22.31 155.77-24.28 60.71-2.93 56.39-6.24 51.99 3.27z"></path>
                        </svg>
                    </div>

                    <div className="page-footer">
                        <span className="footer-logo"><img src="/images/summit-logo-scrolled.webp" alt="Summit" /></span>
                        <span>Specialized Divisions & Strategic Growth / 07</span>
                    </div>
                </div >

                {/* Page 8: Acquisitions */}
                < div className="page" style={{ padding: '48px 56px 50px', background: 'rgb(164, 197, 197)', position: 'relative', overflow: 'hidden' }}>
                    <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '26px', color: 'var(--dark-gray)', marginBottom: '7px' }}>Acquisitions That Expanded Our Reach</h2>
                    <p style={{ fontSize: '12.5px', lineHeight: 1.6, color: '#000000', marginBottom: '24px', maxWidth: '90%' }}>Summit's growth is driven by more than investment — it's rooted in integration. The following acquisitions have strengthened our geographic presence and deepened our technical bench:</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        {/* TPI */}
                        <div style={{ display: 'flex', flexDirection: 'column', borderRadius: '16px', overflow: 'hidden', background: 'rgba(0,48,135,0.03)', border: '1px solid rgba(0,48,135,0.10)', boxShadow: '0 4px 18px rgba(0,0,0,0.06)' }}>
                            <div style={{ height: '140px', overflow: 'hidden' }}><img src="/images/remediation/injection.webp" alt="TPI Environmental" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                            <div style={{ padding: '16px 18px 18px' }}>
                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '14px', color: 'var(--dark-gray)', marginBottom: '5px' }}>TPI Environmental <span style={{ color: '#000000', fontWeight: 400, fontSize: '13.5px' }}>(NJ)</span></h3>
                                <div style={{ width: '42px', height: '3px', background: 'linear-gradient(90deg, var(--summit-blue), var(--summit-red))', borderRadius: '3px', marginBottom: '7px' }}></div>
                                <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.55 }}>Enhanced regional reach and expanded geotechnical capabilities.</p>
                            </div>
                        </div>
                        {/* SET */}
                        <div style={{ display: 'flex', flexDirection: 'column', borderRadius: '16px', overflow: 'hidden', background: 'rgba(200,16,46,0.03)', border: '1px solid rgba(200,16,46,0.10)', boxShadow: '0 4px 18px rgba(0,0,0,0.06)' }}>
                            <div style={{ height: '140px', overflow: 'hidden' }}><img src="/images/remediation/in-situ.webp" alt="Subsurface Env Tech" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                            <div style={{ padding: '16px 18px 18px' }}>
                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '14px', color: 'var(--dark-gray)', marginBottom: '5px' }}>Subsurface Env. Technologies <span style={{ color: '#000000', fontWeight: 400, fontSize: '13.5px' }}>(PA)</span></h3>
                                <div style={{ width: '42px', height: '3px', background: 'linear-gradient(90deg, var(--summit-blue), var(--summit-red))', borderRadius: '3px', marginBottom: '7px' }}></div>
                                <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.55 }}>Injection and overburden/bedrock drilling capacity.</p>
                            </div>
                        </div>
                        {/* Hill */}
                        <div style={{ display: 'flex', flexDirection: 'column', borderRadius: '16px', overflow: 'hidden', background: 'rgba(0,48,135,0.03)', border: '1px solid rgba(0,48,135,0.10)', boxShadow: '0 4px 18px rgba(0,0,0,0.06)' }}>
                            <div style={{ height: '140px', overflow: 'hidden' }}><img src="/images/drilling/direct-push.webp" alt="Hill Environmental" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                            <div style={{ padding: '16px 18px 18px' }}>
                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '14px', color: 'var(--dark-gray)', marginBottom: '5px' }}>Hill Environmental Group <span style={{ color: '#000000', fontWeight: 400, fontSize: '13.5px' }}>(NY)</span></h3>
                                <div style={{ width: '42px', height: '3px', background: 'linear-gradient(90deg, var(--summit-blue), var(--summit-red))', borderRadius: '3px', marginBottom: '7px' }}></div>
                                <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.55 }}>Strengthened environmental drilling and site investigation services.</p>
                            </div>
                        </div>
                        {/* SAEDACCO */}
                        <div style={{ display: 'flex', flexDirection: 'column', borderRadius: '16px', overflow: 'hidden', background: 'rgba(200,16,46,0.03)', border: '1px solid rgba(200,16,46,0.10)', boxShadow: '0 4px 18px rgba(0,0,0,0.06)' }}>
                            <div style={{ height: '140px', overflow: 'hidden' }}><img src="/images/projects/linden-banner.webp" alt="SAEDACCO" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                            <div style={{ padding: '16px 18px 18px' }}>
                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '14px', color: 'var(--dark-gray)', marginBottom: '5px' }}>SAEDACCO <span style={{ color: '#000000', fontWeight: 400, fontSize: '13.5px' }}>(SC)</span></h3>
                                <div style={{ width: '42px', height: '3px', background: 'linear-gradient(90deg, var(--summit-blue), var(--summit-red))', borderRadius: '3px', marginBottom: '7px' }}></div>
                                <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.55 }}>Deep experience in injection, remediation, and barge-access drilling in the Southeast U.S.</p>
                            </div>
                        </div>
                    </div>

                    <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.6, marginTop: '20px', fontStyle: 'italic' }}>Each of these teams now operates as part of Summit Drilling, aligned under a single culture of safety, ownership, and client-first performance.</p>
                    <div className="absolute bottom-10 left-0 right-0 w-full z-30 translate-y-[1px]">
                        <svg className="w-full h-auto block" viewBox="0 0 1280 60" width="100%" style={{ height: '30px' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#003d7a" d="m1280 402.22h-433.84-846.27v-345.68h1280.11z"></path>
                            <path fill="#003d7a" d="m676.21 14.39l84.76-13.54 132.65 20.46 69.65 0.4 109.38 28.05 159.71 31.78h-1232.42l257.96-22.31 155.77-24.28 60.71-2.93 56.39-6.24 51.99 3.27z"></path>
                        </svg>
                    </div>

                    <div className="page-footer">
                        <span className="footer-logo"><img src="/images/summit-logo-scrolled.webp" alt="Summit" /></span>
                        <span>Specialized Divisions & Strategic Growth / 08</span>
                    </div>
                </div >

                {/* Page 9: Suite of Services */}
                < div className="page" style={{ padding: '44px 56px 50px', background: 'rgb(164, 197, 197)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ marginBottom: '12px' }}>
                        <h2 className="page-title" style={{ fontSize: '40px', marginBottom: '2px' }}>Suite of Services</h2>
                        <p className="page-subtitle" style={{ fontSize: '21px', color: 'var(--summit-blue)', fontWeight: 600 }}>Every Site Covered</p>
                        <div style={{ width: '70px', height: '4px', background: 'linear-gradient(90deg, var(--summit-red), var(--summit-blue))', borderRadius: '4px', marginTop: '10px' }}></div>
                    </div>

                    <p style={{ fontSize: '12.5px', fontStyle: 'italic', color: 'var(--summit-blue)', fontWeight: 600, marginBottom: '5px' }}>Tailored Solutions for Any Subsurface Challenge</p>
                    <p className="section-text" style={{ fontSize: '14px', lineHeight: 1.6, maxWidth: '96%', marginBottom: '14px' }}>Whether it's environmental investigation, remedial implementation, or infrastructure support, Summit Drilling brings unmatched adaptability, technical range, and field-tested expertise.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.82fr', gap: '24px', alignItems: 'start' }}>
                        <div>
                            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '17px', color: 'rgb(166, 80, 39)', marginBottom: '5px' }}>Environmental & Geotechnical Drilling</h3>
                            <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.5, marginBottom: '12px' }}>We offer a broad range of drilling methods and configurations, matched to your site's geology, access limitations, and investigation needs.</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                {['Sonic Drilling (track and truck-mounted)', 'Mud Rotary / Hollow-Stem Auger', 'Direct Push / Geoprobe Tooling', 'Air Rotary & Rock Coring', 'Probe-Push and Limited Access Drilling', 'Groundwater Monitoring Well Installation', 'Soil Vapor / Soil / Groundwater Sampling', 'SPT, CPT, and Geotechnical Sampling'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', background: 'rgba(0,48,135,0.04)', borderRadius: '9px', padding: '8px 13px' }}>
                                        <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgb(166, 80, 39)', flexShrink: 0 }}></span>
                                        <span style={{ fontSize: '14px', color: 'var(--dark-gray)', fontWeight: 500 }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ borderRadius: '18px', overflow: 'hidden', boxShadow: '0 16px 50px rgba(0,0,0,0.14)', height: '100%', minHeight: '430px' }}>
                            <img src="/images/drilling/hero-banner.webp" alt="Drilling Rig" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-0 right-0 w-full z-30 translate-y-[1px]">
                        <svg className="w-full h-auto block" viewBox="0 0 1280 60" width="100%" style={{ height: '30px' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#003d7a" d="m1280 402.22h-433.84-846.27v-345.68h1280.11z"></path>
                            <path fill="#003d7a" d="m676.21 14.39l84.76-13.54 132.65 20.46 69.65 0.4 109.38 28.05 159.71 31.78h-1232.42l257.96-22.31 155.77-24.28 60.71-2.93 56.39-6.24 51.99 3.27z"></path>
                        </svg>
                    </div>

                    <div className="page-footer">
                        <span className="footer-logo"><img src="/images/summit-logo-scrolled.webp" alt="Summit" /></span>
                        <span>Suite of Services / 09</span>
                    </div>
                </div >

                {/* Page 10: Site Characterization + Remediation */}
                < div className="page" style={{ padding: '44px 56px 50px', background: 'rgb(164, 197, 197)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', right: '56px', top: '44px', width: '250px', height: 'calc(100% - 140px)', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 16px 50px rgba(0,0,0,0.14)' }}>
                        <img src="/images/remediation/hero-banner.webp" alt="Worker" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div style={{ maxWidth: 'calc(100% - 275px)' }}>
                        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '19px', color: 'rgb(166, 80, 39)', marginBottom: '5px' }}>Site Characterization & Utility Clearance</h3>
                        <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.55, marginBottom: '12px' }}>Our geophysical and utility locating services reduce risk and improve project efficiency by providing actionable data before drilling begins.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
                            {['Borehole Logging (caliper, gamma, optical)', 'Electrical Resistivity / Seismic Refraction', 'Utility and Septic Line Mapping', 'Underground Storage Tank (UST) Detection', 'Pre-Drilling Clearance / Geophysical Surveying'].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', background: 'rgba(0,48,135,0.04)', borderRadius: '9px', padding: '8px 13px' }}>
                                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgb(166, 80, 39)', flexShrink: 0 }}></span>
                                    <span style={{ fontSize: '14px', color: 'var(--dark-gray)', fontWeight: 500 }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '19px', color: 'rgb(166, 80, 39)', marginBottom: '5px' }}>Remediation & Injection Implementation</h3>
                        <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.55, marginBottom: '12px' }}>Our in-house injection teams are trained in advanced chemical delivery methods and supported by real-time monitoring and QA/QC.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {['Direct Push & Pneumatic Injection Systems', 'In-Situ Chemical Oxidation (ISCO)', 'In-Situ Chemical Reduction (ISCR)', 'Substrate Emplacement (ZVI, carbon, emulsified oils)', 'High-Volume Injection Projects', 'Amendment Mixing, Staging, and Tracking', 'Pilot Testing and Site Feasibility Support'].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', background: 'rgba(0,48,135,0.04)', borderRadius: '9px', padding: '8px 13px' }}>
                                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgb(166, 80, 39)', flexShrink: 0 }}></span>
                                    <span style={{ fontSize: '14px', color: 'var(--dark-gray)', fontWeight: 500 }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-0 right-0 w-full z-30 translate-y-[1px]">
                        <svg className="w-full h-auto block" viewBox="0 0 1280 60" width="100%" style={{ height: '30px' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#003d7a" d="m1280 402.22h-433.84-846.27v-345.68h1280.11z"></path>
                            <path fill="#003d7a" d="m676.21 14.39l84.76-13.54 132.65 20.46 69.65 0.4 109.38 28.05 159.71 31.78h-1232.42l257.96-22.31 155.77-24.28 60.71-2.93 56.39-6.24 51.99 3.27z"></path>
                        </svg>
                    </div>

                    <div className="page-footer">
                        <span className="footer-logo"><img src="/images/summit-logo-scrolled.webp" alt="Summit" /></span>
                        <span>Suite of Services / 10</span>
                    </div>
                </div >

                {/* Page 11: PFAS Drilling Protocols */}
                < div className="page" style={{ padding: 0, background: 'rgb(164, 197, 197)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '44px 56px 24px', flexShrink: 0 }}>
                        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '21px', color: 'rgb(166, 80, 39)', marginBottom: '5px' }}>PFAS Drilling Protocols</h3>
                        <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.6, marginBottom: '16px' }}>We follow strict contamination control procedures designed for sensitive PFAS and emerging contaminant sites.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                            {['PFAS-Compliant Tooling (Teflon-free, dedicated kits)', 'Equipment Decontamination & QA Tracking', 'AFFF-Free Operations', 'Crew Training for Cross-Contamination Prevention', 'Documentation for Defensible Data'].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', background: 'rgba(0,48,135,0.04)', borderRadius: '9px', padding: '9px 13px' }}>
                                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgb(166, 80, 39)', flexShrink: 0 }}></span>
                                    <span style={{ fontSize: '14px', color: 'var(--dark-gray)', fontWeight: 500 }}>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.6, marginTop: '16px', fontStyle: 'italic' }}>Summit's integrated service model gives our clients the advantage of centralized communication, streamlined coordination, and consistent quality, from planning to fieldwork to reporting.</p>
                    </div>

                    <div style={{ flex: 1, minHeight: '310px', overflow: 'hidden', position: 'relative' }}>
                        <img src="/images/drilling/hero-banner.webp" alt="Drill Site" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55px', background: 'linear-gradient(to bottom, transparent, rgba(0,48,135,0.7))' }}></div>
                    </div>

                    <div className="page-footer" style={{ position: 'relative' }}>
                        <span className="footer-logo"><img src="/images/summit-logo-scrolled.webp" alt="Summit" /></span>
                        <span>Suite of Services / 11</span>
                    </div>
                </div >

                {/* Page 12: By The Numbers */}
                < div className="page" style={{ padding: '44px 56px 50px', background: 'rgb(164, 197, 197)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ marginBottom: '12px' }}>
                        <h2 className="page-title" style={{ fontSize: '40px', marginBottom: '2px' }}>By The Numbers</h2>
                        <p className="page-subtitle" style={{ fontSize: '21px', color: 'var(--summit-blue)', fontWeight: 600 }}>Driven by Quality</p>
                        <div style={{ width: '70px', height: '4px', background: 'linear-gradient(90deg, var(--summit-red), var(--summit-blue))', borderRadius: '4px', marginTop: '10px' }}></div>
                    </div>

                    <p className="section-text" style={{ fontSize: '12.5px', lineHeight: 1.6, maxWidth: '96%', marginBottom: '18px' }}>Summit Drilling has the people, equipment, and operational footprint to support projects of any size across the Eastern United States.</p>

                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '17px', color: 'rgb(166, 80, 39)', marginBottom: '12px' }}>Summit at a glance</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '155px 1fr', gap: '18px', alignItems: 'center', padding: '14px', borderRadius: '16px', background: 'rgba(0,48,135,0.04)', border: '1px solid rgba(0,48,135,0.08)' }}>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', height: '105px' }}><img src="/images/careers/hero.webp" alt="Employees" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                            <div>
                                <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '17px', color: 'var(--dark-gray)', marginBottom: '4px' }}>75+ Employees</h4>
                                <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.5 }}>Field crews, drillers, injection specialists, safety personnel, and project managers.</p>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '155px 1fr', gap: '18px', alignItems: 'center', padding: '14px', borderRadius: '16px', background: 'rgba(200,16,46,0.03)', border: '1px solid rgba(200,16,46,0.08)' }}>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', height: '105px' }}><img src="/images/projects/charlotte-airport-banner.webp" alt="Multi-State" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                            <div>
                                <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '17px', color: 'var(--dark-gray)', marginBottom: '4px' }}>Multi-State Coverage</h4>
                                <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.5 }}>Operating across the East Coast from Massachusetts to Georgia, and west through Tennessee and Alabama.</p>
                            </div>
                        </div>
                    </div>

                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '17px', color: 'rgb(166, 80, 39)', marginBottom: '5px' }}>Fleet Capabilities</h3>
                    <p style={{ fontSize: '14px', color: '#000000', marginBottom: '10px' }}>Our modern fleet includes:</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                        <div className="glass-dark" style={{ borderRadius: '16px', padding: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {['Sonic Drilling (Track And Truck-Mounted)', 'Hollow-Stem Auger', 'Mud Rotary', 'Air Rotary', 'Direct Push / Geoprobe', 'Limited Access Tooling', 'Barge-Access Equipment'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgb(166, 80, 39)', flexShrink: 0 }}></span>
                                        <span style={{ fontSize: '14px', color: '#fff', fontWeight: 500 }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}>
                            <img src="/images/drilling/sonic.webp" alt="Fleet" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-0 right-0 w-full z-30 translate-y-[1px]">
                        <svg className="w-full h-auto block" viewBox="0 0 1280 60" width="100%" style={{ height: '30px' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#003d7a" d="m1280 402.22h-433.84-846.27v-345.68h1280.11z"></path>
                            <path fill="#003d7a" d="m676.21 14.39l84.76-13.54 132.65 20.46 69.65 0.4 109.38 28.05 159.71 31.78h-1232.42l257.96-22.31 155.77-24.28 60.71-2.93 56.39-6.24 51.99 3.27z"></path>
                        </svg>
                    </div>

                    <div className="page-footer">
                        <span className="footer-logo"><img src="/images/summit-logo-scrolled.webp" alt="Summit" /></span>
                        <span>By The Numbers / 12</span>
                    </div>
                </div >

                {/* Page 13: 6+ Locations */}
                < div className="page" style={{ padding: 0, background: 'linear-gradient(155deg, #1a3a8a 0%, #003087 40%, #00246d 100%)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-120px', left: '-100px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

                    <div style={{ padding: '44px 56px 0' }}>
                        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '42px', color: '#fff', marginBottom: 0, letterSpacing: '-1px' }}>6+ Locations</h2>
                    </div>

                    <div style={{ padding: '24px 56px', display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
                        {/* Text List of Locations */}
                        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr', gap: '14px' }}>
                            {[
                                { name: 'Bridgewater, NJ', label: '(Headquarters)' },
                                { name: 'Albany, NY', label: '' },
                                { name: 'Runnemede, NJ', label: '' },
                                { name: 'Mount Laurel, NJ', label: '' },
                                { name: 'Warrington, PA', label: '' },
                                { name: 'Jackson Township, NJ', label: '' },
                                { name: 'Easton, PA', label: '' },
                                { name: 'Rock Hill, SC', label: '(SAEDACCO)' },
                            ].map((loc, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '12px 18px' }}>
                                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: i === 0 ? '#C8102E' : '#fff', flexShrink: 0 }}></span>
                                    <div>
                                        <span style={{ fontSize: '14px', color: '#fff', fontWeight: 600 }}>{loc.name}</span>
                                        {loc.label && <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginLeft: '6px' }}>{loc.label}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Smaller Clean Map */}
                        <div style={{ width: '320px', background: '#fff', borderRadius: '20px', padding: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', flexShrink: 0 }}>
                            <img src="/images/about/us_map_clean.png" alt="Map" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </div>

                    <div style={{ padding: '0 56px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '16px', padding: '22px 24px', backdropFilter: 'blur(6px)' }}>
                            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '16px', color: '#fff', marginBottom: '8px' }}>24/7 Fleet Maintenance Support</h3>
                            <div style={{ width: '40px', height: '2.5px', background: 'linear-gradient(90deg, var(--summit-red), rgba(255,255,255,0.4))', borderRadius: '2px', marginBottom: '10px' }}></div>
                            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>Preventative maintenance and responsive service minimize downtime and ensure consistent performance.</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '16px', padding: '22px 24px', backdropFilter: 'blur(6px)' }}>
                            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '16px', color: '#fff', marginBottom: '8px' }}>Built To Mobilize</h3>
                            <div style={{ width: '40px', height: '2.5px', background: 'linear-gradient(90deg, var(--summit-red), rgba(255,255,255,0.4))', borderRadius: '2px', marginBottom: '10px' }}></div>
                            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>Summit's investment in fleet diversification means we adapt to terrain, access, and client timelines.</p>
                        </div>
                    </div>

                    <div className="page-footer" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(90deg, rgba(0,36,109,0.95), rgba(0,48,135,0.95))' }}>
                        <span className="footer-logo"><img src="/images/summit-logo-scrolled.webp" alt="Summit" /></span>
                        <span>By The Numbers / 13</span>
                    </div>
                </div >

                {/* Page 14: Investing in People Culture */}
                < div className="page" style={{ padding: '44px 56px 50px', background: 'rgb(164, 197, 197)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <h2 className="page-title" style={{ fontSize: '38px', marginBottom: 0, lineHeight: 1.15 }}>Investing in People Culture</h2>
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '22px', color: 'var(--summit-blue)', fontWeight: 600, marginTop: '2px' }}>& Long-Term Impact</p>
                        <div style={{ width: '70px', height: '4px', background: 'linear-gradient(90deg, var(--summit-red), var(--summit-blue))', borderRadius: '4px', marginTop: '10px' }}></div>
                    </div>

                    <p style={{ fontSize: '14px', fontStyle: 'italic', color: 'var(--summit-blue)', fontWeight: 600, marginBottom: '8px' }}>Our Commitment to Responsibility Starts With the People Who Make It Possible</p>
                    <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.6, marginBottom: '14px' }}>At Summit Drilling, sustainability begins with how we operate — safely, responsibly, and with long-term relationships in mind. We believe our most valuable assets don't roll in on rigs. They show up every day ready to own their work.</p>

                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: 'var(--summit-blue)', fontWeight: 700, marginBottom: '10px' }}>
                        Training the Next Generation of Drill Leaders
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                        <div style={{ borderRadius: '14px', overflow: 'hidden', height: '175px', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}><img src="/images/careers/your-career.webp" alt="Training 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                        <div style={{ borderRadius: '14px', overflow: 'hidden', height: '175px', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}><img src="/images/careers/hero.webp" alt="Training 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                    </div>

                    <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.6, marginBottom: '10px' }}>Summit's <strong style={{ color: 'var(--summit-blue)' }}>Driller Apprentice Training Program</strong> is designed to build skilled professionals from the ground up. Apprentices receive hands-on mentoring, safety training, and equipment experience.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        {['Structured Learning And Certifications', 'Mentorship From Senior Drillers', 'Career Progression For Both Field And Leadership Roles'].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                                <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgb(166, 80, 39)', flexShrink: 0 }}></span>
                                <span style={{ fontSize: '14px', color: 'var(--dark-gray)', fontWeight: 500 }}>{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Bottom image banner */}
                    <div style={{ marginTop: '20px', borderRadius: '14px', overflow: 'hidden', height: '140px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>
                        <img src="/images/careers/positions.webp" alt="Summit Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="absolute bottom-10 left-0 right-0 w-full z-30 translate-y-[1px]">
                        <svg className="w-full h-auto block" viewBox="0 0 1280 60" width="100%" style={{ height: '30px' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#003d7a" d="m1280 402.22h-433.84-846.27v-345.68h1280.11z"></path>
                            <path fill="#003d7a" d="m676.21 14.39l84.76-13.54 132.65 20.46 69.65 0.4 109.38 28.05 159.71 31.78h-1232.42l257.96-22.31 155.77-24.28 60.71-2.93 56.39-6.24 51.99 3.27z"></path>
                        </svg>
                    </div>

                    <div className="page-footer">
                        <span className="footer-logo"><img src="/images/summit-logo-scrolled.webp" alt="Summit" /></span>
                        <span>Investing in People, Culture, and Long-Term Impact / 14</span>
                    </div>
                </div >

                {/* Page 15: Veterans Welcome / Benefits */}
                < div className="page" style={{ padding: '44px 56px 50px', background: 'rgb(164, 197, 197)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
                        {/* Left Column */}
                        <div>
                            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: 'var(--summit-blue)', fontWeight: 700, marginBottom: '10px' }}>
                                Veterans Welcome
                            </h3>
                            <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.6, marginBottom: '18px' }}>We actively recruit military veterans for their discipline, problem-solving skills, and field-readiness. Our crews thrive on clear leadership, respect, and mission-focused work.</p>

                            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: 'var(--summit-blue)', fontWeight: 700, marginBottom: '10px' }}>
                                Benefits & Workplace Culture
                            </h3>
                            <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.6, marginBottom: '18px' }}>We offer competitive benefits, 401(K), PTO, and professional development because we want our team to grow with us.</p>

                            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: 'var(--summit-blue)', fontWeight: 700, marginBottom: '10px' }}>
                                Doing the Right Thing
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                                {['Proper Waste Handling And Environmental Controls', 'PFAS Decon Protocols To Prevent Cross-Contamination', 'Local Hiring To Support Regional Economies', 'Safety-First Execution With Long-Term Project Outcomes In Mind'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                                        <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgb(166, 80, 39)', flexShrink: 0 }}></span>
                                        <span style={{ fontSize: '13.5px', color: 'var(--dark-gray)', fontWeight: 500 }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Images */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '200px', boxShadow: '0 10px 40px rgba(0,0,0,0.12)' }}>
                                <img src="/images/drilling/hero-banner.webp" alt="Drilling Operations" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '200px', boxShadow: '0 10px 40px rgba(0,0,0,0.12)' }}>
                                <img src="/images/health-safety-banner.webp" alt="Safety First" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>

                    <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.6, marginTop: '20px', fontStyle: 'italic', textAlign: 'center' }}>We don't just show up to drill. We show up to help you protect the environment, support your data integrity, and bring your project across the finish line.</p>

                    {/* Bottom image banner */}
                    <div style={{ marginTop: '20px', borderRadius: '14px', overflow: 'hidden', height: '354px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>
                        <img src="/images/careers/path.webp" alt="Summit Careers" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="absolute bottom-10 left-0 right-0 w-full z-30 translate-y-[1px]">
                        <svg className="w-full h-auto block" viewBox="0 0 1280 60" width="100%" style={{ height: '30px' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#003d7a" d="m1280 402.22h-433.84-846.27v-345.68h1280.11z"></path>
                            <path fill="#003d7a" d="m676.21 14.39l84.76-13.54 132.65 20.46 69.65 0.4 109.38 28.05 159.71 31.78h-1232.42l257.96-22.31 155.77-24.28 60.71-2.93 56.39-6.24 51.99 3.27z"></path>
                        </svg>
                    </div>

                    <div className="page-footer">
                        <span className="footer-logo"><img src="/images/summit-logo-scrolled.webp" alt="Summit" /></span>
                        <span>Investing in People, Culture, and Long-Term Impact / 15</span>
                    </div>
                </div >

                {/* Page 16: Project Highlights – Case Studies 1 & 2 */}
                < div className="page" style={{ padding: '44px 56px 50px', background: 'rgb(164, 197, 197)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <h2 className="page-title" style={{ fontSize: '40px', marginBottom: '2px' }}>Project Highlights</h2>
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '22px', color: 'var(--summit-blue)', fontWeight: 600 }}>Case Study</p>
                        <div style={{ width: '70px', height: '4px', background: 'linear-gradient(90deg, var(--summit-red), var(--summit-blue))', borderRadius: '4px', marginTop: '10px' }}></div>
                    </div>

                    <p style={{ fontSize: '14px', fontStyle: 'italic', color: 'var(--summit-blue)', fontWeight: 600, marginBottom: '5px' }}>From Complex Contaminants to Tight Urban Access — Summit Delivers</p>
                    <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.6, marginBottom: '16px' }}>Summit Drilling has supported thousands of drilling and remediation projects across the Eastern U.S.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        {/* Case 1 */}
                        <div style={{ borderRadius: '18px', overflow: 'hidden', background: 'rgb(120, 168, 168)', boxShadow: '0 6px 28px rgba(0,0,0,0.15)' }}>
                            <div style={{ position: 'relative' }}>
                                <div style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '8px', padding: '5px 12px', display: 'inline-block', position: 'absolute', top: '12px', left: '12px', zIndex: 2 }}><span style={{ fontSize: '10px', color: '#fff', fontWeight: 700, letterSpacing: '0.5px' }}>CASE STUDY - 1</span></div>
                                <div style={{ height: '150px', overflow: 'hidden' }}><img src="/images/projects/charlotte-airport-banner.webp" alt="Airport Facility" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50px', background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }}></div>
                                <span style={{ position: 'absolute', bottom: '10px', left: '14px', fontSize: '10px', color: '#fff', fontWeight: 600 }}>Industrial Airport Facility – New Jersey</span>
                            </div>
                            <div style={{ padding: '16px 18px 18px' }}>
                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '14px', color: '#fff', marginBottom: '7px' }}>PFAS Site Characterization</h3>
                                <p style={{ fontSize: '13px', color: '#fff', lineHeight: 1.6, marginBottom: '10px' }}><strong style={{ color: '#fff' }}>Scope:</strong> Environmental drilling under strict QA/QC controls using dedicated PFAS-only tooling.</p>
                                <p style={{ fontSize: '13.5px', color: '#fff', fontWeight: 700, marginBottom: '6px' }}>Results</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    {['20+ Wells Installed', 'Zero Cross-Contamination Events', 'All Client Sampling Targets Met'].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}><span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#fff', flexShrink: 0 }}></span><span style={{ fontSize: '13px', color: '#fff' }}>{item}</span></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Case 2 */}
                        <div style={{ borderRadius: '18px', overflow: 'hidden', background: 'rgb(120, 168, 168)', boxShadow: '0 6px 28px rgba(0,0,0,0.15)' }}>
                            <div style={{ position: 'relative' }}>
                                <div style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '8px', padding: '5px 12px', display: 'inline-block', position: 'absolute', top: '12px', left: '12px', zIndex: 2 }}><span style={{ fontSize: '10px', color: '#fff', fontWeight: 700, letterSpacing: '0.5px' }}>CASE STUDY - 2</span></div>
                                <div style={{ height: '150px', overflow: 'hidden' }}><img src="/images/drilling/air-rotary.webp" alt="Drilling Site" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50px', background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }}></div>
                                <span style={{ position: 'absolute', bottom: '10px', left: '14px', fontSize: '10px', color: '#fff', fontWeight: 600 }}>Superfund Site – Hudson County, NJ</span>
                            </div>
                            <div style={{ padding: '16px 18px 18px' }}>
                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '14px', color: '#fff', marginBottom: '7px' }}>High-Volume Injection For Groundwater Remediation</h3>
                                <p style={{ fontSize: '13px', color: '#fff', lineHeight: 1.6, marginBottom: '10px' }}><strong style={{ color: '#fff' }}>Scope:</strong> Direct-push injections across a multi-acre plume zone.</p>
                                <p style={{ fontSize: '13.5px', color: '#fff', fontWeight: 700, marginBottom: '6px' }}>Results</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    {['Over 300 Injection Points Completed', '10,000+ Gallons Of Reagent Delivered', 'Project Completed Ahead Of Schedule'].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}><span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#fff', flexShrink: 0 }}></span><span style={{ fontSize: '13px', color: '#fff' }}>{item}</span></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom banner image */}
                    <div style={{ marginTop: '20px', borderRadius: '14px', overflow: 'hidden', height: '280px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>
                        <img src="/images/drilling/sonic.webp" alt="Summit Fleet" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="absolute bottom-10 left-0 right-0 w-full z-30 translate-y-[1px]">
                        <svg className="w-full h-auto block" viewBox="0 0 1280 60" width="100%" style={{ height: '30px' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#003d7a" d="m1280 402.22h-433.84-846.27v-345.68h1280.11z"></path>
                            <path fill="#003d7a" d="m676.21 14.39l84.76-13.54 132.65 20.46 69.65 0.4 109.38 28.05 159.71 31.78h-1232.42l257.96-22.31 155.77-24.28 60.71-2.93 56.39-6.24 51.99 3.27z"></path>
                        </svg>
                    </div>

                    <div className="page-footer">
                        <span className="footer-logo"><img src="/images/summit-logo-scrolled.webp" alt="Summit" /></span>
                        <span>Project Highlights / 16</span>
                    </div>
                </div >

                {/* Page 17: Project Highlights – Case Studies 3 & 4 */}
                < div className="page" style={{ padding: '44px 56px 50px', background: 'rgb(164, 197, 197)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        {/* Case 3 */}
                        <div style={{ borderRadius: '18px', overflow: 'hidden', background: 'rgb(120, 168, 168)', boxShadow: '0 6px 28px rgba(0,0,0,0.15)' }}>
                            <div style={{ position: 'relative' }}>
                                <div style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '8px', padding: '5px 12px', display: 'inline-block', position: 'absolute', top: '12px', left: '12px', zIndex: 2 }}><span style={{ fontSize: '10px', color: '#fff', fontWeight: 700, letterSpacing: '0.5px' }}>CASE STUDY - 3</span></div>
                                <div style={{ height: '175px', overflow: 'hidden' }}><img src="/images/geophysics/utility-locating-banner.webp" alt="Brooklyn" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55px', background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }}></div>
                                <span style={{ position: 'absolute', bottom: '10px', left: '14px', fontSize: '10px', color: '#fff', fontWeight: 600 }}>Brownfield Redevelopment – Brooklyn, NY</span>
                            </div>
                            <div style={{ padding: '18px 18px 20px' }}>
                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '15px', color: '#fff', marginBottom: '8px' }}>Urban Utility Clearance + Sonic Drilling</h3>
                                <p style={{ fontSize: '13px', color: '#fff', lineHeight: 1.6, marginBottom: '12px' }}><strong style={{ color: '#fff' }}>Scope:</strong> Geophysical utility locating and UST detection across a dense urban site.</p>
                                <p style={{ fontSize: '13.5px', color: '#fff', fontWeight: 700, marginBottom: '6px' }}>Results</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                    {['Mapped Utilities With 100% Clearance Rate', 'Completed Drilling With Zero Surface Disruption', 'Accelerated Site Investigation Phase'].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}><span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#fff', flexShrink: 0 }}></span><span style={{ fontSize: '13px', color: '#fff' }}>{item}</span></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Case 4 */}
                        <div style={{ borderRadius: '18px', overflow: 'hidden', background: 'rgb(120, 168, 168)', boxShadow: '0 6px 28px rgba(0,0,0,0.15)' }}>
                            <div style={{ position: 'relative' }}>
                                <div style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '8px', padding: '5px 12px', display: 'inline-block', position: 'absolute', top: '12px', left: '12px', zIndex: 2 }}><span style={{ fontSize: '10px', color: '#fff', fontWeight: 700, letterSpacing: '0.5px' }}>CASE STUDY - 4</span></div>
                                <div style={{ height: '175px', overflow: 'hidden' }}><img src="/images/projects/spartanburg-sonic-banner.webp" alt="Georgia" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55px', background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }}></div>
                                <span style={{ position: 'absolute', bottom: '10px', left: '14px', fontSize: '10px', color: '#fff', fontWeight: 600 }}>Riverfront Industrial Site – Georgia</span>
                            </div>
                            <div style={{ padding: '18px 18px 20px' }}>
                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '15px', color: '#fff', marginBottom: '8px' }}>Barge-Access Drilling For Coastal Characterization</h3>
                                <p style={{ fontSize: '13px', color: '#fff', lineHeight: 1.6, marginBottom: '12px' }}><strong style={{ color: '#fff' }}>Scope:</strong> Rotary drilling from floating platform for large-scale remediation plan.</p>
                                <p style={{ fontSize: '13.5px', color: '#fff', fontWeight: 700, marginBottom: '6px' }}>Results</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                    {['15 Borings Completed From Barge', 'All Health & Environmental Protocols Met', 'Delivered Samples Under Challenging Access Conditions'].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}><span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#fff', flexShrink: 0 }}></span><span style={{ fontSize: '13px', color: '#fff' }}>{item}</span></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom image grid */}
                    <div style={{ marginTop: '22px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', height: '150px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)' }}>
                            <img src="/images/projects/roselle-banner.webp" alt="Project 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', height: '150px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)' }}>
                            <img src="/images/projects/gastonia-banner.webp" alt="Project 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', height: '150px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)' }}>
                            <img src="/images/projects/princeton-banner.webp" alt="Project 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', height: '150px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)' }}>
                            <img src="/images/projects/linden-banner.webp" alt="Project 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-0 right-0 w-full z-30 translate-y-[1px]">
                        <svg className="w-full h-auto block" viewBox="0 0 1280 60" width="100%" style={{ height: '30px' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#003d7a" d="m1280 402.22h-433.84-846.27v-345.68h1280.11z"></path>
                            <path fill="#003d7a" d="m676.21 14.39l84.76-13.54 132.65 20.46 69.65 0.4 109.38 28.05 159.71 31.78h-1232.42l257.96-22.31 155.77-24.28 60.71-2.93 56.39-6.24 51.99 3.27z"></path>
                        </svg>
                    </div>

                    <div className="page-footer">
                        <span className="footer-logo"><img src="/images/summit-logo-scrolled.webp" alt="Summit" /></span>
                        <span>Project Highlights / 17</span>
                    </div>
                </div >

                {/* Page 18: Let's Get To Work – Contact */}
                < div className="page" style={{ padding: '44px 56px 50px', background: 'rgb(164, 197, 197)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ marginBottom: '12px' }}>
                        <h2 className="page-title" style={{ fontSize: '42px', marginBottom: '2px' }}>Let's Get To Work</h2>
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '22px', color: 'var(--summit-blue)', fontWeight: 600 }}>Contact</p>
                        <div style={{ width: '70px', height: '4px', background: 'linear-gradient(90deg, var(--summit-red), var(--summit-blue))', borderRadius: '4px', marginTop: '10px' }}></div>
                    </div>

                    <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.6, marginBottom: '4px' }}>Your next project deserves a drilling partner who's prepared, precise, and accountable. At Summit Drilling we show up with ownership, field-tested skill, and a commitment to giving you <strong style={{ color: 'var(--summit-blue)' }}>An Exceptional Experience.</strong></p>
                    <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.6, marginBottom: '22px' }}>Whether you need environmental drilling, complex injections, utility clearance, or geophysical services, we're ready to help you move forward with confidence.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderRadius: '20px', overflow: 'hidden', boxShadow: '0 16px 50px rgba(0,0,0,0.15)', marginBottom: '30px' }}>
                        <div style={{ overflow: 'hidden' }}><img src="/images/contact/hero-banner.webp" alt="Contact Summit" className="pdf-object-fit-cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                        <div style={{ background: 'var(--dark-gray)', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '24px', color: '#fff', marginBottom: '20px' }}>Contact Summit Drilling</h3>
                            {[
                                { icon: '📍', label: 'Headquarters', value: '81 Chimney Rock Road\nBridgewater, NJ 08807' },
                                { icon: '📞', label: 'Phone', value: '800-242-6648' },
                                { icon: '📠', label: 'Fax', value: '732-356-1009' },
                                { icon: '✉️', label: 'E-mail', value: 'info@summitdrilling.com' },
                                { icon: '🌐', label: 'Website', value: 'www.summitdrilling.com' },
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                                    <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(200,16,46,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '15px' }}>{item.icon}</span>
                                    <div>
                                        <p style={{ fontSize: '14px', color: 'rgb(166, 80, 39)', fontWeight: 700, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.label}</p>
                                        <p style={{ fontSize: '12.5px', color: '#fff', fontWeight: 500, whiteSpace: 'pre-line' }}>{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ border: '1px solid rgba(0,48,135,0.12)', borderRadius: '14px', padding: '18px 22px', background: 'rgba(0,48,135,0.03)' }}>
                        <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '15px', color: 'rgb(166, 80, 39)', marginBottom: '6px' }}>Let's Build Something Together.</h4>
                        <p style={{ fontSize: '14px', color: '#000000', lineHeight: 1.6, marginBottom: '8px' }}>Reach out today and let's talk about how we can help you meet your site goals safely, efficiently, and without compromise.</p>
                        <p style={{ fontSize: '13.5px', color: 'var(--summit-blue)', fontWeight: 600 }}>Start a Project ➜ summitdrilling.com/start-a-project</p>
                    </div>
                    <div className="absolute bottom-10 left-0 right-0 w-full z-30 translate-y-[1px]">
                        <svg className="w-full h-auto block" viewBox="0 0 1280 60" width="100%" style={{ height: '30px' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#003d7a" d="m1280 402.22h-433.84-846.27v-345.68h1280.11z"></path>
                            <path fill="#003d7a" d="m676.21 14.39l84.76-13.54 132.65 20.46 69.65 0.4 109.38 28.05 159.71 31.78h-1232.42l257.96-22.31 155.77-24.28 60.71-2.93 56.39-6.24 51.99 3.27z"></path>
                        </svg>
                    </div>

                    <div className="page-footer">
                        <span className="footer-logo"><img src="/images/summit-logo-scrolled.webp" alt="Summit" /></span>
                        <span>Let's Get To Work / 18</span>
                    </div>
                </div >

                {/* Page 19: Thank You */}
                < div className="page" style={{ background: '#fff', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '55%', height: '38%', background: 'linear-gradient(135deg, transparent 40%, rgba(29,29,31,0.88) 100%)', pointerEvents: 'none', zIndex: 1 }}></div>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #f5f5f7 0%, #eef0f3 100%)', zIndex: 0 }}></div>

                    <div style={{ position: 'relative', zIndex: 2, width: '78%', borderRadius: '22px', overflow: 'hidden', boxShadow: '0 24px 70px rgba(0,0,0,0.18)', marginTop: '60px' }}>
                        <img src="/images/drilling/hero-banner.webp" alt="Summit Equipment on Field" style={{ width: '100%', display: 'block' }} />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, var(--summit-red), var(--summit-blue))' }}></div>
                    </div>

                    <div style={{ position: 'relative', zIndex: 2, marginTop: '48px', textAlign: 'left', width: '78%' }}>
                        <div style={{ marginBottom: '10px', background: 'rgba(29,29,31,0.85)', padding: '14px 18px', borderRadius: '10px', display: 'inline-block' }}>
                            <img src="/images/summit-logo-update.webp" alt="Summit Drilling" style={{ height: '55px', width: 'auto' }} />
                        </div>
                        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '52px', color: 'rgb(166, 80, 39)', letterSpacing: '-1.5px', lineHeight: 1, marginBottom: '14px' }}>Thank You</h1>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ width: '72px', height: '6px', background: 'rgb(166, 80, 39)', borderRadius: '4px' }}></div>
                            <div style={{ width: '24px', height: '6px', background: 'var(--medium-gray)', borderRadius: '4px', opacity: 0.5 }}></div>
                            <div style={{ width: '12px', height: '6px', background: 'var(--medium-gray)', borderRadius: '4px', opacity: 0.3 }}></div>
                        </div>
                    </div>

                    {/* Decorative Lines */}
                    <div style={{ position: 'absolute', bottom: '60px', right: '60px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '15px', zIndex: 2 }}>
                        <div style={{ width: '120px', height: '3px', background: 'rgb(166, 80, 39)' }}></div>
                        <div style={{ width: '80px', height: '3px', background: 'var(--medium-gray)', opacity: 0.6 }}></div>
                        <div style={{ width: '160px', height: '3px', background: 'var(--summit-blue)', opacity: 0.8 }}></div>
                    </div>
                </div>
            </div>
            <PDFDownloadButton />
        </>
    );
}

