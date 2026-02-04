'use client';

import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default function PDFDownloadButton() {
    const [generating, setGenerating] = useState(false);
    const [progress, setProgress] = useState('');

    const generatePDF = async () => {
        setGenerating(true);
        setProgress('Initializing...');

        try {
            // Select all page elements
            const pages = document.querySelectorAll<HTMLElement>('.page');

            if (pages.length === 0) {
                alert('No slides found to generate PDF.');
                setGenerating(false);
                return;
            }

            // Create PDF (8.5in x 11in, Portrait)
            // Note: jsPDF default is mm, so we set unit to 'in'
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'in',
                format: [8.5, 11]
            });

            // Capture each page
            for (let i = 0; i < pages.length; i++) {
                setProgress(`Generating slide ${i + 1} of ${pages.length}...`);
                const page = pages[i];

                // Store original styles to ensure clean capture
                // We want to capture the element exactly as it is sized for print/screen (11in height)
                // html2canvas captures scale 1:1 by default if windowWidth matches.

                const canvas = await html2canvas(page, {
                    scale: 2, // 2x scale for better resolution (Retina-like)
                    useCORS: true, // Allow loading cross-origin images
                    logging: false,
                    windowWidth: 1200, // Simulate desktop width for layout consistency
                    // Ensure the canvas capture size matches the 8.5x11 ratio
                    width: page.offsetWidth,
                    height: page.offsetHeight,
                });

                // Add page to PDF (except for the first one which is created by default)
                if (i > 0) {
                    doc.addPage([8.5, 11], 'portrait');
                }

                const imgData = canvas.toDataURL('image/jpeg', 0.95); // High quality JPEG

                // Calculate dimensions for PDF placement (fit full page)
                doc.addImage(imgData, 'JPEG', 0, 0, 8.5, 11);
            }

            setProgress('Saving PDF...');
            doc.save('Summit_Drilling_Deck.pdf');

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
                    transition: 'all 0.2s ease',
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
                /* Hide button in print mode */
                @media print {
                    div { display: none !important; }
                }
            `}</style>
        </div>
    );
}
