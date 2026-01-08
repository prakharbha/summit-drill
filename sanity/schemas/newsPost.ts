import { defineField, defineType } from 'sanity'

export const newsPost = defineType({
    name: 'newsPost',
    title: 'News Post',
    type: 'document',
    groups: [
        { name: 'content', title: 'Content', default: true },
        { name: 'seo', title: 'SEO', },
    ],
    fields: [
        // Content Group
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            group: 'content',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'content',
            options: {
                source: 'title',
                maxLength: 200,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'ribbonText',
            title: 'Ribbon Text',
            type: 'string',
            group: 'content',
            description: 'Text displayed on the ribbon banner (e.g., "SUMMIT NEWS")',
            initialValue: 'SUMMIT NEWS',
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            group: 'content',
            rows: 3,
            description: 'Short description shown on news listing pages',
        }),
        defineField({
            name: 'image',
            title: 'Featured Image',
            type: 'image',
            group: 'content',
            options: {
                hotspot: true,
            },
            description: 'Main banner image for the news post',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            group: 'content',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Bold', value: 'strong' },
                            { title: 'Italic', value: 'em' },
                            { title: 'Underline', value: 'underline' },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL',
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: 'image',
                    options: { hotspot: true },
                },
            ],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            group: 'content',
        }),

        // SEO Group
        defineField({
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
            group: 'seo',
            description: 'SEO title (defaults to post title if empty)',
            validation: (Rule) => Rule.max(60).warning('Should be under 60 characters'),
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            group: 'seo',
            rows: 3,
            description: 'SEO description for search engines (defaults to excerpt if empty)',
            validation: (Rule) => Rule.max(160).warning('Should be under 160 characters'),
        }),
        defineField({
            name: 'ogImage',
            title: 'Social Share Image',
            type: 'image',
            group: 'seo',
            description: 'Image for social media sharing (defaults to featured image if empty)',
        }),

        // Hidden/Legacy
        defineField({
            name: 'legacyImagePath',
            title: 'Legacy Image Path',
            type: 'string',
            description: 'Original image path from previous system',
            hidden: true,
        }),
    ],
    orderings: [
        {
            title: 'Published Date, New',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
            date: 'publishedAt',
        },
        prepare({ title, media, date }) {
            return {
                title,
                media,
                subtitle: date ? new Date(date).toLocaleDateString() : 'No date',
            }
        },
    },
})
