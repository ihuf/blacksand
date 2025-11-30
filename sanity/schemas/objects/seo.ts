import { defineType } from 'sanity';

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'localizedString',
      description: 'Title for search engines (50-60 characters recommended)',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'localizedText',
      description: 'Description for search engines (150-160 characters recommended)',
    },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image for social media sharing (1200x630 recommended)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
});