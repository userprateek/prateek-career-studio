import React from 'react';
import styles from './Primitives.module.scss';

function cx(...parts) {
  return parts.filter(Boolean).join(' ');
}

export function Card({ className, children }) {
  return <section className={cx(styles.card, className)}>{children}</section>;
}

export function CardContent({ className, children }) {
  return <div className={cx(styles.cardContent, className)}>{children}</div>;
}

export function Chip({ className, tone, children }) {
  return <span className={cx(styles.chip, tone === 'primary' && styles.chipPrimary, className)}>{children}</span>;
}

export function Button({ className, variant = 'contained', size, href, startIcon, endIcon, children, ...props }) {
  const content = (
    <>
      {startIcon ? <span className={styles.icon} aria-hidden="true">{startIcon}</span> : null}
      <span>{children}</span>
      {endIcon ? <span className={styles.icon} aria-hidden="true">{endIcon}</span> : null}
    </>
  );

  const classes = cx(styles.button, styles[variant], size === 'small' && styles.small, props.disabled && styles.disabled, className);

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {content}
    </button>
  );
}

export function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z" />
    </svg>
  );
}

export function IconMail() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v.2L12 13l8-4.8V8H4Zm16 8V10l-8 4.8L4 10v6h16Z" />
    </svg>
  );
}

export function IconExternal() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z" />
    </svg>
  );
}

export function IconDownload() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M11 3h2v9.17l2.59-2.58L17 11l-5 5-5-5 1.41-1.41L11 12.17V3Zm-7 14h16v4H4v-4Z" />
    </svg>
  );
}

export function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 0 0 3.2 5.02c0 1.1.9 2 2.03 2 1.11 0 2.02-.9 2.02-2A2.02 2.02 0 0 0 5.25 3ZM20.8 13.48c0-3.16-1.69-4.63-3.94-4.63-1.82 0-2.64 1-3.1 1.7V8.5h-3.38V20h3.38v-6.43c0-.34.02-.67.12-.9.27-.68.9-1.38 1.95-1.38 1.38 0 1.93 1.04 1.93 2.57V20h3.38v-6.52Z" />
    </svg>
  );
}

export function IconWork() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M10 4h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h4V6a2 2 0 0 1 2-2Zm4 4V6h-4v2h4Zm6 4H4v6h16v-6Z" />
    </svg>
  );
}

export function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.66 15l-1.2 4.38 4.5-1.18A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.08-1.11l-.3-.18-2.67.7.72-2.59-.2-.3A8 8 0 1 1 12 20Zm4.39-5.55c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.19-.7-.62-1.17-1.39-1.3-1.62-.14-.24-.01-.36.1-.48.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.8-.2-.47-.41-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.68 2.58 4.08 3.62.57.25 1.02.4 1.37.5.58.18 1.1.15 1.52.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.05-.1-.2-.16-.44-.28Z" />
    </svg>
  );
}
