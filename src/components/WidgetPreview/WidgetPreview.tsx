import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import WidgetsWithRefs from 'components/WidgetsWithRefs/WidgetsWithRefs';
import { WidgetAlias, ShorthandValues } from 'types';
import convertToMiliseconds from 'helpers/convertToMiliseconds/convertToMiliseconds';
import styles from './WidgetPreview.module.scss';

interface WidgetPreviewProps {
  alias: WidgetAlias;
  params: ShorthandValues;
}

const cx = classnames.bind(styles);

const WidgetPreview = ({ alias, params }: WidgetPreviewProps) => {
  const ref = useRef(null);
  const [ widgetParams, setWidgetParams ] = useState(params);
  useEffect(() => {
    setWidgetParams(params);

    const newTime = convertToMiliseconds({
      h: Number(params.h),
      m: Number(params.m),
      s: Number(params.s),
    });

    const setTime = (ref as any).current.props.initialTime;

    if (newTime !== setTime) {
      ((ref as any).current).setTime(convertToMiliseconds({
        h: Number(params.h),
        m: Number(params.m),
        s: Number(params.s),
      }));
      ((ref as any).current).reset(); // eslint-disable-line
      ((ref as any).current).start();
    }
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
