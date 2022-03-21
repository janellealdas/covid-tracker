import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Header from './components/Header';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import SocialInteractionsList from './components/SocialInteractionTable';
import VisitedPlacesList from './components/VisitedPlaceTable';
import PageNotFound from './components/PageNotFound';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Paper elevation={24} className='size'>
        <Col md={12}>
          <Header />
          <Col md={12} className='profile-app'>
            <Profile />
          </Col>
          <Col md={12}>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Redirect from='/home' to='/' />
              <Route
                path='/socialinteractionlist'
                component={SocialInteractionsList}
              />
              <Route path='/visitedplacelist' component={VisitedPlacesList} />
              <Route path='*' component={PageNotFound} />
            </Switch>
          </Col>
        </Col>
      </Paper>
    </div>
  );
}

export default App;
