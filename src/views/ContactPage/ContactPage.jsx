import React from 'react';

import { Button, Card, CardContent, Chip, IconLinkedIn, IconMail, IconWork } from '../../components/ui/Primitives';
import site from '../../content/site.json';
import resume from '../../content/resume.json';

import styles from './ContactPage.module.scss';

export default function ContactPage() {
  const { contact } = site;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Contact</h1>
        <p className={styles.pageLead}>
          Open to full-time roles, consulting, and product collaborations that need hands-on frontend systems ownership and reliable execution.
        </p>
      </header>

      <div className={styles.grid}>
        <Card className={styles.primaryCard}>
          <CardContent>
            <div className={styles.block}>
              <h3 className={styles.sectionTitle}>Hiring quick view</h3>
              <p className={styles.pageLead}>
                Best fit: teams modernizing complex workflows and looking for production-grade frontend engineering with dependable ownership.
              </p>
              <div className={styles.chipRow}>
                {resume.availability.full_time ? <Chip className={styles.availabilityChip}>Full-time</Chip> : null}
                {resume.availability.freelance ? <Chip className={styles.availabilityChip}>Freelance</Chip> : null}
                {resume.availability.remote ? <Chip className={styles.availabilityChip}>Remote</Chip> : null}
              </div>

              <p className={styles.pageLead}>
                <strong>Email:</strong> {contact.email}
                <br />
                <strong>Phone:</strong> {contact.phone}
              </p>

              <div className={styles.buttonRow}>
                <Button className={styles.actionButton} variant="contained" startIcon={<IconMail />} href={`mailto:${contact.email}`}>
                  Send email
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className={styles.sectionTitle}>Contact channels</h3>
            <div className={styles.buttonCol}>
              <Button
                className={styles.actionButton}
                variant="outlined"
                startIcon={<IconLinkedIn />}
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open LinkedIn
              </Button>
              {contact.wellfound ? (
                <Button
                  className={styles.actionButton}
                  variant="outlined"
                  startIcon={<IconWork />}
                  href={contact.wellfound}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Wellfound
                </Button>
              ) : null}
              <Button className={styles.actionButton} variant="outlined" href={`tel:${contact.phone}`}>
                Call phone
              </Button>
            </div>
            <p className={styles.pageLead}>WhatsApp business number: {contact.phone}</p>
          </CardContent>
        </Card>

        <Card className={styles.full}>
          <CardContent>
            <h3 className={styles.sectionTitle}>How to reach out</h3>
            <p className={styles.pageLead}>
              Share role context, expected ownership level, and delivery timeline. Responses are prioritized for active hiring discussions.
            </p>
            <div className={styles.messageGuide}>
              <p className={styles.groupName}>Helpful first message format</p>
              <div className={styles.bullets}>
                <p>• Company and team context</p>
                <p>• Product/workflow complexity you need help with</p>
                <p>• Ownership expectation: hands-on IC scope or a blended IC-plus-team coordination scope</p>
                <p>• Hiring timeline and interview process</p>
              </div>
            </div>

            <div className={styles.responseNote}>
              <p className={styles.groupName}>Response expectation</p>
              <p className={styles.pageLead}>
                Email is the fastest route for hiring discussions and detailed role context. WhatsApp is available through the floating button for quick intros.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
