import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MaterialTable, { Column } from 'material-table';
import { Link } from 'react-router-dom';
import { FormControlLabel, Checkbox, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { SocialInteraction } from '../models/SocialInteraction';
import { useData } from '../hooks/useData';
import * as SocialInteractionActions from '../redux/actions/SocialInteractionActions';
import '../components/Dashboard.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: '20px',
    },
    label: {
      fontSize: '12px',
    },
    checkbox: {
      marginLeft: '1000px',
    },
  })
);

const columnHeaders: Array<Column<SocialInteraction>> = [
  {
    title: 'Id',
    field: 'id',
    hidden: true,
    cellStyle: {
      textAlign: 'center',
    },
  },
  {
    title: 'Name',
    field: 'name',
    cellStyle: {
      textAlign: 'center',
    },
    validate: (rowData) => rowData.name !== '',
  },
  {
    title: 'Date',
    field: 'date',
    type: 'date',
    cellStyle: {
      textAlign: 'center',
    },
    validate: (rowData) => rowData.date !== null,
  },
  {
    title: 'Hours',
    field: 'hours',
    cellStyle: {
      textAlign: 'center',
    },
    validate: (rowData) => rowData.hours > 0,
  },
  {
    title: 'Is Social Distancing Observed?',
    field: 'isSocialDistancing',
    type: 'boolean',
    cellStyle: {
      textAlign: 'center',
    },
  },
];

const SocialInteractionsList: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { socialInteraction, loading } = useData();
  const [showLast14Days, setshowLast14Days] = React.useState(false);

  const handleAddSocialInteraction = (socialInteraction: SocialInteraction) => {
    dispatch(
      SocialInteractionActions.AddSocialInteractionAction(socialInteraction)
    );
  };

  const handleDeleteSocialInteraction = (
    socialInteraction: SocialInteraction
  ) => {
    dispatch(
      SocialInteractionActions.DeleteSocialInteractionAction(socialInteraction)
    );
  };

  const handleUpdateSocialInteraction = (
    socialInteraction: SocialInteraction
  ) => {
    dispatch(
      SocialInteractionActions.UpdateSocialInteractionAction(socialInteraction)
    );
  };

  const handleCheckBoxChange = () => {
    setshowLast14Days(!showLast14Days);
  };

  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  let dayAfterCurrentDate = currentDate.toISOString().slice(0, 10);

  let date = new Date();
  date.setDate(date.getDate() - 14);
  let fourteenDaysAgo = new Date(date).toISOString().slice(0, 10);

  let socialInteractionFor14days = socialInteraction.filter(
    (item) =>
      new Date(item.date).toISOString().slice(0, 10) >= fourteenDaysAgo &&
      new Date(item.date).toISOString().slice(0, 10) <= dayAfterCurrentDate
  );

  useEffect(() => {
    dispatch(SocialInteractionActions.FetchSocialInteractionAction());
  }, []);

  return (
    <div>
      <div className='link-dashboard'>
        <Link to='/home'>Back to Dashboard</Link>
      </div>
      <FormControlLabel
        classes={{
          label: classes.label,
        }}
        control={
          <Checkbox
            classes={{
              root: classes.checkbox,
            }}
            checked={showLast14Days}
            onChange={handleCheckBoxChange}
            name='checkedB'
            color='primary'
          />
        }
        label='Display records within last 14 days'
      />
      <MaterialTable
        title={
          <Typography variant='h6' className={classes.title}>
            Social Interaction List
          </Typography>
        }
        isLoading={loading}
        columns={columnHeaders}
        data={showLast14Days ? socialInteractionFor14days : socialInteraction}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve(null);
                handleAddSocialInteraction(newData);
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              resolve(null);
              handleUpdateSocialInteraction(newData);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              resolve(null);
              handleDeleteSocialInteraction(oldData);
            }),
        }}
        options={{
          rowStyle: (rowData) => {
            if (!rowData.isSocialDistancing) {
              return { backgroundColor: '#fccfcc' };
            }
            return { textAlign: 'center' };
          },
          headerStyle: {
            backgroundColor: '#a7cef2',
            color: '#000',
            fontSize: '15px',
            textAlign: 'center',
          },
          searchFieldStyle: {
            fontSize: '13px',
          },
        }}
      />
      <br />
    </div>
  );
};

export default SocialInteractionsList;
