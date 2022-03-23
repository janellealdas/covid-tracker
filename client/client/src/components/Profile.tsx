import React from 'react';
import { Col } from 'react-bootstrap';
import '../components/Header.css';
import ProfilePicture from '../assets/Mikasa_Ackermann.png';
import NotificationBadge from '../components/NotificationBadge';

const Profile = () => {
  return (
    <div className='profile'>
      <Col md={3}>
        <img src={ProfilePicture} alt='logo' className='profile-picture' />
      </Col>
      <Col md={6} className='profile-text'>
        <p>Mikasa Ackerman</p>
      </Col>
      <Col md={1}>
        <NotificationBadge />
      </Col>
    </div>
  );
};

export default Profile;
