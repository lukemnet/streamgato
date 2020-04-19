import React, { ReactElement, useEffect } from 'react';
import classnames from 'classnames/bind';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import './bootstrap.scss';
import styles from './GenericPage.module.scss';
import metadata from 'config/metadata.json';

interface GenericPageProps {
  className?: string;
  title?: string;
  children: ReactElement | ReactElement[];
}

const cx = classnames.bind(styles);

const GenericPage = ({
  className,
  title,
  children
}: GenericPageProps) => {
  useEffect(() => {
    document.title = title
      ? `${title} | ${metadata.title}`
      : metadata.title;
  });

  return (
    <div className={cx('GenericPage', className)}>
      <Header />
      <main id="content">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default GenericPage;
