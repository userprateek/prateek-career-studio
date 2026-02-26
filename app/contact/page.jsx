import React from 'react';

import ContactPage from '../../src/views/ContactPage/ContactPage';
import seo from '../../src/content/seo.json';

const routeSeo = seo.routes['/contact'];

export const metadata = {
  title: routeSeo.title,
  description: routeSeo.description,
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    type: routeSeo.type,
    title: routeSeo.title,
    description: routeSeo.description,
    url: `${seo.site_url}/contact`
  },
  twitter: {
    card: 'summary_large_image',
    title: routeSeo.title,
    description: routeSeo.description
  }
};

export default function Page() {
  return <ContactPage />;
}
