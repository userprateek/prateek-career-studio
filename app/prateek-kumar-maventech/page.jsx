import React from 'react';
import Link from 'next/link';
import seo from '../../src/content/seo.json';
import resume from '../../src/content/resume.json';
import profile from '../../src/content/profile.json';

const routeSeo = seo.routes['/prateek-kumar-maventech'];

export const metadata = {
  title: routeSeo.title,
  description: routeSeo.description,
  alternates: {
    canonical: `${seo.site_url}/prateek-kumar-maventech`
  },
  openGraph: {
    type: routeSeo.type,
    title: routeSeo.title,
    description: routeSeo.description,
    url: `${seo.site_url}/prateek-kumar-maventech`
  },
  twitter: {
    card: 'summary_large_image',
    title: routeSeo.title,
    description: routeSeo.description
  }
};

export default function PrateekKumarMaventechPage() {
  const maventechExp = resume.experience.find(exp => exp.company === 'Maventech Labs');
  const { signature_projects } = profile;

  return (
    <div className="page">
      <h1>Prateek Kumar at Maventech Labs</h1>
      <p>
        Learn about Prateek Kumar's work at <strong>Maventech Labs</strong> (also known as Maven),
        where he serves as a Senior Software Engineer and Frontend Developer.
      </p>

      <section style={{ marginTop: '2rem' }}>
        <h2>Prateek Kumar Maventech – Current Role</h2>
        <p>
          Prateek Kumar joined Maventech Labs in September 2021 and has been instrumental
          in shaping the company's frontend architecture and development practices.
        </p>
        <div style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '0.5rem', marginTop: '1rem' }}>
          <h3>{maventechExp?.role}</h3>
          <p><strong>Company:</strong> {maventechExp?.company}</p>
          <p><strong>Location:</strong> {maventechExp?.location}</p>
          <p><strong>Duration:</strong> {maventechExp?.start} – {maventechExp?.end}</p>
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Key Contributions at Maventech</h2>
        <ul>
          {maventechExp?.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Prateek Maven – Signature Projects</h2>
        <p>
          As part of Maventech Labs, Prateek Kumar has led and contributed to several
          impactful projects that demonstrate his expertise in frontend development.
        </p>

        <div style={{ marginTop: '1.5rem' }}>
          <h3>Cargo Web Platform</h3>
          <p>{signature_projects.cargo_web.context}</p>
          <p><strong>Role:</strong> {signature_projects.cargo_web.system_role}</p>
          <ul>
            {signature_projects.cargo_web.outcomes.slice(0, 3).map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <h3>Platform Consolidation</h3>
          <p>{signature_projects.platform_consolidation.scope}</p>
          <p><strong>Impact:</strong> {signature_projects.platform_consolidation.outcomes[0]}</p>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <h3>AWTAR / KSRTC Mobile Apps</h3>
          <p>{signature_projects.awtar_ksrtc.context}</p>
          <ul>
            {signature_projects.awtar_ksrtc.result.map((res, index) => (
              <li key={index}>{res}</li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Tech Stack at Maventech</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {maventechExp?.stack.map((tech) => (
            <span
              key={tech}
              style={{
                padding: '0.25rem 0.75rem',
                backgroundColor: '#f3f4f6',
                borderRadius: '9999px',
                fontSize: '0.875rem'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Why Prateek Kumar Maventech?</h2>
        <p>
          Prateek Kumar's tenure at Maventech Labs showcases his ability to lead frontend initiatives,
          collaborate with cross-functional teams, and deliver production-ready systems that scale.
          His work demonstrates expertise in React.js, Next.js, and modern frontend architecture.
        </p>
        <p>
          Keywords: Prateek Kumar, Prateek Kumar Maventech, Prateek Maven, Maventech Labs,
          Frontend Developer, React.js Developer, Senior Software Engineer
        </p>
      </section>

      <section style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}>
        <h2>Related Links</h2>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/prateek-kumar">Prateek Kumar Profile</Link></li>
          <li><Link href="/resume">Full Resume</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact Prateek Kumar</Link></li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Connect with Prateek Kumar</h2>
        <p>Follow Prateek Kumar on social media:</p>
        <ul>
          <li><a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/userprateek" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href={resume.contact.wellfound} target="_blank" rel="noopener noreferrer">Wellfound</a></li>
          <li><a href="https://www.instagram.com/userprateek" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.facebook.com/userprateek" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://x.com/userprateek" target="_blank" rel="noopener noreferrer">X / Twitter</a></li>
        </ul>
        <p>Consistent username <strong>@userprateek</strong> across all platforms.</p>
      </section>
    </div>
  );
}
