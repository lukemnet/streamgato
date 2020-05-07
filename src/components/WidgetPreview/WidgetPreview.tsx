import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import WidgetsWithRefs from 'components/WidgetsWithRefs/WidgetsWithRefs';
import { ShorthandValues } from 'types';
import convertToMiliseconds from 'helpers/convertToMiliseconds/convertToMiliseconds';
import styles from './WidgetPreview.module.scss';

interface WidgetPreviewProps {
  alias: string;
  params: ShorthandValues;
}

const cx = classnames.bind(styles);

const WidgetPreview = ({ alias, params }: WidgetPreviewProps) => {
  const ref = useRef(null);
  const [ widgetParams, setWidgetParams ] = useState(params);
  useEffect(() => {
    setWidgetParams(params);
    ((ref as any).current).setTime(convertToMiliseconds({
      h: Number(widgetParams.h),
      m: Number(widgetParams.m),
      s: Number(widgetParams.s),
    }));
    ((ref as any).current).reset(); // eslint-disable-line
    ((ref as any).current).start();
  }, [widgetParams.h, widgetParams.m, widgetParams.s,  params, ref]);

  return (
    <div className={cx('WidgetPreview')}>
      <WidgetsWithRefs
        alias={alias}
        params={widgetParams}
        ref={ref}
      />
    </div>
  );
};

export default WidgetPreview;
