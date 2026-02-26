import React from 'react';

import { IconWhatsApp } from '../ui/Primitives';
import site from '../../content/site.json';

import styles from './FloatingWhatsAppButton.module.scss';

export default function FloatingWhatsAppButton() {
  const whatsappDigits = String(site.contact.phone || '').replace(/\D/g, '');
  const whatsappMessage = encodeURIComponent('Hi Prateek, I would like to discuss an opportunity.');
  const whatsappUrl = `https://wa.me/${whatsappDigits}?text=${whatsappMessage}`;

  return (
    <a
      aria-label="Chat on WhatsApp"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
    >
      <IconWhatsApp />
    </a>
  );
}
