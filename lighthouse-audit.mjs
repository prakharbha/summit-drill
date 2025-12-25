import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';
import fs from 'fs';
import { URL } from 'url';

const BASE_URL = 'https://summit-drill.vercel.app';

// Key pages to audit
const PAGES = [
    '/',
    '/about-us',
    '/health-safety',
    '/project-gallery',
    '/resources/start-a-project',
    '/contact',
    '/services/drilling-techniques',
];

async function runLighthouse(url, browser) {
    const { port } = new URL(browser.wsEndpoint());

    const result = await lighthouse(url, {
        port,
        output: 'json',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    });

    return result.lhr;
}

async function main() {
    console.log('Starting Lighthouse audits...\n');

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
                performance: Math.round(lhr.categories.performance.score * 100),
                accessibility: Math.round(lhr.categories.accessibility.score * 100),
                bestPractices: Math.round(lhr.categories['best-practices'].score * 100),
                seo: Math.round(lhr.categories.seo.score * 100),
            };
            scores.push(pageScore);

            console.log(`  Performance: ${pageScore.performance}, A11y: ${pageScore.accessibility}, BP: ${pageScore.bestPractices}, SEO: ${pageScore.seo}`);

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
    let report = '=== LIGHTHOUSE AUDIT REPORT ===\n';
    report += `Generated: ${new Date().toISOString()}\n\n`;

    report += '=== SCORES SUMMARY ===\n';
    report += 'Page | Performance | Accessibility | Best Practices | SEO\n';
    report += '-'.repeat(80) + '\n';

    for (const s of scores) {
        report += `${s.url.padEnd(40)} | ${String(s.performance).padStart(3)} | ${String(s.accessibility).padStart(3)} | ${String(s.bestPractices).padStart(3)} | ${String(s.seo).padStart(3)}\n`;
    }

    // Calculate averages
    const avg = {
        performance: Math.round(scores.reduce((a, b) => a + b.performance, 0) / scores.length),
        accessibility: Math.round(scores.reduce((a, b) => a + b.accessibility, 0) / scores.length),
        bestPractices: Math.round(scores.reduce((a, b) => a + b.bestPractices, 0) / scores.length),
        seo: Math.round(scores.reduce((a, b) => a + b.seo, 0) / scores.length),
    };

    report += '-'.repeat(80) + '\n';
    report += `${'AVERAGE'.padEnd(40)} | ${String(avg.performance).padStart(3)} | ${String(avg.accessibility).padStart(3)} | ${String(avg.bestPractices).padStart(3)} | ${String(avg.seo).padStart(3)}\n\n`;

    // Group issues by category
    report += '=== TOP ISSUES TO FIX ===\n\n';

    const issueGroups = {};
    for (const issue of issues) {
        if (!issueGroups[issue.audit]) {
            issueGroups[issue.audit] = {
                title: issue.title,
                description: issue.description,
                pages: [],
                avgScore: 0,
            };
        }
        issueGroups[issue.audit].pages.push(issue.page);
    }

    // Sort by frequency
    const sortedIssues = Object.entries(issueGroups)
        .sort((a, b) => b[1].pages.length - a[1].pages.length)
        .slice(0, 30);

    for (const [auditId, data] of sortedIssues) {
        report += `[${auditId}] ${data.title}\n`;
        report += `  Affected pages: ${data.pages.length}\n`;
        report += `  Pages: ${data.pages.slice(0, 5).join(', ')}${data.pages.length > 5 ? '...' : ''}\n\n`;
    }

    fs.writeFileSync('lighthouse-report.txt', report);
    fs.writeFileSync('lighthouse-issues.json', JSON.stringify(issues, null, 2));

    // Print summary to console
    console.log('\n' + report.split('=== TOP ISSUES TO FIX ===')[0]);
    console.log('Full report saved to lighthouse-report.txt');
}

main().catch(console.error);
