import React from 'react';

import { Button } from '../../components/ui/Primitives';

import styles from './NotFoundPage.module.scss';

export default function NotFoundPage() {
  return (
    <section className={styles.page}>
      <h1>Page not found</h1>
      <p>The page you requested is unavailable.</p>
      <Button href="/">Go Home</Button>
    </section>
  );
}
