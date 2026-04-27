import React from 'react';
import Link from 'next/link';
import seo from '../../src/content/seo.json';
import profile from '../../src/content/profile.json';
import resume from '../../src/content/resume.json';

const routeSeo = seo.routes['/prateek-kumar'];

export const metadata = {
  title: routeSeo.title,
  description: routeSeo.description,
  alternates: {
    canonical: `${seo.site_url}/prateek-kumar`
  },
  openGraph: {
    type: routeSeo.type,
    title: routeSeo.title,
    description: routeSeo.description,
    url: `${seo.site_url}/prateek-kumar`
  },
  twitter: {
    card: 'summary_large_image',
    title: routeSeo.title,
    description: routeSeo.description
  }
};

export default function PrateekKumarPage() {
  const maventechExperience = resume.experience.find(exp => exp.company === 'Maventech Labs');

  return (
    <div className="page">
      <h1>Prateek Kumar – Frontend Developer</h1>
      <p>Welcome to the dedicated profile page for Prateek Kumar.</p>

      <section style={{ marginTop: '2rem' }}>
        <h2>About Prateek Kumar</h2>
        <p>
          Prateek Kumar is a Frontend Developer with extensive experience in React.js and Next.js.
          With over {Math.floor(resume.experience.reduce((sum, job) => {
            const months = job.end === 'Present'
              ? (new Date().getFullYear() - parseInt(job.start.split('-')[0])) * 12 + (new Date().getMonth() - parseInt(job.start.split('-')[1]))
              : (parseInt(job.end.split('-')[0]) - parseInt(job.start.split('-')[0])) * 12;
            return sum + months;
          }, 0) / 12)}+ years in the industry, Prateek has built production-grade systems
          and led frontend initiatives at Maventech Labs.
        </p>
        <p>
          Known for his expertise in frontend architecture, system boundary design, and CI/CD ownership,
          Prateek Kumar brings a systems-thinking approach to every project he undertakes.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Professional Summary</h2>
        <ul>
          {resume.summary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Current Role</h2>
        <p>
          <strong>{maventechExperience?.role}</strong> at <strong>{maventechExperience?.company}</strong>
        </p>
        <p>{maventechExperience?.location}</p>
        <ul>
          {maventechExperience?.highlights.slice(0, 4).map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Core Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {resume.core_skills.slice(0, 15).map((skill) => (
            <span
              key={skill}
              style={{
                padding: '0.25rem 0.75rem',
                backgroundColor: '#f3f4f6',
                borderRadius: '9999px',
                fontSize: '0.875rem'
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Connect with Prateek Kumar</h2>
        <p>Follow and connect with Prateek Kumar across social platforms:</p>
        <ul>
          <li><a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/userprateek" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href={resume.contact.wellfound} target="_blank" rel="noopener noreferrer">Wellfound</a></li>
          <li><a href="https://www.instagram.com/userprateek" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.facebook.com/userprateek" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://x.com/userprateek" target="_blank" rel="noopener noreferrer">X / Twitter</a></li>
          <li>Email: {resume.contact.email}</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}>
        <h2>Related Links</h2>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/prateek-kumar-maventech">Prateek Kumar at Maventech Labs</Link></li>
          <li><Link href="/resume">Full Resume</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </section>
    </div>
  );
}
