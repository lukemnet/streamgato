import React, { ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './Content.module.scss';

const cx = classnames.bind(styles);

interface ContentProps {
  children: ReactElement;
}

const Content = ({ children }: ContentProps) => (
  <main
    id='content'
    className={cx('Content')}
  >
    {children}
  </main>
);

export default Content;
