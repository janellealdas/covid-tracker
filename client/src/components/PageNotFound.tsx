import React from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent } from '@material-ui/core';
import '../components/Dashboard.css';

const PageNotFound = () => {
  return (
    <Dialog
      open={true}
      fullScreen
      disableBackdropClick
      aria-labelledby='form-dialog-title'
    >
      <DialogContent>
        <div className='contents'>Page Not Found</div>
        <Link className='links' to='/'>
          Back to Dashboard
        </Link>
      </DialogContent>
    </Dialog>
  );
};

export default PageNotFound;
