import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  const features = [
    {
      title: 'Job Check',
      description: 'Assess your job\'s automation risk and plan future career moves with AI insights.',
      imgSrc: '/1.jpg',
      link: '/job-check',
      button:'Check your job'
    },
    {
      title: 'Industry Analysis',
      description: 'Understand AI\'s impact on industries to inform decisions and create targeted policies.',
      imgSrc: '/1.jpg',
      link: '/industry-analysis',
      button:'Get the analysis'
    },
    {
      title: 'Tools List',
      description: 'Boost productivity with our comprehensive list of AI-powered tools for businesses.',
      imgSrc: '/3.jpg',
      link: '/tools-list',
      button:'Find all tools'
    },
    {
      title: 'Superannuation',
      description: 'Secure your financial future with structured retirement planning and goal-setting.',
      imgSrc: '/4.jpg',
      link: '/superannuation',
      button:'Make your plan'
    }
  ];
  return (
    <Container style={{ paddingTop: '2vw' }}>
      <Row>
        {features.map((feature, index) => (
          <Col key={index} md={12} className="mb-4">
            <Row>
              <Col md={4}>
                <img src={feature.imgSrc} alt={feature.title} style={{ borderRadius: '20px' }} className="img-fluid" />
              </Col>
              <Col md={7} className="d-flex align-items-center justify-content-center">
                <div>
                  <h3><b>{feature.title}</b></h3>
                  <p>{feature.description}</p>
                  <Button variant="primary" href={feature.link}>{feature.button}</Button>
                </div>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
