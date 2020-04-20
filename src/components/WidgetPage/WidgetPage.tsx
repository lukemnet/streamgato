import React from 'react';
import cx from 'classnames';
import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/Page/Page';
import BackToIndexLink from 'components/BackToIndexLink/BackToIndexLink';
import ConfigForm from 'components/ConfigForm/ConfigForm';

interface WidgetPageProps {
  className?: string;
  widget: {
    name: string;
    settings: unknown;
  };
}

const WidgetPage = ({
  className,
  widget,
}: WidgetPageProps) => {
  return (
    <Page
      className={cx(className)}
      title={widget.name}
    >
      <Container>
        <Row>
          <Col>
            <h1>{widget.name}</h1>
            <ConfigForm settings={widget.settings} />
            <div style={{ overflow: "hidden"}}>
              {JSON.stringify(widget)}
            </div>
            <BackToIndexLink />
          </Col>
        </Row>
      </Container>
    </Page>
  );
}

export default WidgetPage;
