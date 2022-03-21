import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { Link } from 'react-router-dom';
import { SocialInteractionSummary } from '../models/SocialInteractionSummary';
import { VisitedPlaceSummary } from '../models/VisitedPlaceSummary';
import * as SocialInteractionActions from '../redux/actions/SocialInteractionActions';
import * as VisitedPlaceActions from '../redux/actions/VisitedPlaceActions';
import { useData } from '../hooks/useData';
import '../components/Dashboard.css';

const SocialInteractionsChart: React.FC = () => {
  const { socialInteraction } = useData();
  const dispatch = useDispatch();

  let socialInteractionSummary = socialInteraction.map((item) => {
    return new SocialInteractionSummary({
      name: item.name,
      date: item.date,
    });
  });
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  let dayAfterCurrentDate = currentDate.toISOString().slice(0, 10);

  let date = new Date();
  date.setDate(date.getDate() - 7);
  let sevenDaysAgo = new Date(date).toISOString().slice(0, 10);

  let socialInteractionList = socialInteractionSummary.filter(
    (item) => item.date >= sevenDaysAgo && item.date <= dayAfterCurrentDate
  );

  useEffect(() => {
    dispatch(SocialInteractionActions.FetchSocialInteractionAction());
  }, []);

  const res = Array.from(
    socialInteractionList.reduce(
      (m, { date, count }) =>
        m.set(
          date.toString().substr(0, 10),
          (m.get(date.toString().substr(0, 10)) || 0) + count
        ),
      new Map()
    ),
    ([date, count]) => ({ date, count })
  );

  return (
    <div>
      <Paper>
        <Row>
          <Link className='row' to='/socialinteractionlist'>
            View all
          </Link>
        </Row>
        <Chart data={res} height={370}>
          <ArgumentAxis />
          <ValueAxis />
          <BarSeries valueField='count' argumentField='date' />
          <Title text='Recent Social Interactions' />
          <Animation />
        </Chart>
      </Paper>
      <br />
    </div>
  );
};

export default SocialInteractionsChart;

const VisitedPlacesChart: React.FC = () => {
  const { visitedPlace } = useData();
  const dispatch = useDispatch();

  let visitedPlaceSummary = visitedPlace.map((item) => {
    return new VisitedPlaceSummary({
      place: item.place,
      date: item.date,
    });
  });
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  let dayAfterCurrentDate = currentDate.toISOString().slice(0, 10);

  let date = new Date();
  date.setDate(date.getDate() - 7);
  let sevenDaysAgo = new Date(date).toISOString().slice(0, 10);

  let visitedPlaceList = visitedPlaceSummary.filter(
    (item) => item.date >= sevenDaysAgo && item.date <= dayAfterCurrentDate
  );

  useEffect(() => {
    dispatch(VisitedPlaceActions.FetchVisitedPlaceAction());
  }, []);

  const res = Array.from(
    visitedPlaceList.reduce(
      (m, { date, count }) =>
        m.set(
          date.toString().substr(0, 10),
          (m.get(date.toString().substr(0, 10)) || 0) + count
        ),
      new Map()
    ),
    ([date, count]) => ({ date, count })
  );

  return (
    <div>
      <Paper>
        <Row>
          <Link className='row' to='/visitedplacelist'>
            View all
          </Link>
        </Row>
        <Chart data={res} height={370}>
          <ArgumentAxis />
          <ValueAxis />
          <BarSeries valueField='count' argumentField='date' />
          <Title text='Recent Visited Places' />
          <Animation />
        </Chart>
      </Paper>
      <br />
    </div>
  );
};

export { VisitedPlacesChart };
