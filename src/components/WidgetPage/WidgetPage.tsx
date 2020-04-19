import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import GenericPage from 'components/GenericPage/GenericPage';

interface WidgetPageProps {
  className: string;
  name: string;
}

const cx = classnames;

const WidgetPage = ({
  className,
  name,
}: WidgetPageProps) => (
  <GenericPage className={cx('WidgetPage', className)}>
    <h1>{name}</h1>
    <Link to="/">
      &larr; Back to main page
    </Link>
  </GenericPage>
);

export default WidgetPage;
