import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Card, CardActions, CardContent, Button, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import GroupIcon from '@material-ui/icons/Group';
import PlaceIcon from '@material-ui/icons/Place';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SocialInteractionsModal from './AddModalSocialInteraction';
import VisitedPlacesModal from './AddModalVisitedPlace';
import { SocialInteraction } from '../models/SocialInteraction';
import { VisitedPlace } from '../models/VisitedPlace';
import * as SocialInteractionActions from '../redux/actions/SocialInteractionActions';
import * as VisitedPlaceActions from '../redux/actions/VisitedPlaceActions';
import { useData } from '../hooks/useData';
import '../components/Dashboard.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '350px',
      height: '170px',
      display: 'inline-block',
    },
    count: {
      fontSize: '20px',
      marginRight: '30px',
      marginTop: '5px',
    },
  })
);

const SocialInteractionsCard: React.FC = () => {
  const classes = useStyles();
  const [modalStatus, setModalStatus] = React.useState(false);
  const { socialInteraction } = useData();
  const dispatch = useDispatch();

  const handleAddSocialInteraction = (socialInteraction: SocialInteraction) => {
    dispatch(
      SocialInteractionActions.AddSocialInteractionAction(socialInteraction)
    );
  };

  const handleOpen = () => {
    setModalStatus(true);
  };

  const handleClose = () => {
    setModalStatus(false);
  };

  const handleSave = (socialInteraction: any) => {
    setModalStatus(false);
    handleAddSocialInteraction(socialInteraction);
  };

  return (
    <div className='card'>
      <Card elevation={3} className={classes.root}>
        <CardContent className='card-text'>Add Social Interaction</CardContent>
        <Row>
          <Col md={5}>
            <GroupIcon style={{ fontSize: 40 }} />
          </Col>
          <Col md={7}>
            <div className={classes.count}>{socialInteraction.length}</div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <CardActions>
              <div className='card-button'>
                <Button size='small' onClick={handleOpen}>
                  <Fab color='primary' aria-label='add'>
                    <AddIcon />
                  </Fab>
                </Button>
              </div>

              <SocialInteractionsModal
                modalStatus={modalStatus}
                handleClose={handleClose}
                handleSave={handleSave}
                socialInteraction={socialInteraction}
              />
            </CardActions>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SocialInteractionsCard;

const VisitedPlacesCard: React.FC = () => {
  const classes = useStyles();
  const [modalStatus, setModalStatus] = React.useState(false);
  const { visitedPlace } = useData();
  const dispatch = useDispatch();

  const handleAddVisitedPlace = (visitedPlace: VisitedPlace) => {
    dispatch(VisitedPlaceActions.AddVisitedPlaceAction(visitedPlace));
  };

  const handleOpen = () => {
    setModalStatus(true);
  };

  const handleClose = () => {
    setModalStatus(false);
  };

  const handleSave = (visitedPlace: any) => {
    setModalStatus(false);
    handleAddVisitedPlace(visitedPlace);
  };
  return (
    <div className='card'>
      <Card elevation={3} className={classes.root}>
        <CardContent className='card-text'>Add Visited Place</CardContent>
        <Row>
          <Col md={5}>
            <PlaceIcon style={{ fontSize: 40 }} />
          </Col>
          <Col md={7}>
            <div className={classes.count}>{visitedPlace.length}</div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <CardActions>
              <div className='card-button'>
                <Button size='small' onClick={handleOpen}>
                  <Fab color='primary' aria-label='add'>
                    <AddIcon />
                  </Fab>
                </Button>
              </div>

              <VisitedPlacesModal
                modalStatus={modalStatus}
                handleClose={handleClose}
                handleSave={handleSave}
                visitedPlace={visitedPlace}
              />
            </CardActions>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export { VisitedPlacesCard };
