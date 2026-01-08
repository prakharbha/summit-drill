import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'industry',
    title: 'Industry',
    type: 'document',
    groups: [
        { name: 'main', title: 'Main Info', default: true },
        { name: 'listing', title: 'Listing Card' },
        { name: 'content', title: 'Page Content' },
        { name: 'seo', title: 'SEO' },
    ],
    fields: [
        // Main Info
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            group: 'main',
            validation: (Rule) => Rule.required(),
            description: 'e.g., Environmental Services',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'main',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            group: 'main',
            options: { hotspot: true },
        }),
        defineField({
            name: 'legacyImagePath',
            title: 'Legacy Image Path',
            type: 'string',
            group: 'main',
            hidden: true,
        }),
        defineField({
            name: 'heroDescription',
            title: 'Hero Description',
            type: 'string',
            group: 'main',
            description: 'Short tagline shown in hero banner',
        }),
        defineField({
            name: 'ribbonText',
            title: 'Ribbon Text',
            type: 'string',
            group: 'main',
            initialValue: 'INDUSTRIES SERVED',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            group: 'main',
            description: 'Order on listing page (lower = first)',
        }),

        // Listing Card Info
        defineField({
            name: 'subtitle',
            title: 'Card Subtitle',
            type: 'string',
            group: 'listing',
            description: 'Shown on main industries listing, e.g., "Environmental – Partnering with..."',
        }),
        defineField({
            name: 'excerpt',
            title: 'Card Description',
            type: 'text',
            group: 'listing',
            rows: 3,
            description: 'Short description for listing card',
        }),
        defineField({
            name: 'ctaText',
            title: 'CTA Button Text',
            type: 'string',
            group: 'listing',
            initialValue: 'Learn More',
        }),

        // Page Content
        defineField({
            name: 'content',
            title: 'Page Content',
            type: 'array',
            group: 'content',
            of: [{ type: 'block' }],
        }),

        // SEO
        defineField({
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
            group: 'seo',
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            group: 'seo',
            rows: 2,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            media: 'heroImage',
        },
    },
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
})
