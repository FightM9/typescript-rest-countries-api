import React from 'react';
import styles from './Content.module.css';

interface ContentProps {
  children: React.ReactNode;
  aside?: boolean;
  side?: 'left' | 'right';
}

/**
 * Responsive content wrapper with sidebar option
 */

export default function Content({
  children,
  aside = false,
  side = 'left',
}: ContentProps) {
  
    if (aside) {
    return (
      <div
        className={
          side === 'left'
            ? `${styles.container} ${styles.aside_left}`
            : `${styles.container} ${styles.aside_right}`
        }
      >
        {children}
      </div>
    );
  }

  return <div className={`${styles.container}`}>{children}</div>;
}
