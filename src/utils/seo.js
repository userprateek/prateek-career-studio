import profile from '../content/profile.json';
import resume from '../content/resume.json';
import site from '../content/site.json';
import seo from '../content/seo.json';

function normalizePath(pathname = '/') {
  if (!pathname) return '/';
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed || '/';
}

function toAbsoluteUrl(pathnameOrUrl) {
  if (!pathnameOrUrl) return seo.site_url;
  if (/^https?:\/\//i.test(pathnameOrUrl)) return pathnameOrUrl;
  const path = pathnameOrUrl.startsWith('/') ? pathnameOrUrl : `/${pathnameOrUrl}`;
  return `${seo.site_url}${path}`;
}

function resolveRouteMeta(pathname) {
  const normalizedPath = normalizePath(pathname);
  return seo.routes[normalizedPath] || seo.routes['/404'];
}

function resolveTitle(routePath, routeMeta) {
  if (routePath === '/') return seo.default_title;
  if (!routeMeta?.title) return seo.default_title;
  return seo.title_template.replace('%s', routeMeta.title);
}

function resolveRobots(routeMeta) {
  if (routeMeta?.noindex) return 'noindex, nofollow';
  return 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
}

function resolveRouteName(routePath) {
  if (routePath === '/') return 'Home';
  return routePath
    .replace(/\//g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getSeoPayload(pathname) {
  const routePath = normalizePath(pathname);
  const routeMeta = resolveRouteMeta(routePath);

  return {
    routePath,
    title: resolveTitle(routePath, routeMeta),
    description: routeMeta?.description || seo.default_description,
    canonicalUrl: toAbsoluteUrl(routePath),
    imageUrl: toAbsoluteUrl(routeMeta?.image || seo.default_image),
    ogType: routeMeta?.type || 'website',
    robots: resolveRobots(routeMeta),
    author: seo.author,
    siteName: seo.site_name,
    keywords: seo.keywords.join(', '),
    locale: seo.locale,
    routeName: resolveRouteName(routePath)
  };
}

export function buildStructuredData(payload) {
  const sameAs = seo.same_as?.length ? seo.same_as : [site.contact.linkedin].filter(Boolean);
  const currentCompany = resume.experience?.[0]?.company;
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${seo.site_url}/`
    }
  ];

  if (payload.routePath !== '/') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: payload.routeName,
      item: payload.canonicalUrl
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${seo.site_url}/#person`,
        name: profile.identity.name,
        jobTitle: seo.person_job_title || profile.identity.primary_title,
        description: seo.person_description || profile.identity.positioning,
        email: `mailto:${site.contact.email}`,
        url: seo.site_url,
        image: payload.imageUrl,
        sameAs,
        homeLocation: {
          '@type': 'Place',
          name: profile.identity.location
        },
        knowsAbout: resume.core_skills.slice(0, 10),
        ...(currentCompany
          ? {
            worksFor: {
              '@type': 'Organization',
              name: currentCompany
            }
          }
          : {})
      },
      {
        '@type': 'WebSite',
        '@id': `${seo.site_url}/#website`,
        url: seo.site_url,
        name: seo.site_name,
        inLanguage: 'en'
      },
      {
        '@type': 'WebPage',
        '@id': `${payload.canonicalUrl}#webpage`,
        url: payload.canonicalUrl,
        name: payload.title,
        description: payload.description,
        inLanguage: 'en',
        isPartOf: {
          '@id': `${seo.site_url}/#website`
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: payload.imageUrl
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${payload.canonicalUrl}#breadcrumb`,
        itemListElement: breadcrumbItems
      }
    ]
  };
}
