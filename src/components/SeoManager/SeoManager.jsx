import React from 'react';
import { useLocation } from 'react-router-dom';

import { buildStructuredData, getSeoPayload } from '../../utils/seo';

const SCHEMA_SCRIPT_ID = 'seo-json-ld';

function upsertMeta({ name, property, content }) {
  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let tag = document.head.querySelector(selector);

  if (!content) {
    tag?.remove();
    return;
  }

  if (!tag) {
    tag = document.createElement('meta');
    if (name) tag.setAttribute('name', name);
    if (property) tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function upsertCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', url);
}

function upsertSchema(schema) {
  let scriptTag = document.getElementById(SCHEMA_SCRIPT_ID);

  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.id = SCHEMA_SCRIPT_ID;
    scriptTag.setAttribute('type', 'application/ld+json');
    document.head.appendChild(scriptTag);
  }

  scriptTag.textContent = JSON.stringify(schema);
}

export default function SeoManager() {
  const location = useLocation();

  React.useEffect(() => {
    const payload = getSeoPayload(location.pathname);
    const schema = buildStructuredData(payload);

    document.title = payload.title;

    upsertMeta({ name: 'description', content: payload.description });
    upsertMeta({ name: 'robots', content: payload.robots });
    upsertMeta({ name: 'author', content: payload.author });
    upsertMeta({ name: 'keywords', content: payload.keywords });

    upsertMeta({ property: 'og:title', content: payload.title });
    upsertMeta({ property: 'og:description', content: payload.description });
    upsertMeta({ property: 'og:type', content: payload.ogType });
    upsertMeta({ property: 'og:url', content: payload.canonicalUrl });
    upsertMeta({ property: 'og:image', content: payload.imageUrl });
    upsertMeta({ property: 'og:image:alt', content: 'Prateek Kumar profile photo' });
    upsertMeta({ property: 'og:site_name', content: payload.siteName });
    upsertMeta({ property: 'og:locale', content: payload.locale });

    upsertMeta({ name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta({ name: 'twitter:title', content: payload.title });
    upsertMeta({ name: 'twitter:description', content: payload.description });
    upsertMeta({ name: 'twitter:image', content: payload.imageUrl });

    upsertCanonical(payload.canonicalUrl);
    upsertSchema(schema);
  }, [location.pathname]);

  return null;
}
