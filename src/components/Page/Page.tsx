import React, { ReactElement, useEffect } from 'react';
import classnames from 'classnames/bind';
import Header from 'components/Header/Header';
import Content from 'components/Content/Content';
import Footer from 'components/Footer/Footer';
import setPageTitle from 'helpers/setPageTitle/setPageTitle';
import './bootstrap.scss';
import styles from './Page.module.scss';

interface PageProps {
  className?: string;
  title?: string;
  children: ReactElement;
}

const cx = classnames.bind(styles);

const Page = ({
  className,
  title,
  children
}: PageProps) => {
  useEffect(() => {
    setPageTitle(title);
  }, [title]);

  return (
    <div className={cx('Page', className)}>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </div>
  );
};

export default Page;
