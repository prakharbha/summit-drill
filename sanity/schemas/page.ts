import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    groups: [
        { name: 'main', title: 'Main Info', default: true },
        { name: 'content', title: 'Page Content' },
        { name: 'sidebar', title: 'Sidebar' },
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
        }),
        defineField({
            name: 'dividerColor',
            title: 'Divider Color',
            type: 'string',
            group: 'main',
            description: 'Hex color code for the divider (e.g. #377d7e)',
        }),

        // Page Content
        defineField({
            name: 'content',
            title: 'Page Content',
            type: 'array',
            group: 'content',
            of: [{ type: 'block' }],
        }),

        // Sidebar
        defineField({
            name: 'sidebar',
            title: 'Sidebar',
            type: 'object',
            group: 'sidebar',
            fields: [
                defineField({
                    name: 'title',
                    title: 'Sidebar Title',
                    type: 'string',
                }),
                defineField({
                    name: 'content',
                    title: 'Sidebar Content',
                    type: 'array',
                    of: [{ type: 'block' }],
                }),
                defineField({
                    name: 'image',
                    title: 'Sidebar Image',
                    type: 'image',
                    options: { hotspot: true },
                }),
                defineField({
                    name: 'legacyImagePath',
                    title: 'Legacy Image Path',
                    type: 'string',
                    hidden: true,
                }),
                defineField({
                    name: 'listItems',
                    title: 'List Items',
                    type: 'array',
                    of: [{ type: 'string' }],
                    description: 'Simple list items (like in Health & Safety sidebar)',
                }),
            ],
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
            subtitle: 'slug.current',
            media: 'heroImage',
        },
    },
})
