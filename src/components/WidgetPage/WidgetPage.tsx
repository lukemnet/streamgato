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
    params: unknown;
  };
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
            <Widget params={settings} />
            <WidgetUrl params={settings} />
            <BackToIndexLink />
          </Col>
        </Row>
      </Container>
    </Page>
  );
}

export default WidgetPage;
