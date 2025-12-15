const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { execSync } = require('child_process');

// Read the parsed posts data
const posts = JSON.parse(fs.readFileSync('/Users/prakharbhatia/summit-drilling/scripts/posts-data.json', 'utf8'));

// Download images
const downloadImage = (url, dest) => {
    return new Promise((resolve, reject) => {
        // The localhost URLs won't work, so we need to find the actual image files
        // For now, let's just log what we need to download
        console.log(`Need to download: ${url}`);
        console.log(`  -> ${dest}`);
        resolve();
    });
};

// Create the news data file for the app
const newsData = posts.map((post, index) => {
    // Clean up image filename from URL
    const imageUrl = post.imageUrl || '';
    const imageName = imageUrl ? path.basename(imageUrl).toLowerCase().replace(/[^a-z0-9.-]/g, '-') : '';

    // Extract first paragraph for excerpt
    let excerpt = post.content
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();

    // Limit to ~200 chars
    if (excerpt.length > 200) {
        excerpt = excerpt.substring(0, 200).replace(/\s+\S*$/, '') + '...';
    }

    return {
        id: index + 1,
        title: post.title,
        slug: post.slug,
        date: post.date.split(' ')[0], // Just the date part
        excerpt: excerpt,
        image: imageName ? `/images/news/${imageName}` : '/images/news/default.jpg',
        originalImageUrl: post.imageUrl
    };
});

// Write the data file
const dataFileContent = `// Auto-generated from WordPress export
export interface NewsPost {
    id: number;
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    image: string;
}

export const newsPosts: NewsPost[] = ${JSON.stringify(newsData.map(p => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    date: p.date,
    excerpt: p.excerpt,
    image: p.image
})), null, 2)};

// Get 3 random posts for homepage
export function getRandomPosts(count: number = 3): NewsPost[] {
    const shuffled = [...newsPosts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Get all posts sorted by date (newest first)
export function getAllPosts(): NewsPost[] {
    return [...newsPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
`;

fs.writeFileSync('/Users/prakharbhatia/summit-drilling/data/news.ts', dataFileContent);
console.log('Created data/news.ts');

// Print curl commands to download images
console.log('\n--- Image download commands ---\n');
newsData.forEach(post => {
    if (post.originalImageUrl) {
        // Replace localhost URL with the actual WordPress site URL if needed
        // For now, extract just the path and construct a download command
        const imagePath = post.originalImageUrl.replace('http://localhost:10140', '');
        const destPath = `public/images/news/${path.basename(post.originalImageUrl).toLowerCase().replace(/[^a-z0-9.-]/g, '-')}`;
        console.log(`# ${post.title.substring(0, 50)}...`);
        console.log(`curl -o "${destPath}" "https://summitdrilling.com${imagePath}" 2>/dev/null || echo "Failed: ${post.title.substring(0, 30)}"`);
    }
});
