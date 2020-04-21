import React from 'react';
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
    settings: unknown;
    initialValues: unknown;
  };
}

const WidgetPage = ({
  className,
  widget,
}: WidgetPageProps) => {
  const {
    name,
    settings,
    initialValues,
  } = widget;

  return (
    <Page
      className={cx(className)}
      title={name}
    >
      <Container>
        <Row>
          <Col>
            <h1>{name}</h1>
            <ConfigForm
              settings={settings}
              initialValues={initialValues} />
            <Widget params={initialValues} />
            <WidgetUrl params={initialValues} />
            <BackToIndexLink />
          </Col>
        </Row>
      </Container>
    </Page>
  );
}

export default WidgetPage;
