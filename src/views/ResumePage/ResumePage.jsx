import React from 'react';

import { Button, Card, CardContent, Chip, IconDownload, IconExternal } from '../../components/ui/Primitives';
import resume from '../../content/resume.json';

import styles from './ResumePage.module.scss';

const RESUME_PDF_PATH = '/resume/prateek-kumar-master-resume-1page.pdf';
const HAS_RESUME_PDF = true;

function ymLabel(ym) {
  if (!ym) return '';
  const [y, m] = ym.split('-');
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Number(m) - 1];
  return `${month} ${y}`;
}

function ymToMonths(ym) {
  if (!ym || ym === 'Present') return null;
  const [year, month] = ym.split('-').map(Number);
  return year * 12 + (month - 1);
}

function totalExperienceYears(experience) {
  const now = new Date();
  const currentMonth = now.getUTCFullYear() * 12 + now.getUTCMonth();

  const totalMonths = experience.reduce((sum, job) => {
    const start = ymToMonths(job.start);
    const end = job.end === 'Present' ? currentMonth : ymToMonths(job.end);
    if (start == null || end == null || end < start) return sum;
    return sum + (end - start + 1);
  }, 0);

  return Math.max(1, Math.floor(totalMonths / 12));
}

function skillGroups(skills) {
  return {
    'Frontend Architecture': skills.filter((s) => /React|Redux|JavaScript|TypeScript|Next|HTML|CSS|Responsive|Performance/i.test(s)),
    'API and System Boundaries': skills.filter((s) => /REST|PHP|MySQL|boundary/i.test(s)),
    'Operations and Delivery': skills.filter((s) => /Apache|Nginx|AWS|Linux|CI\/CD/i.test(s))
  };
}

export default function ResumePage() {
  const grouped = skillGroups(resume.core_skills);
  const years = totalExperienceYears(resume.experience);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Resume overview</h1>
        <p className={styles.pageLead}>
          Fast hiring scan of experience, skills, and delivery evidence sourced from resume databank content.
        </p>
      </header>

      <Card className={styles.full}>
        <CardContent>
          <h3 className={styles.sectionTitle}>Hiring snapshot</h3>
          <div className={styles.chipRow}>
            <Chip className={styles.availabilityChip}>{`${years}+ years delivery experience`}</Chip>
            <Chip className={styles.availabilityChip}>{`${resume.selected_projects.length} featured project impacts`}</Chip>
            <Chip className={styles.availabilityChip}>React/Next.js architecture + API coordination</Chip>
            <Chip className={styles.availabilityChip}>Hands-on + end-to-end ownership</Chip>
          </div>
          <p className={styles.pageLead}>
            Strong fit for roles that need engineering maturity, systems ownership, and reliable hands-on execution.
          </p>
          <div className={styles.actionRow}>
            <Button
              variant="contained"
              startIcon={<IconDownload />}
              href={RESUME_PDF_PATH}
              download
              disabled={!HAS_RESUME_PDF}
            >
              Download PDF resume
            </Button>
            <Button variant="outlined" endIcon={<IconExternal />} href="/contact">
              Start hiring conversation
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className={styles.grid}>
        <Card className={styles.summaryCard}>
          <CardContent>
            <h3 className={styles.sectionTitle}>Professional summary</h3>
            <div className={styles.bulletsMuted}>
              {resume.summary.map((line) => (
                <p key={line}>• {line}</p>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className={styles.summaryCard}>
          <CardContent>
            <h3 className={styles.sectionTitle}>Availability</h3>
            <p className={styles.pageLead}>
              Available for full-time roles, consulting, and remote collaboration across senior IC scopes that value ownership and reliability.
            </p>
            <div className={styles.chipRow}>
              {resume.availability?.full_time ? <Chip className={styles.availabilityChip}>Full-time</Chip> : null}
              {resume.availability?.freelance ? <Chip className={styles.availabilityChip}>Freelance</Chip> : null}
              {resume.availability?.remote ? <Chip className={styles.availabilityChip}>Remote</Chip> : null}
            </div>
          </CardContent>
        </Card>

        <Card className={styles.full}>
          <CardContent>
            <h3 className={styles.sectionTitle}>Experience timeline</h3>
            <div className={styles.timeline}>
              {resume.experience.map((job, index) => (
                <div key={`${job.company}-${job.role}`} className={styles.timelineItem}>
                  <div className={styles.dot} aria-hidden="true" />
                  <div>
                    <div className={styles.timelineHeader}>
                      <div>
                        <p className={styles.role}>{job.role}</p>
                        <p className={styles.pageLead}>{job.company} • {job.location}</p>
                      </div>
                      <p className={styles.pageLead}>{ymLabel(job.start)} — {job.end === 'Present' ? 'Present' : ymLabel(job.end)}</p>
                    </div>

                    <div className={styles.bullets}>
                      {job.highlights.map((point) => (
                        <p key={point}>• {point}</p>
                      ))}
                    </div>

                    <div className={styles.chipRow}>
                      {job.stack.map((tech) => (
                        <Chip key={tech} className={styles.stackChip}>{tech}</Chip>
                      ))}
                    </div>

                    {index !== resume.experience.length - 1 ? <hr className={styles.divider} /> : null}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className={styles.full}>
          <CardContent>
            <h3 className={styles.sectionTitle}>Selected project impact</h3>
            <div className={styles.bulletsMuted}>
              {resume.selected_projects.map((item) => (
                <p key={item.name}><strong>{item.name}:</strong> {item.impact}</p>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className={styles.full}>
          <CardContent>
            <h3 className={styles.sectionTitle}>Skill groups</h3>
            <div className={styles.skillGroups}>
              {Object.entries(grouped).map(([groupName, list]) => (
                <div key={groupName} className={styles.skillGroupCard}>
                  <p className={styles.groupName}>{groupName}</p>
                  <div className={styles.chipRow}>
                    {list.map((skill) => (
                      <Chip key={skill} className={styles.skillChip}>{skill}</Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className={styles.sectionTitle}>Education</h3>
            {resume.education.map((edu) => (
              <div key={edu.school}>
                <p className={styles.role}>{edu.degree}</p>
                <p className={styles.pageLead}>{edu.school} ({edu.start}-{edu.end})</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className={styles.sectionTitle}>Languages</h3>
            <div className={styles.bullets}>
              {resume.languages.map((lang) => (
                <p key={lang.name}>• {lang.name} — {lang.level}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
