import React, { ReactElement } from 'react';
import classnames from 'classnames/bind';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import './bootstrap.scss';
import styles from './GenericPage.module.scss';

interface GenericPageProps {
  className?: string;
  children: ReactElement | ReactElement[];
}

const cx = classnames.bind(styles);

const GenericPage = ({
  className,
  children
}: GenericPageProps) => (
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

export default GenericPage;
