import React, { useState, ChangeEvent } from 'react';
import cx from 'classnames';
import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/Page/Page';
import BackToIndexLink from 'components/BackToIndexLink/BackToIndexLink';
import ConfigFormSection from 'components/ConfigFormSection/ConfigFormSection';
import WidgetPreview from 'components/WidgetPreview/WidgetPreview';
import WidgetUrlSection from 'components/WidgetUrlSection/WidgetUrlSection';
import getDefaultSettings from 'helpers/getDefaultSettings/getDefaultSettings';
import getComputedSettings from 'helpers/getComputedSettings/getComputedSettings';
import getShorthandValues from 'helpers/getShorthandValues/getShorthandValues';
import { Widget } from 'types';

interface WidgetConfigPageProps {
  className?: string;
  widget: Widget;
}

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
      className={cx(className)}
      title={name}
    >
      <Container fluid='lg'>
        <Row>
          <Col>
            <h1>{name}</h1>
          </Col>
        </Row>
        <Row>
          <Col
            sm={12}
            md={6}
          >
            <ConfigFormSection
              alias={alias}
              params={settings}
              onChange={onChange}
            />
          </Col>
          <Col
            sm={12}
            md={6}
          >
            <WidgetPreview
              alias={alias}
              params={computedSettings}
            />
            <WidgetUrlSection
              alias={alias}
              params={computedSettings}
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
