import React from 'react';
import classnames from 'classnames';
import { Container, Row, Col } from 'react-bootstrap';
import GenericPage from 'components/GenericPage/GenericPage';
import BackToIndexLink from 'components/BackToIndexLink/BackToIndexLink';
import { WidgetConfig } from 'config/widgets';

interface WidgetPageProps {
  className?: string;
  widget: WidgetConfig;
}

const cx = classnames;

const WidgetPage = ({
  className,
  widget,
}: WidgetPageProps) => (
  <GenericPage className={cx(className)}>
    <Container>
      <Col>
        <Row>
          <h1>{widget.name}</h1>
          <BackToIndexLink />
        </Row>
      </Col>
    </Container>
  </GenericPage>
);

export default WidgetPage;
