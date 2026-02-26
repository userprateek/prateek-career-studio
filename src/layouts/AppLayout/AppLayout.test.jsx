import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

vi.mock('next/navigation', () => ({
  usePathname: () => '/'
}));

vi.mock('next/link', () => ({
  default: ({ children, href, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}));

import AppLayout from './AppLayout';

describe('AppLayout', () => {
  it('renders profile title and nav labels', () => {
    render(<AppLayout><div>Page Content</div></AppLayout>);

    expect(screen.getAllByText('Prateek Kumar').length).toBeGreaterThan(0);
    expect(screen.getByText('Home', { selector: 'a' })).toBeInTheDocument();
    expect(screen.getByText('Projects', { selector: 'a' })).toBeInTheDocument();
    expect(screen.getByText('Resume', { selector: 'a' })).toBeInTheDocument();
    expect(screen.getByText('Contact', { selector: 'a' })).toBeInTheDocument();
  });

  it('route controls are links', () => {
    render(<AppLayout><div>Page Content</div></AppLayout>);

    const projects = screen.getByText('Projects', { selector: 'a' });
    fireEvent.click(projects);

    expect(projects.tagName.toLowerCase()).toBe('a');
  });
});
