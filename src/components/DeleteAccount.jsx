import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

function DeleteAccount({ show, handleClose, handleDelete }) {
  return (
    <Dialog open={show} onClose={handleClose}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Are you sure you want to delete your account? This action cannot be undone.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button 
          onClick={() => {
            handleDelete();
            handleClose(); // Close dialog after deletion
          }} 
          color="secondary"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteAccount;
