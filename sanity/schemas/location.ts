import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'location',
    title: 'Location',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name (City, State)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'label',
            title: 'Label (e.g. Headquarters)',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
        }),
        defineField({
            name: 'fax',
            title: 'Fax',
            type: 'string',
        }),
        defineField({
            name: 'mapQuery',
            title: 'Google Maps Query',
            type: 'string',
            description: 'Query string for Google Maps embed (e.g. "81+Chimney+Rock+Road,+Bridgewater,+NJ+08807")',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
        }),
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
})
