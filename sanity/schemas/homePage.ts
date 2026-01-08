import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Home Page',
            readOnly: true,
        }),
        // Hero Section (Discovery)
        defineField({
            name: 'hero',
            title: 'Hero Section',
            type: 'object',
            fields: [
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'subtitle', type: 'string', title: 'Subtitle' }),
                defineField({ name: 'description', type: 'text', title: 'Description' }),
                defineField({ name: 'videoUrl', type: 'url', title: 'Video URL' }),
                defineField({ name: 'ctaText', type: 'string', title: 'CTA Text' }),
                defineField({ name: 'ctaLink', type: 'string', title: 'CTA Link' }),
            ]
        }),
        // Careers Section
        defineField({
            name: 'careers',
            title: 'Careers Section',
            type: 'object',
            fields: [
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'description', type: 'text', title: 'Description' }),
                defineField({ name: 'image', type: 'image', title: 'Image', options: { hotspot: true } }),
                defineField({ name: 'ctaText', type: 'string', title: 'CTA Text' }),
                defineField({ name: 'ctaLink', type: 'string', title: 'CTA Link' }),
            ]
        }),
        // Start Project Section
        defineField({
            name: 'startProject',
            title: 'Start Project Section',
            type: 'object',
            fields: [
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'description', type: 'text', title: 'Description' }),
                defineField({ name: 'image', type: 'image', title: 'Image', options: { hotspot: true } }),
                defineField({ name: 'ctaText', type: 'string', title: 'CTA Text' }),
                defineField({ name: 'ctaLink', type: 'string', title: 'CTA Link' }),
            ]
        }),
        // Health & Safety Section
        defineField({
            name: 'healthSafety',
            title: 'Health & Safety Section',
            type: 'object',
            fields: [
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'description', type: 'text', title: 'Description' }),
                defineField({ name: 'image', type: 'image', title: 'Image', options: { hotspot: true } }),
                defineField({ name: 'ctaText', type: 'string', title: 'CTA Text' }),
                defineField({ name: 'ctaLink', type: 'string', title: 'CTA Link' }),
            ]
        }),
        // SEO
        defineField({
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare() {
            return {
                title: 'Home Page Configuration',
            }
        },
    },
})
