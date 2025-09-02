import React from 'react';
import { SectionProps } from '@/types';

const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  ...props
}) => {
  return (
    <section
      id={id}
      className={`section py-16 md:py-24 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
