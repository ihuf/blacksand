import { defineType } from 'sanity';

export default defineType({
  name: 'propertyFeature',
  title: 'Property Feature',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Feature Name',
      type: 'localizedString',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Pool', value: 'pool' },
          { title: 'Garden', value: 'garden' },
          { title: 'Garage', value: 'garage' },
          { title: 'Gym', value: 'gym' },
          { title: 'Security', value: 'security' },
          { title: 'Elevator', value: 'elevator' },
          { title: 'Balcony', value: 'balcony' },
          { title: 'Parking', value: 'parking' },
          { title: 'AC', value: 'ac' },
          { title: 'Furnished', value: 'furnished' },
          { title: 'Sea View', value: 'sea-view' },
          { title: 'City View', value: 'city-view' },
          { title: 'Maid Room', value: 'maid-room' },
          { title: 'Storage', value: 'storage' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'name.en',
      icon: 'icon',
    },
    prepare({ title, icon }) {
      return {
        title: title || icon || 'Feature',
      };
    },
  },
});