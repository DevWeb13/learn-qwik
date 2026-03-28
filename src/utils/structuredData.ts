// src/utils/structuredData.ts

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  imageUrl: string;
  publishedTime: string;
  modifiedTime?: string;
  authorName: string;
}

export interface CourseSchemaProps {
  name: string;
  description: string;
  url: string;
  providerName: string;
}

const normalizeUrl = (url: string) => (url.endsWith("/") ? url : `${url}/`);

export const createWebsiteSchema = ({
  baseUrl = "https://www.learn-qwik.com",
  siteName = "Learn Qwik",
}: {
  baseUrl?: string;
  siteName?: string;
}) =>
  ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: normalizeUrl(baseUrl),
  }) as const;

export const createOrganizationSchema = ({
  baseUrl = "https://www.learn-qwik.com",
  logoUrl,
  sameAs = [],
}: {
  baseUrl?: string;
  logoUrl: string;
  sameAs?: string[];
}) =>
  ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Learn Qwik",
    url: normalizeUrl(baseUrl),
    logo: logoUrl,
    sameAs,
  }) as const;

export const createBreadcrumbSchema = (items: BreadcrumbItem[]) =>
  ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: normalizeUrl(item.item),
    })),
  }) as const;

export const createArticleSchema = ({
  headline,
  description,
  url,
  imageUrl,
  publishedTime,
  modifiedTime,
  authorName,
}: ArticleSchemaProps) =>
  ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: normalizeUrl(url),
    image: [imageUrl],
    datePublished: publishedTime,
    dateModified: modifiedTime ?? publishedTime,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Learn Qwik",
      logo: {
        "@type": "ImageObject",
        url: "https://www.learn-qwik.com/android-chrome-512x512.png",
      },
    },
  }) as const;

export const createCourseSchema = ({
  name,
  description,
  url,
  providerName,
}: CourseSchemaProps) =>
  ({
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: normalizeUrl(url),
    provider: {
      "@type": "Organization",
      name: providerName,
    },
  }) as const;
