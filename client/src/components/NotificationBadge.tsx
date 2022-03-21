import React, { useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Badge, Button, Popover, Typography } from '@material-ui/core';
import ReportIcon from '@material-ui/icons/Report';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import '../components/Header.css';
import { useData } from '../hooks/useData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    errorTypo: {
      padding: theme.spacing(2),
      background: '#FCCFCC',
      width: '300px',
      fontSize: '15px',
    },
    goodTypo: {
      padding: theme.spacing(2),
      background: '#CEF7C2',
      width: '300px',
      fontSize: '15px',
    },
  })
);

const NotificationBadge = () => {
  const { socialInteraction, visitedPlace } = useData();
  const classes = useStyles();
  const [
    notificationMessageSocial,
    setNotificationMessageSocial,
  ] = React.useState<string>('');
  const [
    notificationMessagePlace,
    setNotificationMessagePlace,
  ] = React.useState<string>('');
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const warningMessageSocial =
    'You did not practice social distancing for the last 14 days. Stay at home and maintain 1-2 meters away from other people.';

  const goodMessageSocial =
    'You are maintaining proper social distancing. Keep it up.';

  const warningMessagePlace =
    'You have been exposed to a crowded place for the last 14 days. Try to avoid crowded places to minimize your exposure risk';

  const goodMessagePlace =
    'Thank you for helping to stop spread the virus by staying home.';

  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  let dayAfterCurrentDate = currentDate.toISOString().slice(0, 10);

  let date = new Date();
  date.setDate(date.getDate() - 14);
  let fourteenDaysAgo = new Date(date).toISOString().slice(0, 10);

  let socialInteractionFor14days = socialInteraction.filter(
    (item) =>
      new Date(item.date).toISOString().slice(0, 10) >= fourteenDaysAgo &&
      new Date(item.date).toISOString().slice(0, 10) <= dayAfterCurrentDate &&
      item.isSocialDistancing === false
  );

  let visitedPlaceFor14days = visitedPlace.filter(
    (item) =>
      new Date(item.date).toISOString().slice(0, 10) >= fourteenDaysAgo &&
      new Date(item.date).toISOString().slice(0, 10) <= dayAfterCurrentDate &&
      item.isCrowded === true
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    socialInteractionFor14days.length > 0 && visitedPlaceFor14days !== null
      ? setNotificationMessageSocial(warningMessageSocial)
      : setNotificationMessageSocial(goodMessageSocial);

    visitedPlaceFor14days.length > 0 && visitedPlaceFor14days !== null
      ? setNotificationMessagePlace(warningMessagePlace)
      : setNotificationMessagePlace(goodMessagePlace);
  }, [socialInteraction, visitedPlace]);

  return (
    <div>
      <Button onClick={handleClick} color='primary'>
        <Badge badgeContent={2} color='secondary'>
          <NotificationsActiveIcon style={{ fontSize: '50px' }} />
        </Badge>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Typography
          className={
            socialInteractionFor14days.length > 0
              ? classes.errorTypo
              : classes.goodTypo
          }
        >
          {socialInteractionFor14days.length > 0 ? <ReportIcon /> : ''}
          {notificationMessageSocial}
        </Typography>
        <Typography
          className={
            visitedPlaceFor14days.length > 0
              ? classes.errorTypo
              : classes.goodTypo
          }
        >
          {visitedPlaceFor14days.length > 0 ? <ReportIcon /> : ''}
          {notificationMessagePlace}
        </Typography>
      </Popover>
    </div>
  );
};

export default NotificationBadge;
