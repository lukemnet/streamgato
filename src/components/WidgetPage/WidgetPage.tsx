import React, { useState } from 'react';
import cx from 'classnames';
import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/Page/Page';
import BackToIndexLink from 'components/BackToIndexLink/BackToIndexLink';
import ConfigForm from 'components/ConfigForm/ConfigForm';
import Widget from 'components/Widget/Widget';
import WidgetUrl from 'components/WidgetUrl/WidgetUrl';

interface WidgetPageProps {
  className?: string;
  widget: {
    name: string;
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
    params,
  } = widget;

  const [ settings, setSettings ] = useState(params);
  const configValues = Object.values(settings) as ConfigParam[];

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
            <ConfigForm
              params={settings}
              onChange={setSettings}
            />
            <Widget params={configValues} />
            <WidgetUrl params={configValues} />
            <BackToIndexLink />
          </Col>
        </Row>
      </Container>
    </Page>
  );
}

export default WidgetPage;
