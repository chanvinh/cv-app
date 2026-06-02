import React from 'react';
import Title from '../title/title';
import Sperator from '../sperator/sperator';
import styles from './section.module.css';

interface PropsSection {
  title: string;
  children?: React.ReactNode;
  separator?: boolean;
}

const Section = ({ title, children, separator = false }: Readonly<PropsSection>) => {
  return (
    <section className={styles.section}>
      <Title label={title} />
      {children}
      {separator && <Sperator />}
    </section>
  );
};

export default Section;
