import React, { ReactElement, useEffect } from 'react';
import classnames from 'classnames/bind';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import config from 'config/config';

import './bootstrap.scss';
import styles from './Page.module.scss';

interface GenericPageProps {
  className?: string;
  title?: string;
  children: ReactElement | ReactElement[];
}

const cx = classnames.bind(styles);

const Page = ({
  className,
  title,
  children
}: GenericPageProps) => {
  const { metadata } = config;

  useEffect(() => {
    document.title = title
      ? `${title} | ${metadata.title}`
      : metadata.title;
  }, [title, metadata.title]);

  return (
    <div className={cx('Page', className)}>
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

export default Page;
