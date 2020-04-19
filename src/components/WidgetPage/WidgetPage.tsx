import React from 'react';
import classnames from 'classnames';
import { Container, Row, Col } from 'react-bootstrap';
import GenericPage from 'components/GenericPage/GenericPage';
import BackToIndexLink from 'components/BackToIndexLink/BackToIndexLink';

interface WidgetPageProps {
  className?: string;
  name: string;
}

const cx = classnames;

const WidgetPage = ({
  className,
  name,
}: WidgetPageProps) => (
  <GenericPage className={cx(className)}>
    <Container>
      <Col>
        <Row>
          <h1>{name}</h1>
          <BackToIndexLink />
        </Row>
      </Col>
    </Container>
  </GenericPage>
);

export default WidgetPage;
