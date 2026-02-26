import React from 'react';

import AppLayout from '../src/layouts/AppLayout/AppLayout';
import FloatingWhatsAppButton from '../src/components/FloatingWhatsAppButton/FloatingWhatsAppButton';
import ThemeRegistry from '../src/components/ThemeRegistry/ThemeRegistry';
import profile from '../src/content/profile.json';
import resume from '../src/content/resume.json';
import seo from '../src/content/seo.json';
import site from '../src/content/site.json';

import '../src/styles/global.scss';

export const metadata = {
  metadataBase: new URL(seo.site_url),
  title: {
    default: seo.default_title,
    template: seo.title_template
  },
  description: seo.default_description,
  keywords: seo.keywords,
  authors: [{ name: seo.author }],
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: seo.routes['/']?.type || 'website',
    url: seo.site_url,
    title: seo.default_title,
    description: seo.default_description,
    siteName: seo.site_name,
    locale: seo.locale,
    images: [{ url: seo.default_image, alt: 'Prateek Kumar profile photo' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.default_title,
    description: seo.default_description,
    images: [seo.default_image]
  }
};

function buildSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${seo.site_url}/#person`,
        name: profile.identity.name,
        jobTitle: seo.person_job_title,
        description: seo.person_description,
        email: `mailto:${site.contact.email}`,
        url: seo.site_url,
        image: `${seo.site_url}${seo.default_image}`,
        sameAs: seo.same_as,
        homeLocation: {
          '@type': 'Place',
          name: profile.identity.location
        },
        knowsAbout: resume.core_skills.slice(0, 10)
      },
      {
        '@type': 'WebSite',
        '@id': `${seo.site_url}/#website`,
        url: seo.site_url,
        name: seo.site_name,
        inLanguage: 'en'
      }
    ]
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()) }}
        />
        <ThemeRegistry>
          <AppLayout>{children}</AppLayout>
          <FloatingWhatsAppButton />
        </ThemeRegistry>
      </body>
    </html>
  );
}
