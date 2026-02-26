import React from 'react';
import Image from 'next/image';

import { Button, Card, CardContent, Chip, IconExternal, IconMail } from '../../components/ui/Primitives';
import profile from '../../content/profile.json';
import resume from '../../content/resume.json';
import primaryPhoto from '../../assets/profile/prateek-primary.jpg';

import styles from './HomePage.module.scss';

function MetricCard({ label, value, detail }) {
  return (
    <Card className={styles.metricCard}>
      <CardContent>
        <h3 className={styles.metricValue}>{value}</h3>
        <p className={styles.metricLabel}>{label}</p>
        {detail ? <p className={styles.metricDetail}>{detail}</p> : null}
      </CardContent>
    </Card>
  );
}

function monthDiff(startYm, endYm) {
  const [startY, startM] = startYm.split('-').map(Number);
  const startDate = new Date(Date.UTC(startY, startM - 1, 1));
  const endDate = endYm === 'Present'
    ? new Date()
    : new Date(Date.UTC(Number(endYm.split('-')[0]), Number(endYm.split('-')[1]) - 1, 1));

  return (endDate.getUTCFullYear() - startDate.getUTCFullYear()) * 12 + (endDate.getUTCMonth() - startDate.getUTCMonth());
}

export default function HomePage() {
  const { identity, signature_projects } = profile;

  const totalMonths = resume.experience.reduce((sum, job) => sum + monthDiff(job.start, job.end), 0);
  const years = Math.max(1, Math.floor(totalMonths / 12));

  const tagline = 'I own systems end-to-end: architecture, delivery, and production reliability.';

  const metrics = [
    {
      label: 'Production delivery experience',
      value: `${years}+ years`,
      detail: 'Based on listed engineering experience from 2019 to present.'
    },
    {
      label: 'Ownership across delivery scope',
      value: '3 roles',
      detail: 'Handled Team Lead, Reporting Manager, and Product Owner responsibilities where required.'
    },
    {
      label: 'Case studies with documented decisions',
      value: `${Object.keys(signature_projects).length}`,
      detail: 'Each project shows business context, technical decisions, and outcomes.'
    }
  ];

  const capabilities = [
    'Production-grade React and Next.js architecture for workflow-heavy products',
    'System boundary design across client, API, auth, and infrastructure edges',
    'CI/CD ownership with release reliability and rollback-safe delivery',
    'Production debugging across SSL, reverse proxy, and auth-cookie behavior',
    'Hands-on ownership across teams and product streams'
  ];

  const outcomes = [
    profile.signature_projects.cargo_web.outcomes[4],
    profile.signature_projects.platform_consolidation.outcomes[1],
    profile.signature_projects.awtar_ksrtc.result[0]
  ];

  const technicalExpertise = [
    'React.js',
    'Next.js',
    'JavaScript / TypeScript',
    'Prisma',
    'PostgreSQL',
    'CI/CD',
    'System Architecture',
    'API Integration'
  ];

  return (
    <div className={styles.page}>
      <Card className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <div className={styles.fadeUp}>
              <Chip tone="primary" className={styles.availabilityBanner}>Open to full-time and freelance roles</Chip>

              <h1 className={styles.heroTitle}>Prateek Kumar - Senior Software Engineer | Frontend Engineer</h1>

              <h2 className={styles.headline}>{identity.positioning}</h2>

              <p className={styles.heroLead}>
                I build scalable, production-grade web systems using React.js and Next.js, with hands-on ownership from architecture to deployment. My scope includes API integration, CI/CD workflows, and production reliability for complex user-facing products.
              </p>

              <p className={styles.typewriter} aria-live="polite">{tagline}</p>

              <p className={styles.coreTrait}>{identity.core_trait}</p>

              <div className={styles.tags}>
                <Chip className={styles.infoChip}>{`Based in ${identity.location}`}</Chip>
                {identity.availability?.remote ? <Chip className={styles.infoChip}>Remote-ready</Chip> : null}
                {identity.availability?.full_time ? <Chip className={styles.infoChip}>Open to full-time</Chip> : null}
              </div>

              <div className={styles.heroActions}>
                <Button variant="contained" endIcon={<IconExternal />} href="/contact">
                  Contact for hiring
                </Button>
                <Button variant="outlined" startIcon={<IconMail />} href="/resume">
                  Review resume
                </Button>
                <Button variant="text" href="/projects">
                  View project outcomes
                </Button>
              </div>
            </div>

            <div className={styles.photoWrap}>
              <Image
                src={primaryPhoto}
                alt={identity.name}
                className={styles.profilePhoto}
                width={176}
                height={176}
                sizes="(max-width: 980px) 132px, 176px"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <CardContent>
          <h3 className={styles.sectionTitle}>Quick proof points</h3>
          <div className={styles.metricGrid}>
            {metrics.map((item) => (
              <MetricCard key={item.label} label={item.label} value={item.value} detail={item.detail} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className={styles.sectionTitle}>Technical Expertise</h2>
          <ul className={styles.list}>
            {technicalExpertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className={styles.tileGrid}>
        <Card>
          <CardContent>
            <h3 className={styles.sectionTitle}>Core strengths</h3>
            <div className={styles.bullets}>
              {capabilities.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>
            <div className={styles.skillChips}>
              {resume.core_skills.slice(0, 10).map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className={styles.sectionTitle}>Delivery outcomes</h3>
            <div className={styles.bulletsMuted}>
              {outcomes.map((outcome) => (
                <p key={outcome}>• {outcome}</p>
              ))}
            </div>

            <h3 className={styles.sectionTitle}>Need this in your team?</h3>
            <p className={styles.coreTrait}>
              For teams needing a senior individual contributor with ownership mindset, I can own complex delivery tracks while staying deeply hands-on in execution.
            </p>
            <Button variant="contained" href="/contact">Go to contact details</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
