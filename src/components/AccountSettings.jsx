import React, { useState } from 'react';
import { Button } from '@mui/material';
import DeleteAccount from './DeleteAccount';

function AccountSettings() {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeleteAccount = () => {
    // Logic to delete the account
    alert('Account deleted!');
  };

  return (
    <div>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={() => setShowDeleteDialog(true)}
      >
        Delete Account
      </Button>
      <DeleteAccount 
        show={showDeleteDialog}
        handleClose={() => setShowDeleteDialog(false)}
        handleDelete={handleDeleteAccount}
      />
    </div>
  );
}

export default AccountSettings;
