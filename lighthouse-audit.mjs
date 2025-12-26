import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';
import fs from 'fs';
import { URL } from 'url';

const BASE_URL = 'https://summit-drill.vercel.app';

// All public pages to audit
const PAGES = [
    '/',
    '/about-us',
    '/about-us/news',
    '/careers',
    '/careers/benefits',
    '/careers/positions',
    '/careers/your-career',
    '/contact',
    '/health-safety',
    '/industries',
    '/industries/environmental',
    '/industries/geotechnical',
    '/industries/cathodic',
    '/industries/aggregate',
    '/privacy-policy',
    '/project-gallery',
    '/project-gallery/brick-nj',
    '/project-gallery/charlestown',
    '/project-gallery/charlotte-airport',
    '/project-gallery/charlotte-methane',
    '/project-gallery/featured',
    '/project-gallery/gastonia',
    '/project-gallery/linden',
    '/project-gallery/princeton',
    '/project-gallery/princeton-jct',
    '/project-gallery/raleigh',
    '/project-gallery/roselle',
    '/project-gallery/spartanburg-cap',
    '/project-gallery/spartanburg-sonic',
    '/resources/start-a-project',
    '/services',
    '/services/air-rotary-drilling',
    '/services/auger-drilling',
    '/services/barrier-walls',
    '/services/borehole-geophysics',
    '/services/direct-push',
    '/services/drilling-support',
    '/services/drilling-techniques',
    '/services/earthwork-remediation',
    '/services/electrical-resistivity',
    '/services/geophysical-services',
    '/services/in-situ-remediation',
    '/services/injection-remediation',
    '/services/injection-remediation-services',
    '/services/remediation-services',
    '/services/remediation-systems',
    '/services/seismic-refraction',
    '/services/sonic-drilling',
    '/services/ust-septic-detection',
    '/services/utility-locating',
];

async function runLighthouse(url, browser) {
    const { port } = new URL(browser.wsEndpoint());

    const result = await lighthouse(url, {
        port,
        output: 'json',
        onlyCategories: ['accessibility', 'best-practices', 'seo'],
    });

    return result.lhr;
}

async function main() {
    console.log('Starting Lighthouse Audit (Accessibility, Best Practices, SEO)...\\n');

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const issues = [];
    const scores = [];

    for (const page of PAGES) {
        const url = `${BASE_URL}${page}`;
        console.log(`Auditing: ${url}`);

        try {
            const lhr = await runLighthouse(url, browser);

            const pageScore = {
                url: page,
                accessibility: Math.round(lhr.categories.accessibility.score * 100),
                bestPractices: Math.round(lhr.categories['best-practices'].score * 100),
                seo: Math.round(lhr.categories.seo.score * 100),
            };
            scores.push(pageScore);

            console.log(`  A11y: ${pageScore.accessibility} | BP: ${pageScore.bestPractices} | SEO: ${pageScore.seo}`);

            // Collect issues
            for (const audit of Object.values(lhr.audits)) {
                if (audit.score !== null && audit.score < 1 && audit.details) {
                    issues.push({
                        page,
                        audit: audit.id,
                        title: audit.title,
                        description: audit.description,
                        score: audit.score,
                        displayValue: audit.displayValue || '',
                        details: audit.details,
                    });
                }
            }
        } catch (err) {
            console.log(`  Error: ${err.message}`);
        }
    }

    await browser.close();

    // Generate report
    let report = '=== LIGHTHOUSE FULL AUDIT REPORT ===\\n';
    report += `Generated: ${new Date().toISOString()}\\n`;
    report += `Pages audited: ${scores.length}\\n\\n`;

    report += '=== SCORES SUMMARY ===\\n';
    report += 'Page                                     | A11y | BP   | SEO\\n';
    report += '-'.repeat(70) + '\\n';

    for (const s of scores) {
        report += `${s.url.padEnd(40)} | ${String(s.accessibility).padStart(4)} | ${String(s.bestPractices).padStart(4)} | ${String(s.seo).padStart(3)}\\n`;
    }

    // Calculate averages
    const avg = {
        accessibility: Math.round(scores.reduce((a, b) => a + b.accessibility, 0) / scores.length),
        bestPractices: Math.round(scores.reduce((a, b) => a + b.bestPractices, 0) / scores.length),
        seo: Math.round(scores.reduce((a, b) => a + b.seo, 0) / scores.length),
    };

    report += '-'.repeat(70) + '\\n';
    report += `${'AVERAGE'.padEnd(40)} | ${String(avg.accessibility).padStart(4)} | ${String(avg.bestPractices).padStart(4)} | ${String(avg.seo).padStart(3)}\\n\\n`;

    // Group issues by category
    report += '=== TOP ISSUES TO FIX ===\\n\\n';

    const issueGroups = {};
    for (const issue of issues) {
        if (!issueGroups[issue.audit]) {
            issueGroups[issue.audit] = {
                title: issue.title,
                description: issue.description,
                pages: [],
            };
        }
        issueGroups[issue.audit].pages.push(issue.page);
    }

    // Sort by frequency
    const sortedIssues = Object.entries(issueGroups)
        .sort((a, b) => b[1].pages.length - a[1].pages.length)
        .slice(0, 30);

    for (const [auditId, data] of sortedIssues) {
        report += `[${auditId}] ${data.title}\\n`;
        report += `  Affected pages: ${data.pages.length}\\n`;
        report += `  Pages: ${data.pages.slice(0, 5).join(', ')}${data.pages.length > 5 ? '...' : ''}\\n\\n`;
    }

    fs.writeFileSync('lighthouse-report.txt', report);
    fs.writeFileSync('lighthouse-issues.json', JSON.stringify(issues, null, 2));

    // Print summary to console
    console.log('\\n' + report.split('=== TOP ISSUES TO FIX ===')[0]);
    console.log('Full report saved to lighthouse-report.txt');
}

main().catch(console.error);

