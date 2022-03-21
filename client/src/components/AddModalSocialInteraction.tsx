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
import { SocialInteraction } from '../models/SocialInteraction';

interface Props {
  modalStatus: boolean;
  handleClose: () => void;
  handleSave: (socialInteraction: any) => void;
  socialInteraction: SocialInteraction[];
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

const SocialInteractionsModal: React.FC<Props> = ({
  modalStatus,
  handleClose,
  handleSave,
  socialInteraction,
}) => {
  const classes = useStyles();
  const [name, setName] = React.useState<string>();
  const [date, setDate] = React.useState<Date>();
  const [hours, setHours] = React.useState<string>();
  const [isSocialDistancing, setIsSocialDistancing] = React.useState(false);
  const [btnDisable, setBtnDisable] = React.useState(true);
  const [options, setOptions] = React.useState<string[]>(
    socialInteraction.map((item) => {
      return item.name;
    })
  );

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handleDateChange = (event: any) => {
    setDate(event.target.value);
  };
  const handleHoursChange = (event: any) => {
    setHours(event.target.value);
  };
  const handleCheckBoxChange = () => {
    setIsSocialDistancing(!isSocialDistancing);
  };

  const handleCancel = () => {
    handleClose();
    setName('');
    setDate(undefined);
    setHours('');
    setIsSocialDistancing(false);
  };

  const handleSubmit = (newSocialInteraction: SocialInteraction) => {
    handleSave(newSocialInteraction);
    setName('');
    setDate(undefined);
    setHours('');
    setIsSocialDistancing(false);
  };

  let optionList = socialInteraction.map((item) => {
    return item.name;
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
    name && date && hours ? setBtnDisable(false) : setBtnDisable(true);
  }, [socialInteraction, name, date, hours]);

  let newSocialInteraction = new SocialInteraction({
    name,
    date,
    hours,
    isSocialDistancing,
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
            Add Social Interaction
          </Typography>
        </DialogTitle>
        <DialogContent>
          <div>
            <Autocomplete
              classes={{
                option: classes.option,
                input: classes.input,
              }}
              id='autocomplete-name'
              disableClearable
              clearOnBlur={false}
              options={options.map((option) => option)}
              onSelect={handleNameChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputLabelProps={{ style: { fontSize: 13 } }}
                  required
                  helperText={' '}
                  variant='outlined'
                  id='name'
                  label='Name'
                  fullWidth
                  onChange={handleNameChange}
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
                  checked={isSocialDistancing}
                  onChange={handleCheckBoxChange}
                  name='checkedB'
                  color='primary'
                />
              }
              label='Is Social Distancing Observed?'
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
            onClick={() => handleSubmit(newSocialInteraction)}
            color='primary'
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SocialInteractionsModal;
