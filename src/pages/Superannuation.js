import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Superannuation = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p>This is the Superannuation</p>
          <Button variant="primary">Get Started</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Superannuation;
