import React from 'react';

import HomePage from '../src/views/HomePage/HomePage';
import seo from '../src/content/seo.json';

const routeSeo = seo.routes['/'];

export const metadata = {
  title: routeSeo.title,
  description: routeSeo.description,
  alternates: {
    canonical: seo.site_url
  },
  openGraph: {
    type: routeSeo.type,
    title: routeSeo.title,
    description: routeSeo.description,
    url: seo.site_url
  },
  twitter: {
    card: 'summary_large_image',
    title: routeSeo.title,
    description: routeSeo.description
  }
};

export default function Page() {
  return <HomePage />;
}
