import React from 'react';

import ResumePage from '../../src/views/ResumePage/ResumePage';
import seo from '../../src/content/seo.json';

const routeSeo = seo.routes['/resume'];

export const metadata = {
  title: routeSeo.title,
  description: routeSeo.description,
  alternates: {
    canonical: `${seo.site_url}/resume`
  },
  openGraph: {
    type: routeSeo.type,
    title: routeSeo.title,
    description: routeSeo.description,
    url: `${seo.site_url}/resume`
  },
  twitter: {
    card: 'summary_large_image',
    title: routeSeo.title,
    description: routeSeo.description
  }
};

export default function Page() {
  return <ResumePage />;
}
