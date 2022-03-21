import React, { useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import '../components/Dashboard.css';
import { VisitedPlace } from '../models/VisitedPlace';

interface Props {
  modalStatus: boolean;
  handleClose: () => void;
  handleSave: (visitedPlace: any) => void;
  visitedPlace: VisitedPlace[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: '25px',
    },
    option: {
      fontSize: '13px',
    },
    input: {
      fontSize: '13px',
    },
  })
);

const VisitedPlacesModal: React.FC<Props> = ({
  modalStatus,
  handleClose,
  handleSave,
  visitedPlace,
}) => {
  const classes = useStyles();
  const [place, setPlace] = React.useState<string>();
  const [date, setDate] = React.useState<Date>();
  const [hours, setHours] = React.useState<string>();
  const [isCrowded, setIsCrowded] = React.useState(false);
  const [btnDisable, setBtnDisable] = React.useState(true);
  const [options, setOptions] = React.useState<string[]>(
    visitedPlace.map((item) => {
      return item.place;
    })
  );

  const handlePlaceChange = (event: any) => {
    setPlace(event.target.value);
  };
  const handleDateChange = (event: any) => {
    setDate(event.target.value);
  };
  const handleHoursChange = (event: any) => {
    setHours(event.target.value);
  };
  const handleCheckBoxChange = () => {
    setIsCrowded(!isCrowded);
  };

  const handleCancel = () => {
    handleClose();
    setPlace('');
    setDate(undefined);
    setHours('');
    setIsCrowded(false);
  };

  const handleSubmit = (newVisitedPlace: VisitedPlace) => {
    handleSave(newVisitedPlace);
    setPlace('');
    setDate(undefined);
    setHours('');
    setIsCrowded(false);
  };

  let optionList = visitedPlace.map((item) => {
    return item.place;
  });

  const getDistinctArray = (optionList: string[]) => {
    let optionsDistinct = [...new Set(optionList)];
    return optionsDistinct;
  };

  let dateNow = new Date();
  dateNow.setDate(dateNow.getDate() + 1);
  let dateToday = new Date(dateNow).toISOString().slice(0, 10);

  useEffect(() => {
    setOptions(getDistinctArray(optionList));
    place && date && hours ? setBtnDisable(false) : setBtnDisable(true);
  }, [visitedPlace, place, date, hours]);

  let newVisitedPlace = new VisitedPlace({
    place,
    date,
    hours,
    isCrowded,
  });

  return (
    <div>
      <Dialog
        open={modalStatus}
        onClose={handleClose}
        disableBackdropClick
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          <Typography variant='h6' className={classes.title}>
            Add Visited Place
          </Typography>
        </DialogTitle>
        <DialogContent>
          <div>
            <Autocomplete
              classes={{
                option: classes.option,
                input: classes.input,
              }}
              id='autocomplete-place'
              disableClearable
              clearOnBlur={false}
              options={options.map((option) => option)}
              onSelect={handlePlaceChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputLabelProps={{ style: { fontSize: 13 } }}
                  required
                  helperText={' '}
                  variant='outlined'
                  id='place'
                  label='Place'
                  fullWidth
                  onChange={handlePlaceChange}
                />
              )}
            />
            <TextField
              required
              helperText=' '
              id='date'
              variant='outlined'
              type='Date'
              fullWidth
              InputProps={{
                inputProps: {
                  max: dateToday,
                },
                classes: {
                  input: classes.input,
                },
              }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={handleDateChange}
            />
            <TextField
              required
              helperText=' '
              variant='outlined'
              id='hours'
              label='Hours'
              type='Number'
              fullWidth
              InputProps={{
                inputProps: {
                  min: 1,
                  max: 24,
                  autoComplete: 'off',
                },
                classes: {
                  input: classes.input,
                },
              }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={handleHoursChange}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isCrowded}
                  onChange={handleCheckBoxChange}
                  name='checkedB'
                  color='primary'
                />
              }
              label='Is Visited Place Crowded?'
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.input}
            onClick={handleCancel}
            color='primary'
          >
            Cancel
          </Button>
          <Button
            className={classes.input}
            disabled={btnDisable}
            onClick={() => handleSubmit(newVisitedPlace)}
            color='primary'
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default VisitedPlacesModal;
