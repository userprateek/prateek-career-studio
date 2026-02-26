import React from 'react';
import Image from 'next/image';

import { Button, Card, CardContent, Chip, IconExternal } from '../../components/ui/Primitives';
import profile from '../../content/profile.json';
import projectStories from '../../../data-bank/project-stories.json';

import styles from './ProjectsPage.module.scss';

const PROJECT_PRESENTATION = {
  cargo_web: {
    title: 'Cargo Platform Modernization (Legacy C# to API-First Web)',
    subtitle: 'Rebuilt a tightly coupled desktop cargo system into a scalable, secure web platform with clean API boundaries.',
    about: 'Led end-to-end modernization of mission-critical cargo operations by separating UI from backend services and introducing workflow-focused modules for bookings, dispatch, deliveries, and analytics.',
    visualSlots: [
      {
        src: '/projects/cargo-web/operations-dashboard.jpg',
        caption: 'Operations dashboard and workflow execution surface'
      },
      {
        src: '/projects/cargo-web/api-boundary-orchestration.jpg',
        caption: 'Client-to-API boundary and request orchestration diagram'
      }
    ]
  },
  platform_consolidation: {
    title: 'Multi-Brand Booking Platform with Centralized Payments',
    subtitle: 'Unified multiple client sites under one configurable platform with shared booking flows and a secure payment core.',
    about: 'Designed a reusable, theme-driven architecture so each brand could have a custom website experience while relying on the same hardened booking, checkout, and operations backbone.',
    visualSlots: [
      {
        src: '/projects/platform-consolidation/admin-workflow.jpg',
        caption: 'Shared administration workflow across consolidated modules'
      },
      {
        src: '/projects/platform-consolidation/platform-modules-pipeline.jpg',
        caption: 'Reusable platform modules and shared release pipeline'
      }
    ]
  },
  awtar_ksrtc: {
    title: 'KSRTC Cross-Platform Booking App + Operations CRM',
    subtitle: 'Delivered customer-facing mobile booking and an internal CRM/operations layer for public transport workflows.',
    about: 'Executed a deadline-critical transport product rollout covering seat selection, live trip visibility, ticket workflows, and staff-side inventory/reporting operations in one coordinated release.',
    visualSlots: [
      {
        src: '/projects/awtar-ksrtc/mobile-webview-interface.jpg',
        caption: 'Cross-platform mobile interface delivered with React Native wrapper'
      },
      {
        src: '/projects/awtar-ksrtc/one-week-delivery-plan.jpg',
        caption: 'One-week execution plan for Android and iOS launch'
      }
    ]
  }
};

const storyMap = Object.fromEntries(projectStories.project_stories.map((story) => [story.id, story]));

const normalizeBullet = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

function uniqueBullets(items = []) {
  const seen = new Set();
  return items.filter((item) => {
    const key = normalizeBullet(item);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function StorySection({ label, items }) {
  if (!items?.length) return null;

  return (
    <section className={styles.storySection}>
      <p className={styles.sectionLabel}>{label}</p>
      <div className={styles.storyBullets}>
        {items.map((item) => (
          <p key={item}>• {item}</p>
        ))}
      </div>
    </section>
  );
}

function ProjectVisualSlot({ slot }) {
  return (
    <figure className={styles.visualSlot}>
      <Image src={slot.src} alt={slot.caption} width={1200} height={750} sizes="(max-width: 860px) 100vw, 50vw" />
      <figcaption>{slot.caption}</figcaption>
    </figure>
  );
}

function resolveStory(projectKey) {
  if (projectKey === 'cargo_web') return storyMap['cargo-web'];
  if (projectKey === 'platform_consolidation') return storyMap['platform-consolidation'];
  if (projectKey === 'awtar_ksrtc') return storyMap['awtar-ksrtc'];
  return undefined;
}

function ProjectBlock({ projectKey, project, discussHref }) {
  const presentation = PROJECT_PRESENTATION[projectKey];
  const story = resolveStory(projectKey);
  const challenge = [project.context, project.scope, story?.problem].filter(Boolean);
  const decisions = [project.core_shift, project.judgment_call, ...(project.decisions ?? []), ...(story?.actions ?? [])].filter(Boolean);
  const outcomes = uniqueBullets([...(project.outcomes ?? []), ...(project.result ?? []), ...(story?.outcomes ?? [])]);

  return (
    <Card className={styles.card}>
      <CardContent>
        <div className={styles.block}>
          <div className={styles.titleRow}>
            <div>
              <h3 className={styles.title}>{presentation.title}</h3>
              <p className={styles.subtitle}>{presentation.subtitle}</p>
            </div>
            {project.status ? <Chip tone="primary" className={styles.badgeChip}>{project.status}</Chip> : null}
          </div>

          {presentation.about || story?.elevator_pitch ? <p className={styles.elevatorPitch}>{presentation.about || story?.elevator_pitch}</p> : null}

          {project.system_role ? <p className={styles.meta}><strong>Role:</strong> {project.system_role}</p> : null}

          <div className={styles.scanRow}>
            <Chip className={styles.infoChip}>{`${decisions.length || 1} technical decisions`}</Chip>
            <Chip className={styles.infoChip}>{`${outcomes.length || 1} outcomes`}</Chip>
            {project.durability ? <Chip className={styles.infoChip}>Long-term durability</Chip> : null}
            {story?.best_for_roles?.[0] ? <Chip className={styles.infoChip}>{`Best fit: ${story.best_for_roles[0]}`}</Chip> : null}
          </div>

          <hr className={styles.divider} />

          <div className={styles.detailGrid}>
            <StorySection label="Context" items={challenge} />
            <StorySection label="Approach" items={decisions} />
            <StorySection label="Results" items={outcomes} />
          </div>

          {project.durability ? <p className={styles.meta}><strong>Durability:</strong> {project.durability}</p> : null}

          <div className={styles.visualGrid}>
            {presentation.visualSlots.map((slot) => (
              <ProjectVisualSlot key={slot.src} slot={slot} />
            ))}
          </div>

          <Button variant="outlined" endIcon={<IconExternal />} className={styles.discussButton} href={discussHref}>
            Discuss a similar architecture challenge
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProjectsPage() {
  const projects = profile.signature_projects;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Project case studies</h1>
        <p className={styles.pageLead}>
          Databank-grounded portfolio stories showing business context, architecture and product decisions, and measurable delivery outcomes.
        </p>
      </header>

      <Card className={styles.scanGuide}>
        <CardContent>
          <h3 className={styles.title}>How to scan these case studies quickly</h3>
          <div className={styles.storyBullets}>
            <p>• Start with <strong>Context</strong> to see business constraints and scale.</p>
            <p>• Use <strong>Approach</strong> to understand architecture and ownership judgment.</p>
            <p>• Validate with <strong>Results</strong> and visual evidence for delivery credibility.</p>
          </div>
        </CardContent>
      </Card>

      <div className={styles.grid}>
        <ProjectBlock projectKey="cargo_web" project={projects.cargo_web} discussHref="/contact" />
        <ProjectBlock projectKey="platform_consolidation" project={projects.platform_consolidation} discussHref="/contact" />
        <ProjectBlock projectKey="awtar_ksrtc" project={projects.awtar_ksrtc} discussHref="/contact" />
      </div>
    </div>
  );
}
