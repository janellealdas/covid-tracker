import React from 'react';
import { Col } from 'react-bootstrap';
import SocialInteractionsCard, { VisitedPlacesCard } from './Cards';
import SocialInteractionsChart, { VisitedPlacesChart } from './Charts';
import '../components/Dashboard.css';

const Dashboard = () => {
  return (
    <div className='card'>
      <div>
        <Col md={12}>
          <Col md={6}>
            <SocialInteractionsCard />
          </Col>
          <Col md={6}>
            <VisitedPlacesCard />
          </Col>
        </Col>
      </div>
      <div>
        <Col md={12}>
          <Col md={6}>
            <SocialInteractionsChart />
          </Col>
          <Col md={6}>
            <VisitedPlacesChart />
          </Col>
        </Col>
      </div>
    </div>
  );
};

export default Dashboard;
