const fs = require('fs');
const path = require('path');

// Read SEO export
const seoData = JSON.parse(fs.readFileSync('seo_export.json', 'utf8'));

const BASE_URL = 'http://localhost:10140';
const APP_DIR = path.join(__dirname, '../app');

// Ensure directory exists
function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

// Template for new pages
const getPageTemplate = (pathKey) => `import { getPageMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";

export const metadata = getPageMetadata("${pathKey}");

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHeroBanner
          title="${pathKey.split('/').filter(Boolean).pop()?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || "Summit Drilling"}"
          description=""
          backgroundImage="/images/drilling/hero-banner.webp"
        />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <p className="text-lg">Content coming soon...</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
`;

let createdCount = 0;
let skippedCount = 0;

seoData.forEach(item => {
    // Only process pages and posts if needed (User said "Posts are the news section posts, they should be fine as I think", so maybe skip posts?)
    // But checked posts in export are /summit-drilling-welcomes...
    // The user said "Also for all the pages which are not created..."
    // Posts are usually dynamic /news/[slug].
    // If the export lists them as individual URLs, creating static pages for posts is WRONG if we have a dynamic route.
    // However, the export lists PAGES like "Services", "About Us" which match static routes.
    // I will filter for "Post Type": "page".

    if (item['Post Type'] !== 'page') {
        return;
    }

    let permalink = item['Permalink'];
    if (!permalink) return;

    // Remove base URL and trailing slash for pathKey
    let relativePath = permalink.replace(BASE_URL, '');
    let pathKey = relativePath;
    if (pathKey !== '/' && pathKey.endsWith('/')) {
        pathKey = pathKey.slice(0, -1);
    }
    if (pathKey === '') pathKey = '/';

    // Determine file system path
    if (relativePath === '/' || relativePath === '') {
        relativePath = '/page.tsx';
    } else {
        // Ensure it ends with /page.tsx
        // /services/ -> /services/page.tsx
        // /services -> /services/page.tsx
        if (relativePath.endsWith('/')) {
            relativePath += 'page.tsx';
        } else {
            relativePath += '/page.tsx';
        }
    }

    const fullPath = path.join(APP_DIR, relativePath);

    if (fs.existsSync(fullPath)) {
        console.log(`Skipping existing: ${relativePath}`);
        skippedCount++;
        return;
    }

    console.log(`Creating: ${relativePath} for key ${pathKey}`);
    ensureDirectoryExistence(fullPath);
    fs.writeFileSync(fullPath, getPageTemplate(pathKey));
    createdCount++;
});

console.log(`Finished. Created: ${createdCount}, Skipped: ${skippedCount}`);
