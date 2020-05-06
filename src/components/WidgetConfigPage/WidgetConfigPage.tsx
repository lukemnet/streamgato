import React, { useState, ChangeEvent } from 'react';
import classnames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import Container from 'components/Container/Container';
import Page from 'components/Page/Page';
import BackToIndexLink from 'components/BackToIndexLink/BackToIndexLink';
import ConfigFormSection from 'components/ConfigFormSection/ConfigFormSection';
import WidgetPreview from 'components/WidgetPreview/WidgetPreview';
import WidgetUrlSection from 'components/WidgetUrlSection/WidgetUrlSection';
import getDefaultSettings from 'helpers/getDefaultSettings/getDefaultSettings';
import getComputedSettings from 'helpers/getComputedSettings/getComputedSettings';
import getShorthandValues from 'helpers/getShorthandValues/getShorthandValues';
import { metadata } from 'config/config';
import { Widget } from 'types';
import styles from './WidgetConfigPage.module.scss';

interface WidgetConfigPageProps {
  className?: string;
  widget: Widget;
}

const cx = classnames.bind(styles);

const WidgetConfigPage = ({
  className,
  widget,
}: WidgetConfigPageProps) => {
  const {
    name,
    alias,
    params,
  } = widget;
  const defaultSettings = getDefaultSettings(params);
  const [ settings, setSettings ] = useState(params);
  const configValues = Object.values(settings);
  const shorthandSettings = getShorthandValues(configValues);
  const computedSettings = getComputedSettings(shorthandSettings, defaultSettings);
  const { widgetOrigin } = metadata;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSettings({
      ...settings,
      [name]: {
        ...settings[name],
        value: settings[name].type === 'number'
          ? Number(value)
          : value,
      },
    });
  };

  return (
    <Page
      className={cx('WidgetConfigPage', className)}
      title={name}
    >
      <Container>
        <Row className={cx('heading')}>
          <Col>
            <h1 className='mt-2'>{name}</h1>
          </Col>
        </Row>
        <Row>
          <Col
            sm={12}
            md={{ span: 6, order: 2 }}
            className={cx('fixed-right', 'sticky-top', 'preview', 'shadow', 'pt-3', 'pb-3')}
          >
            <div className={cx('top')}>
              <WidgetPreview
                alias={alias}
                params={computedSettings}
              />
            </div>
            <div className={cx('bottom')}>
              <WidgetUrlSection
                origin={widgetOrigin}
                alias={alias}
                params={computedSettings}
              />
            </div>
          </Col>
          <Col
            sm={12}
            md={{ span: 6, order: 1 }}
          >
            <ConfigFormSection
              alias={alias}
              params={settings}
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <BackToIndexLink />
          </Col>
        </Row>
      </Container>
    </Page>
  );
};

export default WidgetConfigPage;
