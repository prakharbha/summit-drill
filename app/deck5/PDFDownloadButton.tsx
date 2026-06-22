'use client';

import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

// The mountain SVG used as the mtn-footer ::before background-image
const MTN_FILL = '#003d7a';
const MTN_SVG_URL = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 60' preserveAspectRatio='none'%3E%3Cpath fill='${encodeURIComponent(MTN_FILL)}' d='m1280 402.22h-433.84-846.27v-345.68h1280.11z'/%3E%3Cpath fill='${encodeURIComponent(MTN_FILL)}' d='m676.21 14.39l84.76-13.54 132.65 20.46 69.65 0.4 109.38 28.05 159.71 31.78h-1232.42l257.96-22.31 155.77-24.28 60.71-2.93 56.39-6.24 51.99 3.27z'/%3E%3C/svg%3E")`;

export default function PDFDownloadButton() {
    const [generating, setGenerating] = useState(false);
    const [progress, setProgress] = useState('');

    const generatePDF = async () => {
        setGenerating(true);
        setProgress('Initializing...');

        try {
            const pages = document.querySelectorAll<HTMLElement>('.soq-page');

            if (pages.length === 0) {
                alert('No SOQ pages found to generate PDF.');
                setGenerating(false);
                return;
            }

            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'in',
                format: [8.5, 11]
            });

            for (let i = 0; i < pages.length; i++) {
                setProgress(`Generating page ${i + 1} of ${pages.length}...`);
                const page = pages[i];

                const canvas = await html2canvas(page, {
                    scale: 3,
                    useCORS: true,
                    logging: false,
                    windowWidth: page.offsetWidth,
                    width: page.offsetWidth,
                    height: page.offsetHeight,
                    onclone: (_clonedDoc, clonedElement) => {
                        // ── Fix 1: Images with object-fit (cover / contain) ─────────────
                        // html2canvas doesn't respect object-fit on <img> tags reliably.
                        // Replace them with background-image divs which render correctly.
                        const originalImgs = Array.from(page.querySelectorAll<HTMLImageElement>('img'));
                        const clonedImgs = Array.from(clonedElement.querySelectorAll<HTMLImageElement>('img'));

                        originalImgs.forEach((origImg, idx) => {
                            const clonedImg = clonedImgs[idx];
                            if (!clonedImg?.parentNode) return;

                            const cs = window.getComputedStyle(origImg);
                            const fit = cs.objectFit;
                            if (fit !== 'cover' && fit !== 'contain') return;

                            const div = _clonedDoc.createElement('div');
                            // Copy all layout-critical styles
                            div.style.display = 'block';
                            div.style.width = cs.width;
                            div.style.height = cs.height;
                            div.style.minWidth = cs.minWidth;
                            div.style.minHeight = cs.minHeight;
                            div.style.flexShrink = cs.flexShrink;
                            div.style.flexGrow = cs.flexGrow;
                            div.style.position = cs.position;
                            div.style.top = cs.top;
                            div.style.left = cs.left;
                            div.style.right = cs.right;
                            div.style.bottom = cs.bottom;
                            div.style.margin = cs.margin;
                            div.style.borderRadius = cs.borderRadius;
                            div.style.border = cs.border;
                            div.style.zIndex = cs.zIndex;
                            div.style.opacity = cs.opacity;
                            // Background image
                            div.style.backgroundImage = `url(${origImg.src})`;
                            div.style.backgroundSize = fit; // 'cover' or 'contain'
                            div.style.backgroundPosition = cs.objectPosition || 'center';
                            div.style.backgroundRepeat = 'no-repeat';

                            clonedImg.parentNode.replaceChild(div, clonedImg);
                        });

                        // ── Fix 2: Mountain footer wave (::before pseudo-element) ────────
                        // html2canvas cannot render ::before with background-image SVG.
                        // Inject a real positioned div above each .mtn-footer.
                        clonedElement.querySelectorAll<HTMLElement>('.mtn-footer').forEach(footer => {
                            const wave = _clonedDoc.createElement('div');
                            wave.style.cssText = `
                                position: absolute;
                                left: 0;
                                right: 0;
                                bottom: 44px;
                                height: 31px;
                                background: ${MTN_SVG_URL} bottom / 100% 100% no-repeat;
                                z-index: 4;
                                pointer-events: none;
                            `;
                            // Insert as sibling BEFORE the footer inside .soq-page
                            footer.parentElement?.insertBefore(wave, footer);
                        });

                        // ── Fix 3: Bullet points (::before pseudo-elements on <li>) ──────
                        // html2canvas sometimes misses ::before content on list items.
                        // Insert a real <span> bullet inside each li.
                        clonedElement.querySelectorAll<HTMLElement>('.capability-list li').forEach(li => {
                            if (li.querySelector('.pdf-bullet')) return; // idempotent
                            const bullet = _clonedDoc.createElement('span');
                            bullet.className = 'pdf-bullet';
                            bullet.style.cssText = `
                                display: block;
                                width: 6px;
                                height: 6px;
                                min-width: 6px;
                                background: #a65027;
                                border-radius: 50%;
                                position: absolute;
                                left: 0.08in;
                                top: 50%;
                                transform: translateY(-50%);
                            `;
                            li.style.position = 'relative';
                            li.insertBefore(bullet, li.firstChild);
                        });
                    }
                });

                if (i > 0) doc.addPage([8.5, 11], 'portrait');
                const imgData = canvas.toDataURL('image/jpeg', 1.0);
                doc.addImage(imgData, 'JPEG', 0, 0, 8.5, 11);
            }

            setProgress('Saving PDF...');
            doc.save('Summit_Drilling_Statement_of_Qualifications.pdf');

        } catch (err) {
            console.error('PDF Generation Error:', err);
            alert('An error occurred while generating the PDF. Please try again.');
        } finally {
            setGenerating(false);
            setProgress('');
        }
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 9999,
        }}>
            <button
                onClick={generatePDF}
                disabled={generating}
                style={{
                    backgroundColor: generating ? '#6E6E73' : '#003087',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '12px 24px',
                    fontSize: '16px',
                    fontWeight: 600,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    cursor: generating ? 'wait' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                }}
            >
                {generating ? (
                    <>
                        <span style={{
                            display: 'inline-block',
                            width: '16px',
                            height: '16px',
                            border: '2px solid rgba(255,255,255,0.3)',
                            borderTop: '2px solid white',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite'
                        }} />
                        <span>{progress}</span>
                    </>
                ) : (
                    <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        <span>Download PDF</span>
                    </>
                )}
            </button>
            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @media print {
                    div { display: none !important; }
                }
            `}</style>
        </div>
    );
}
