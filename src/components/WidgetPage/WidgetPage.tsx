import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

interface WidgetPageProps {
  className: string;
  name: string;
}

const cx = classnames;

const WidgetPage = ({
  className,
  name,
}: WidgetPageProps) => (
  <div className={cx('WidgetPage', className)}>
    <h1>{name}</h1>
    <Link to="/">
      &larr; Back to main page
    </Link>
  </div>
);

export default WidgetPage;
