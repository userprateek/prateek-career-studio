'use client';

import React from 'react';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import site from '../../content/site.json';

import styles from './FloatingWhatsAppButton.module.scss';

export default function FloatingWhatsAppButton() {
  const whatsappDigits = String(site.contact.phone || '').replace(/\D/g, '');
  const whatsappMessage = encodeURIComponent('Hi Prateek, I would like to discuss an opportunity.');
  const whatsappUrl = `https://wa.me/${whatsappDigits}?text=${whatsappMessage}`;

  return (
    <Fab
      color="success"
      aria-label="Chat on WhatsApp"
      href={whatsappUrl}
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
    >
      <WhatsAppIcon />
    </Fab>
  );
}
