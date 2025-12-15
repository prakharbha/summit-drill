const fs = require('fs');
const path = require('path');

const seoData = JSON.parse(fs.readFileSync('seo_export.json', 'utf8'));
const BASE_URL = 'http://localhost:10140';

const metadata = {};

seoData.forEach(item => {
    if (item['Post Type'] !== 'page' && item['Post Type'] !== 'post') return; // Include posts if needed, but primarily pages

    let permalink = item['Permalink'];
    if (!permalink) return;

    // Normalize path
    let relativePath = permalink.replace(BASE_URL, '');
    if (relativePath !== '/' && relativePath.endsWith('/')) {
        relativePath = relativePath.slice(0, -1); // Remove trailing slash for consistency
    }
    if (relativePath === '') relativePath = '/';

    metadata[relativePath] = {
        title: item['Meta Title'] || item['Title'],
        description: item['Meta Description'] || '',
        canonical: item['Canonical URL'] || permalink
    };
});

// Write to lib/site-metadata.json
const outputPath = path.join(__dirname, '../lib/site-metadata.json');
fs.writeFileSync(outputPath, JSON.stringify(metadata, null, 2));
console.log(`Generated metadata for ${Object.keys(metadata).length} pages at ${outputPath}`);
