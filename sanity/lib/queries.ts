import { groq } from 'next-sanity';

// Property Queries
export const propertiesQuery = groq`
  *[_type == "property"] | order(featured desc, _createdAt desc) {
    _id,
    title,
    slug,
    propertyType,
    status,
    featured,
    price,
    size,
    bedrooms,
    bathrooms,
    location,
    mainImage,
    "agent": agent->{name, nameAr, image, phone, whatsapp}
  }
`;

export const featuredPropertiesQuery = groq`
  *[_type == "property" && featured == true] | order(_createdAt desc)[0...4] {
    _id,
    title,
    slug,
    propertyType,
    status,
    price,
    size,
    bedrooms,
    bathrooms,
    location,
    mainImage
  }
`;

export const propertyBySlugQuery = groq`
  *[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    propertyType,
    status,
    featured,
    price,
    size,
    bedrooms,
    bathrooms,
    location,
    description,
    features,
    mainImage,
    gallery,
    virtualTourUrl,
    videoUrl,
    "agent": agent->{name, nameAr, image, phone, email, whatsapp, role},
    seo
  }
`;

export const propertiesByTypeQuery = groq`
  *[_type == "property" && propertyType == $type] | order(featured desc, _createdAt desc) {
    _id,
    title,
    slug,
    propertyType,
    status,
    price,
    size,
    bedrooms,
    bathrooms,
    location,
    mainImage
  }
`;

// Blog Queries
export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    publishedAt,
    featured,
    "author": author->{name, nameAr, image}
  }
`;

export const featuredBlogPostsQuery = groq`
  *[_type == "blogPost" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    publishedAt,
    "author": author->{name, nameAr, image}
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    mainImage,
    category,
    publishedAt,
    "author": author->{name, nameAr, image, bio, role},
    seo
  }
`;

// Team Queries
export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    nameAr,
    slug,
    role,
    bio,
    image,
    email,
    phone,
    whatsapp,
    social
  }
`;

export const teamMemberBySlugQuery = groq`
  *[_type == "teamMember" && slug.current == $slug][0] {
    _id,
    name,
    nameAr,
    slug,
    role,
    bio,
    image,
    email,
    phone,
    whatsapp,
    social,
    "properties": *[_type == "property" && references(^._id)] {
      _id,
      title,
      slug,
      mainImage,
      price,
      location
    }
  }
`;

// Testimonials Query
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    nameAr,
    role,
    quote,
    image,
    rating,
    featured
  }
`;

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(order asc)[0...6] {
    _id,
    name,
    nameAr,
    role,
    quote,
    image,
    rating
  }
`;

// Site Settings Query
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    siteDescription,
    logo,
    logoDark,
    contact,
    social,
    seo
  }
`;