import React from 'react';

import NotFoundPage from '../src/views/NotFoundPage/NotFoundPage';
import seo from '../src/content/seo.json';

const routeSeo = seo.routes['/404'];

export const metadata = {
  title: routeSeo.title,
  description: routeSeo.description,
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return <NotFoundPage />;
}
