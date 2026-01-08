import { defineField, defineType } from 'sanity'

export const teamMember = defineType({
    name: 'teamMember',
    title: 'Team Member',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Job Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'department',
            title: 'Department',
            type: 'string',
            options: {
                list: [
                    { title: 'Corporate Leadership', value: 'corporate' },
                    { title: 'Operations Team', value: 'operations' },
                    { title: 'IT Operations', value: 'it_ops' },
                    { title: 'Business Development', value: 'business_dev' },
                    { title: 'Health & Safety', value: 'health_safety' },
                    { title: 'Finance & Administration', value: 'finance' },
                ],
            },
        }),
        defineField({
            name: 'showOnHomepage',
            title: 'Show on Homepage Carousel',
            type: 'boolean',
            initialValue: true,
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first',
        }),
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'title',
            media: 'image',
        },
    },
})
