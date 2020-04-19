import React from 'react';
import classnames from 'classnames';
import { Container, Row, Col } from 'react-bootstrap';
import GenericPage from 'components/GenericPage/GenericPage';
import BackToIndexLink from 'components/BackToIndexLink/BackToIndexLink';
import ConfigForm from 'components/ConfigForm/ConfigForm';
import { WidgetConfig } from 'components/App/App';

interface WidgetPageProps {
  className?: string;
  widget: WidgetConfig;
}

const cx = classnames;

const WidgetPage = ({
  className,
  widget,
}: WidgetPageProps) => {
  const { name, settings } = widget;
  return (
    <GenericPage
      className={cx(className)}
      title={widget.name}
    >
      <Container>
        <Row>
          <Col>
            <h1>{name}</h1>
            <ConfigForm settings={settings} />
            <BackToIndexLink />
          </Col>
        </Row>
      </Container>
    </GenericPage>
  );
}

export default WidgetPage;
