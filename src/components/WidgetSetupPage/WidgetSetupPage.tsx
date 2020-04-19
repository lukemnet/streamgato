import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

interface WidgetSetupPageProps {
  className: string;
  name: string;
}

const cx = classnames;

const WidgetSetupPage = ({ className, name }: WidgetSetupPageProps) => (
  <div className={cx('WidgetSetupPage', className)}>
    <h1>{name}</h1>
    <Link to="/">
      &larr; Back to main page
    </Link>
  </div>
);

export default WidgetSetupPage;
