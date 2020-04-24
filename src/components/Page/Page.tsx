import React, { ReactElement, useEffect } from 'react';
import classnames from 'classnames/bind';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { metadata } from 'config/config';

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
  useEffect(() => {
    document.title = title
      ? `${title} | ${metadata.title}`
      : metadata.title;
  }, [title]);

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
