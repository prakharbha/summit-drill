import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';
import fs from 'fs';

const BASE_URL = 'https://summit-drill.vercel.app';

const NEWS_SLUGS = [
    'introducing-summits-drilling-field-supervisors',
    'summit-drilling-welcomes-joseph-c-negro',
    'dermot-dillion-appointed-to-ngwa-board-of-directors',
    'summit-drilling-welcomes-south-atlantic-environmental-drilling-and-construction-co-saedacco-to-the-team',
    'summit-drilling-acquires-subsurface-environmental-technologies-and-hill-environmental-group-strengthening-its-turn-key-solutions',
    'summit-drilling-acquires-tpi-environmental-expanding-services-and-geographic-footprint-in-the-lehigh-valley-area',
    'ron-bucca-promoted-to-chief-executive-officer-as-summit-drilling-fortifies-its-expansion-strategy',
    'summit-drilling-takes-on-partners-to-support-aggressive-growth',
    'two-industry-leaders-strengthen-their-alliance-and-capability',
    'summit-drilling-knows-its-pfas',
    'summit-introducing-the-latest-addition-to-its-expanding-sonic-fleet-the-bl-50-the-industrys-most-powerful-50k-sonic-rig',
    'summit-drilling-finds-veterans-to-be-important-asset-for-company',
    'summit-drilling-achieves-the-gold-standard-for-safety',
    'leading-environmental-driller-fortifies-support-of-mid-atlantic-region',
    'the-northeasts-fastest-growing-environmental-driller-names-a-new-leader',
    'summit-drilling-opens-regional-office-in-albany',
    'summit-drilling-achieves-7th-consecutive-governors-health-safety-award',
    '100-attend-summits-demo-on-industry-leading-sonic-technology',
    '1-of-164-in-nj-summit-drilling-makes-inc-5000-list-of-the-fastest-growing-companies',
    'summit-drilling-rings-in-the-new-year-by-welcoming-another-industry-veteran-to-the-family',
    'summit-drilling-increases-its-commitment-to-environmental-consultants-in-pennsylvania',
    'summit-drillings-experience-safety-program-recognized-four-years-consecutively-and-counting',
    'turning-a-wrench-into-high-performance-customer-satisfaction',
    'environmental-services-leader-expands-footprint-in-greater-philadelphia-region',
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
    console.log('Auditing all news posts...\n');

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const results = [];

    for (const slug of NEWS_SLUGS) {
        const url = `${BASE_URL}/${slug}`;
        process.stdout.write(`Auditing: /${slug.substring(0, 40)}...`);

        try {
            const lhr = await runLighthouse(url, browser);
            const scores = {
                slug: slug.substring(0, 50),
                a11y: Math.round(lhr.categories.accessibility.score * 100),
                bp: Math.round(lhr.categories['best-practices'].score * 100),
                seo: Math.round(lhr.categories.seo.score * 100),
            };
            results.push(scores);
            console.log(` A11y: ${scores.a11y} | BP: ${scores.bp} | SEO: ${scores.seo}`);
        } catch (err) {
            console.log(` Error: ${err.message}`);
        }
    }

    await browser.close();

    let report = '=== NEWS POSTS AUDIT REPORT ===\n';
    report += `Generated: ${new Date().toISOString()}\n`;
    report += `Posts audited: ${results.length}\n\n`;

    report += 'Slug'.padEnd(52) + '| A11y | BP  | SEO\n';
    report += '-'.repeat(70) + '\n';

    for (const r of results) {
        report += `${r.slug.padEnd(52)}| ${String(r.a11y).padStart(4)} | ${String(r.bp).padStart(3)} | ${String(r.seo).padStart(3)}\n`;
    }

    const avg = {
        a11y: Math.round(results.reduce((a, b) => a + b.a11y, 0) / results.length),
        bp: Math.round(results.reduce((a, b) => a + b.bp, 0) / results.length),
        seo: Math.round(results.reduce((a, b) => a + b.seo, 0) / results.length),
    };

    report += '-'.repeat(70) + '\n';
    report += `${'AVERAGE'.padEnd(52)}| ${String(avg.a11y).padStart(4)} | ${String(avg.bp).padStart(3)} | ${String(avg.seo).padStart(3)}\n`;

    fs.writeFileSync('news-audit-report.txt', report);

    console.log('\n' + report);
    console.log('Full report saved to news-audit-report.txt');
}

main().catch(console.error);
