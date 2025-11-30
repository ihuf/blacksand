import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nameAr',
      title: 'Client Name (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role/Title',
      type: 'localizedString',
      description: 'e.g., "Homeowner", "Business Owner"',
    }),
    defineField({
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Client Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [
          { title: '5 Stars', value: 5 },
          { title: '4 Stars', value: 4 },
          { title: '3 Stars', value: 3 },
          { title: '2 Stars', value: 2 },
          { title: '1 Star', value: 1 },
        ],
      },
      initialValue: 5,
    }),
    defineField({
      name: 'property',
      title: 'Related Property',
      type: 'reference',
      to: [{ type: 'property' }],
      description: 'Optional: Link to the property they purchased',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'quote.en',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Unnamed',
        subtitle: subtitle ? subtitle.substring(0, 50) + '...' : '',
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});