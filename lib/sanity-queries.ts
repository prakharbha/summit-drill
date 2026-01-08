import { client, urlFor } from '@/lib/sanity'

// Types for Sanity data
export interface SanityNewsPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  ribbonText?: string
  image?: {
    asset: {
      _ref: string
    }
  }
  legacyImagePath?: string
  content?: any[]
  publishedAt?: string
  metaTitle?: string
  metaDescription?: string
}

// Fetch all news posts
export async function getAllNewsPosts(): Promise<SanityNewsPost[]> {
  return client.fetch(`
    *[_type == "newsPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      ribbonText,
      image,
      legacyImagePath,
      publishedAt
    }
  `)
}

// Fetch a single news post by slug
export async function getNewsPostBySlug(slug: string): Promise<SanityNewsPost | null> {
  return client.fetch(`
    *[_type == "newsPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      ribbonText,
      image,
      legacyImagePath,
      content,
      publishedAt,
      metaTitle,
      metaDescription
    }
  `, { slug })
}

// Fetch latest posts (excluding a specific slug)
export async function getLatestPosts(excludeSlug?: string, limit: number = 5): Promise<SanityNewsPost[]> {
  if (excludeSlug) {
    return client.fetch(`
      *[_type == "newsPost" && slug.current != $excludeSlug] | order(publishedAt desc) [0...$limit] {
        _id,
        title,
        slug,
        image,
        legacyImagePath,
        publishedAt
      }
    `, { excludeSlug, limit })
  }
  return client.fetch(`
    *[_type == "newsPost"] | order(publishedAt desc) [0...$limit] {
      _id,
      title,
      slug,
      image,
      legacyImagePath,
      publishedAt
    }
  `, { limit })
}

// Get all slugs for static generation
export async function getAllNewsSlugs(): Promise<string[]> {
  const posts = await client.fetch(`
    *[_type == "newsPost"] { "slug": slug.current }
  `)
  return posts.map((p: { slug: string }) => p.slug)
}

// Helper to get image URL (from Sanity CDN)
// Note: Don't add width() - let Next.js Image optimization handle sizing
export function getNewsImageUrl(post: SanityNewsPost): string {
  if (post.image?.asset?._ref) {
    return urlFor(post.image).url()
  }
  return '/images/news/default.jpg'
}

// ============== PROJECT TYPES & QUERIES ==============

export interface SanityProject {
  _id: string
  title: string
  slug: { current: string }
  location?: string
  excerpt?: string
  ribbonText?: string
  featuredImage?: {
    asset: {
      _ref: string
    }
  }
  legacyImagePath?: string
  sidebarDetails?: Array<{
    _key: string
    label: string
    value: string
  }>
  overview?: any[]
  challenge?: any[]
  services?: any[]
  solutions?: any[]
  outcome?: any[]
  metaTitle?: string
  metaDescription?: string
}

// Fetch all projects for gallery listing
export async function getAllProjects(): Promise<SanityProject[]> {
  return client.fetch(`
    *[_type == "project"] | order(title asc) {
      _id,
      title,
      slug,
      location,
      excerpt,
      featuredImage,
      legacyImagePath
    }
  `)
}

// Fetch a single project by slug
export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  return client.fetch(`
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      location,
      excerpt,
      ribbonText,
      featuredImage,
      legacyImagePath,
      sidebarDetails,
      overview,
      challenge,
      services,
      solutions,
      outcome,
      metaTitle,
      metaDescription
    }
  `, { slug })
}

// Get all project slugs for static generation
export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await client.fetch(`
    *[_type == "project"] { "slug": slug.current }
  `)
  return projects.map((p: { slug: string }) => p.slug)
}

// Helper to get project image URL
export function getProjectImageUrl(project: SanityProject): string {
  if (project.featuredImage?.asset?._ref) {
    return urlFor(project.featuredImage).url()
  }
  return '/images/projects/default.webp'
}

// ============== INDUSTRY TYPES & QUERIES ==============

export interface SanityIndustry {
  _id: string
  title: string
  slug: { current: string }
  heroDescription?: string
  ribbonText?: string
  subtitle?: string
  excerpt?: string
  ctaText?: string
  heroImage?: {
    asset: {
      _ref: string
    }
  }
  legacyImagePath?: string
  content?: any[]
  order?: number
  metaTitle?: string
  metaDescription?: string
}

// Fetch all industries for listing
export async function getAllIndustries(): Promise<SanityIndustry[]> {
  return client.fetch(`
    *[_type == "industry"] | order(order asc) {
      _id,
      title,
      slug,
      subtitle,
      excerpt,
      ctaText,
      heroImage,
      legacyImagePath
    }
  `)
}

// Fetch a single industry by slug
export async function getIndustryBySlug(slug: string): Promise<SanityIndustry | null> {
  return client.fetch(`
    *[_type == "industry" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      heroDescription,
      ribbonText,
      subtitle,
      excerpt,
      ctaText,
      heroImage,
      legacyImagePath,
      content,
      metaTitle,
      metaDescription
    }
  `, { slug })
}

// Get all industry slugs for static generation
export async function getAllIndustrySlugs(): Promise<string[]> {
  const industries = await client.fetch(`
    *[_type == "industry"] { "slug": slug.current }
  `)
  return industries.map((i: { slug: string }) => i.slug)
}

// Helper to get industry image URL
export function getIndustryImageUrl(industry: SanityIndustry): string {
  if (industry.heroImage?.asset?._ref) {
    return urlFor(industry.heroImage).url()
  }
  return '/images/industries/default.webp'
}

// ============== PAGE TYPES & QUERIES ==============

