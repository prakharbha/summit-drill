import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Service',
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
            name: 'category',
            title: 'Category',
            type: 'string',
            group: 'main',
            options: {
                list: [
                    { title: 'Drilling', value: 'Drilling' },
                    { title: 'Geophysical', value: 'Geophysical' },
                    { title: 'Remediation', value: 'Remediation' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'parentService',
            title: 'Parent Service',
            type: 'reference',
            to: [{ type: 'service' }],
            group: 'main',
            description: 'Select the parent service if this is a sub-service page',
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
            type: 'text',
            group: 'main',
            rows: 3,
            description: 'Text shown in the hero banner',
        }),
        defineField({
            name: 'ribbonText',
            title: 'Ribbon Text',
            type: 'string',
            group: 'main',
            initialValue: 'SUMMIT SERVICES',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            group: 'main',
        }),

        // Listing Card Info (for when this service appears in a grid)
        defineField({
            name: 'subtitle',
            title: 'Card Subtitle',
            type: 'string',
            group: 'listing',
        }),
        defineField({
            name: 'excerpt',
            title: 'Card Description',
            type: 'text',
            group: 'listing',
            rows: 3,
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
        defineField({
            name: 'specialtyApplications',
            title: 'Specialty Applications',
            type: 'array',
            group: 'content',
            of: [{ type: 'string' }],
            description: 'List of specialty applications (mostly for parent pages)',
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
            subtitle: 'category',
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
