import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'localizedString',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'localizedText',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'logoDark',
      title: 'Logo (Dark Version)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'whatsapp', title: 'WhatsApp', type: 'string' },
        { name: 'address', title: 'Address', type: 'localizedText' },
        { name: 'workingHours', title: 'Working Hours', type: 'localizedString' },
      ],
    }),
    defineField({
      name: 'social',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'twitter', title: 'Twitter/X', type: 'url' },
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'youtube', title: 'YouTube', type: 'url' },
        { name: 'tiktok', title: 'TikTok', type: 'url' },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Default SEO',
      type: 'seo',
    }),
    defineField({
      name: 'googleMapsApiKey',
      title: 'Google Maps API Key',
      type: 'string',
      description: 'API key for Google Maps integration',
    }),
    defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      description: 'e.g., G-XXXXXXXXXX',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      };
    },
  },
});