export interface SanityPage {
  _id: string
  title: string
  slug: { current: string }
  heroDescription?: string
  ribbonText?: string
  dividerColor?: string
  heroImage?: {
    asset: {
      _ref: string
    }
  }
  legacyImagePath?: string
  content?: any[]
  sidebar?: {
    title?: string
    content?: any[]
    image?: {
      asset: {
        _ref: string
      }
    }
    legacyImagePath?: string
    listItems?: string[]
  }
  metaTitle?: string
  metaDescription?: string
}

// Fetch a single page by slug
export async function getPageBySlug(slug: string): Promise<SanityPage | null> {
  return client.fetch(`
    *[_type == "page" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      heroDescription,
      ribbonText,
      dividerColor,
      heroImage,
      legacyImagePath,
      content,
      sidebar,
      metaTitle,
      metaDescription
    }
  `, { slug })
}

// Helper to get page image URL
export function getPageImageUrl(page: SanityPage): string {
  if (page.heroImage?.asset?._ref) {
    return urlFor(page.heroImage).url()
  }
  return '/images/default-hero.webp'
}

// Helper to get sidebar image URL
export function getSidebarImageUrl(page: SanityPage): string {
  if (page.sidebar?.image?.asset?._ref) {
    return urlFor(page.sidebar.image).url()
  }
  return ''
}

// ============== HOMEPAGE TYPES & QUERIES ==============

export interface SanityHomePage {
  _id: string
  title: string
  hero?: {
    title: string
    subtitle: string
    description: string
    videoUrl: string
    ctaText: string
    ctaLink: string
  }
  careers?: {
    title: string
    description: string
    image: { asset: { _ref: string } }
    ctaText: string
    ctaLink: string
  }
  startProject?: {
    title: string
    description: string
    image: { asset: { _ref: string } }
    ctaText: string
    ctaLink: string
  }
  healthSafety?: {
    title: string
    description: string
    image: { asset: { _ref: string } }
    ctaText: string
    ctaLink: string
  }
  metaTitle?: string
  metaDescription?: string
}

export async function getHomePage(): Promise<SanityHomePage | null> {
  return client.fetch(`
    *[_type == "homePage"][0] {
      _id,
      title,
      hero,
      careers,
      startProject,
      healthSafety,
      metaTitle,
      metaDescription
    }
  `)
}

// ============== TEAM MEMBER TYPES & QUERIES ==============

export interface SanityTeamMember {
  _id: string
  name: string
  title: string
  email?: string
  department: string
  image?: {
    asset: {
      _ref: string
    }
  }
  order?: number
}

export async function getAllTeamMembers(): Promise<SanityTeamMember[]> {
  return client.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      title,
      email,
      department,
      image,
      order
    }
  `)
}

export function getTeamMemberImageUrl(member: SanityTeamMember): string {
  if (member.image?.asset?._ref) {
    return urlFor(member.image).url()
  }
  return '/images/default-avatar.webp'
}

// ============== LOCATION TYPES & QUERIES ==============

export interface SanityLocation {
  _id: string
  name: string
  label?: string
  address?: string
  phone?: string
  fax?: string
  mapQuery?: string
  order?: number
}

export async function getAllLocations(): Promise<SanityLocation[]> {
  return client.fetch(`
    *[_type == "location"] | order(order asc) {
      _id,
      name,
      label,
      address,
      phone,
      fax,
      mapQuery,
      order
    }
  `)
}

// ============== SERVICE TYPES & QUERIES ==============

export interface SanityService {
  _id: string
  title: string
  slug: { current: string }
  category: string
  parentService?: {
    slug: { current: string }
  }
  heroDescription?: string
  ribbonText?: string
  heroImage?: {
    asset: {
      _ref: string
    }
  }
  legacyImagePath?: string
  content?: any[]
  specialtyApplications?: string[]
  subtitle?: string
  excerpt?: string
  ctaText?: string
  order?: number
  metaTitle?: string
  metaDescription?: string
}

// Fetch all services
export async function getAllServices(): Promise<SanityService[]> {
  return client.fetch(`
    *[_type == "service"] | order(order asc) {
      _id,
      title,
      slug,
      category,
      parentService->{slug},
      heroImage,
      legacyImagePath
    }
  `)
}

// Fetch a single service by slug
export async function getServiceBySlug(slug: string): Promise<SanityService | null> {
  return client.fetch(`
    *[_type == "service" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      parentService->{slug},
      heroDescription,
      ribbonText,
      heroImage,
      legacyImagePath,
      content,
      specialtyApplications,
      subtitle,
      excerpt,
      ctaText,
      metaTitle,
      metaDescription
    }
  `, { slug })
}

// Fetch services by category (for parent page listings)
// We only want child services (those that have a parent) or top-level ones?
// Actually, for the "Drilling Techniques" page, we want to list its children.
// So we should fetch services where parentService._ref == parentId
export async function getChildServices(parentId: string): Promise<SanityService[]> {
  return client.fetch(`
    *[_type == "service" && parentService._ref == $parentId] | order(order asc) {
      _id,
      title,
      slug,
      subtitle,
      excerpt,
      ctaText,
      heroImage,
      legacyImagePath
    }
  `, { parentId })
}

// Get all service slugs for static generation
export async function getAllServiceSlugs(): Promise<string[]> {
  const services = await client.fetch(`
    *[_type == "service"] { "slug": slug.current }
  `)
  return services.map((s: { slug: string }) => s.slug)
}

// Helper to get service image URL
export function getServiceImageUrl(service: SanityService): string {
  if (service.heroImage?.asset?._ref) {
    return urlFor(service.heroImage).url()
  }
  return '/images/services/default.webp'
}
