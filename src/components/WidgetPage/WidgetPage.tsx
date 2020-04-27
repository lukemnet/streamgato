import React, { useState, ChangeEvent } from 'react';
import cx from 'classnames';
import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/Page/Page';
import BackToIndexLink from 'components/BackToIndexLink/BackToIndexLink';
import ConfigFormSection from 'components/ConfigFormSection/ConfigFormSection';
import Widget from 'components/Widget/Widget';
import WidgetUrl from 'components/WidgetUrl/WidgetUrl';
import getDefaultSettings from 'helpers/getDefaultSettings/getDefaultSettings';
import getComputedSettings from 'helpers/getComputedSettings/getComputedSettings';
import getShorthandValues from 'helpers/getShorthandValues/getShorthandValues';

interface WidgetObject {
  name: string;
  alias: string;
  params: {
    [key:string]: {
      type: string;
      label: string;
      shorthand: string;
      value: string | number;
      min?: number;
      max?: number;
    }
  }
}
interface WidgetPageProps {
  className?: string;
  widget: WidgetObject;
}

const WidgetPage = ({
  className,
  widget,
}: WidgetPageProps) => {
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
  }

  return (
    <Page
      className={cx(className)}
      title={name}
    >
      <Container fluid="md">
        <Row>
          <Col>
            <h1>{name}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <ConfigFormSection
              params={settings}
              onChange={onChange}
            />
          </Col>
          <Col>
            <Widget
              alias={alias}
              params={computedSettings}
            />
            <WidgetUrl
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
}

export default WidgetPage;
