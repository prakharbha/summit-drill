import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    groups: [
        { name: 'main', title: 'Main Info', default: true },
        { name: 'sidebar', title: 'Sidebar Details' },
        { name: 'content', title: 'Content Sections' },
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
            name: 'location',
            title: 'Location',
            type: 'string',
            group: 'main',
            description: 'e.g., Charlotte, NC',
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            group: 'main',
            rows: 3,
            description: 'Short description for the gallery listing',
        }),
        defineField({
            name: 'featuredImage',
            title: 'Featured Image',
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
            name: 'ribbonText',
            title: 'Ribbon Text',
            type: 'string',
            group: 'main',
            initialValue: 'FEATURED PROJECT',
        }),

        // Sidebar Details
        defineField({
            name: 'sidebarDetails',
            title: 'Sidebar Details',
            type: 'array',
            group: 'sidebar',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'value', type: 'string', title: 'Value' },
                    ],
                    preview: {
                        select: { title: 'label', subtitle: 'value' },
                    },
                },
            ],
            description: 'Key-value pairs shown in sidebar (e.g., Depth: 17-25 ft)',
        }),

        // Content Sections
        defineField({
            name: 'overview',
            title: 'Project Overview',
            type: 'array',
            group: 'content',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'challenge',
            title: 'Challenge/Conditions',
            type: 'array',
            group: 'content',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'services',
            title: 'Services Provided',
            type: 'array',
            group: 'content',
            of: [{ type: 'block' }],
            description: 'Use bullet lists to list services',
        }),
        defineField({
            name: 'solutions',
            title: 'Solutions/Approach',
            type: 'array',
            group: 'content',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'outcome',
            title: 'Outcome/Results',
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
            subtitle: 'location',
            media: 'featuredImage',
        },
    },
})
