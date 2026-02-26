import React from 'react';

import ProjectsPage from '../../src/views/ProjectsPage/ProjectsPage';
import seo from '../../src/content/seo.json';

const routeSeo = seo.routes['/projects'];

export const metadata = {
  title: routeSeo.title,
  description: routeSeo.description,
  alternates: {
    canonical: '/projects'
  },
  openGraph: {
    type: routeSeo.type,
    title: routeSeo.title,
    description: routeSeo.description,
    url: `${seo.site_url}/projects`
  },
  twitter: {
    card: 'summary_large_image',
    title: routeSeo.title,
    description: routeSeo.description
  }
};

export default function Page() {
  return <ProjectsPage />;
}
