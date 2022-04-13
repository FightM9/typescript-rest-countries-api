import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Constrains and horizontally centers content
 * based on viewport width
 */

export default function Container({children, className=''}:ContainerProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
}

