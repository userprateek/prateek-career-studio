import React from 'react';
import Image from 'next/image';

import { Button, Card, IconMenu } from '../../components/ui/Primitives';
import site from '../../content/site.json';
import profile from '../../content/profile.json';
import avatar from '../../assets/profile/prateek-primary.jpg';

import styles from './AppLayout.module.scss';

export default function AppLayout({ children }) {
  return (
    <div className={styles.root}>
      <div className={styles.backgroundPattern} aria-hidden="true" />

      <div className={styles.frame}>
        <div className={styles.mobileTopBar} data-nosnippet>
          <div>
            <p className={styles.brandKicker}>Portfolio</p>
            <p className={styles.brand}>{profile.identity.name}</p>
          </div>
          <p className={styles.brandKicker}>Navigate below</p>
        </div>

        <div className={styles.layoutGrid}>
          <Card className={styles.sidebar}>
            <div className={styles.sidebarInner}>
              <div className={styles.profileTop}>
                <Image
                  src={avatar}
                  alt={profile.identity.name}
                  className={styles.profileAvatar}
                  width={94}
                  height={94}
                  sizes="94px"
                />
                <div>
                  <h2 className={styles.name}>{profile.identity.name}</h2>
                  <p className={styles.subtle}>{profile.identity.primary_title}</p>
                </div>
                <div className={styles.actionRow}>
                  <Button variant="contained" size="small" href="/contact">
                    Hire Prateek
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    href={site.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>

              <hr className={styles.divider} />

              <nav className={styles.desktopNav} aria-label="Primary navigation" data-nosnippet>
                {site.routes.map((route) => (
                  <Button
                    key={route.path}
                    variant="text"
                    href={route.path}
                    className={styles.navButton}
                  >
                    {route.label}
                  </Button>
                ))}
              </nav>
            </div>
          </Card>

          <main className={styles.contentColumn}>{children}</main>
        </div>

        <Card className={styles.mobileProfileCard} data-nosnippet>
          <div className={styles.mobileProfileInner}>
            <Image
              src={avatar}
              alt={profile.identity.name}
              className={styles.mobileAvatar}
              width={58}
              height={58}
              sizes="58px"
            />
            <div>
              <p className={styles.mobileName}>{profile.identity.name}</p>
              <p className={styles.subtle}>{profile.identity.primary_title}</p>
            </div>
          </div>
        </Card>

        <footer className={styles.footer} data-nosnippet>
          <p className={styles.subtle}>
            <span suppressHydrationWarning>© {new Date().getFullYear()}</span> {profile.identity.name}
          </p>
          <p className={styles.subtle}>Built with Next.js</p>
        </footer>
      </div>
      <details className={styles.mobileNav} data-nosnippet>
        <summary className={styles.mobileNavToggle}>
          <IconMenu />
          <span>Menu</span>
        </summary>
        <nav className={styles.drawerNav}>
          {site.routes.map((route) => (
            <a key={route.path} href={route.path} className={styles.drawerLink}>
              {route.label}
            </a>
          ))}
        </nav>
      </details>
    </div>
  );
}
