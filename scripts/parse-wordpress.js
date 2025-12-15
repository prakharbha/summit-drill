const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Read the WordPress XML export
const xmlContent = fs.readFileSync('/Users/prakharbhatia/summit-drilling/summitdrilling.WordPress.2025-12-15.xml', 'utf8');

// Extract all items (posts and attachments)
const itemRegex = /<item>([\s\S]*?)<\/item>/g;
const items = [];
let match;
while ((match = itemRegex.exec(xmlContent)) !== null) {
    items.push(match[1]);
}

// Helper to extract value from XML
const extractValue = (xml, tag) => {
    const regex = new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`, 'i');
    const match = xml.match(regex);
    return match ? match[1].replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g, '').trim() : '';
};

// Extract posts
const posts = [];
const attachments = {};

items.forEach(item => {
    const postType = extractValue(item, 'wp:post_type');
    const status = extractValue(item, 'wp:status');

    if (postType === 'attachment') {
        const postId = extractValue(item, 'wp:post_id');
        const attachmentUrl = extractValue(item, 'wp:attachment_url');
        if (postId && attachmentUrl) {
            attachments[postId] = attachmentUrl;
        }
    }

    if (postType === 'post' && status === 'publish') {
        const title = extractValue(item, 'title');
        const content = extractValue(item, 'content:encoded');
        const slug = extractValue(item, 'wp:post_name');
        const date = extractValue(item, 'wp:post_date');
        const postId = extractValue(item, 'wp:post_id');

        // Extract thumbnail ID
        const thumbnailMatch = item.match(/<wp:meta_key><!\[CDATA\[_thumbnail_id\]\]><\/wp:meta_key>\s*<wp:meta_value><!\[CDATA\[(\d+)\]\]><\/wp:meta_value>/);
        const thumbnailId = thumbnailMatch ? thumbnailMatch[1] : null;

        if (title && slug) {
            posts.push({
                id: postId,
                title,
                content: content.substring(0, 500) + (content.length > 500 ? '...' : ''),
                fullContent: content,
                slug,
                date,
                thumbnailId
            });
        }
    }
});

// Sort by date (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Add image URLs to posts
posts.forEach(post => {
    if (post.thumbnailId && attachments[post.thumbnailId]) {
        post.imageUrl = attachments[post.thumbnailId];
    }
});

console.log(`Found ${posts.length} published posts`);
console.log(`Found ${Object.keys(attachments).length} attachments`);
console.log('\n--- Posts with images ---\n');

posts.forEach((post, i) => {
    console.log(`${i + 1}. ${post.title}`);
    console.log(`   Slug: ${post.slug}`);
    console.log(`   Date: ${post.date}`);
    console.log(`   Image: ${post.imageUrl || 'No image'}`);
    console.log('');
});

// Output as JSON for further processing
fs.writeFileSync('/Users/prakharbhatia/summit-drilling/scripts/posts-data.json', JSON.stringify(posts, null, 2));
console.log('\nData saved to scripts/posts-data.json');
