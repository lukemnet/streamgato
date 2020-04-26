import React, { useState, ChangeEvent } from 'react';
import cx from 'classnames';
import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/Page/Page';
import BackToIndexLink from 'components/BackToIndexLink/BackToIndexLink';
import ConfigFormSection from 'components/ConfigFormSection/ConfigFormSection';
import Widget from 'components/Widget/Widget';
import WidgetUrl from 'components/WidgetUrl/WidgetUrl';

interface WidgetPageProps {
  className?: string;
  widget: {
    name: string;
    alias: string;
    params: any;
  };
}

interface ConfigParam {
  shorthand: string;
  value: string | number;
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

  const [ settings, setSettings ] = useState(params);
  const configValues = Object.values(settings) as ConfigParam[];
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSettings({
      ...settings,
      [e.target.name]: {
        ...settings[e.target.name],
        value: e.target.value,
      },
    });

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
            <Widget
              alias={alias}
              params={configValues}
            />
            <WidgetUrl
              alias={alias}
              params={configValues}
            />
            <BackToIndexLink />
          </Col>
        </Row>
      </Container>
    </Page>
  );
}

export default WidgetPage;
