import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          { title: 'Villa', value: 'villa' },
          { title: 'Apartment', value: 'apartment' },
          { title: 'Land', value: 'land' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Office', value: 'office' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Sold', value: 'sold' },
          { title: 'Rented', value: 'rented' },
          { title: 'Under Contract', value: 'under-contract' },
        ],
      },
      initialValue: 'available',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Property',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'price',
      title: 'Price (SAR)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'size',
      title: 'Size (sqm)',
      type: 'number',
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(20),
    }),
    defineField({
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(20),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'city',
          title: 'City',
          type: 'localizedString',
        },
        {
          name: 'district',
          title: 'District',
          type: 'localizedString',
        },
        {
          name: 'address',
          title: 'Address',
          type: 'localizedString',
        },
        {
          name: 'coordinates',
          title: 'Coordinates',
          type: 'geopoint',
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedText',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'propertyFeature' }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'virtualTourUrl',
      title: 'Virtual Tour URL',
      type: 'url',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
    }),
    defineField({
      name: 'agent',
      title: 'Agent',
      type: 'reference',
      to: [{ type: 'teamMember' }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'location.city.en',
      media: 'mainImage',
      status: 'status',
    },
    prepare({ title, subtitle, media, status }) {
      return {
        title: title || 'Untitled',
        subtitle: `${subtitle || 'No location'} - ${status || 'available'}`,
        media,
      };
    },
  },
});