import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

const JobCheck = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');
  const [jobInfo, setJobInfo] = useState([]);

  useEffect(() => {
    fetch('http://54.252.71.19/:5000/joblist')
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  const handleSelect = (job) => {
    setSelectedJob(job);
    fetch(`http://54.252.71.19/:5000/jobinfo?job=${encodeURIComponent(job)}`)
      .then((response) => response.json())
      .then((data) => setJobInfo(data));
  };

  return (
    <Container>
      <Row>
        <Col>
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {selectedJob || 'Select a Job'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {jobs.map((job, index) => (
                <Dropdown.Item key={index} eventKey={job[0]}>
                  {job[0]}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          {jobInfo.length > 0 && (
            <div>
              <h3>Skills and Potential Jobs:</h3>
              <ul>
                {jobInfo.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default JobCheck;
