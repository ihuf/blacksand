import property from './property';
import blogPost from './blogPost';
import teamMember from './teamMember';
import testimonial from './testimonial';
import siteSettings from './siteSettings';
import localizedString from './objects/localizedString';
import localizedText from './objects/localizedText';
import seo from './objects/seo';
import propertyFeature from './objects/propertyFeature';

export const schemaTypes = [
  // Documents
  property,
  blogPost,
  teamMember,
  testimonial,
  siteSettings,
  // Objects
  localizedString,
  localizedText,
  seo,
  propertyFeature,
];