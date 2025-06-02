import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const GlobalModal = ({
  children,
  buttonTitle,
  modalTitle,
  modalFooter,
  handleOnClick,
  handleButtonClick = false,
  size,
  buttonVariant = 'contained',
  buttonDisabled = false,
  buttonColor,
  buttonBackground,
  buttonTextColor,
  actionTitleButton,
  sendButtonDisable = false,
  closeModal
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  useEffect(() => {
    setTimeout(() => setOpen(false), 1000);
  }, [closeModal]);
  return (
    <>
      <Button
        variant={buttonVariant}
        color={buttonColor}
        disabled={buttonDisabled}
        onClick={() => {
          handleButtonClick !== false && handleButtonClick();
          handleOpen();
        }}
        sx={{ color: buttonTextColor, bgcolor: buttonBackground }}
      >
        {buttonTitle}
      </Button>

      <Dialog open={open} maxWidth={size} fullWidth onClose={handleClose}>
        <DialogTitle sx={(theme) => ({ fontWeight: 400, borderBottom: 0.5, borderColor: theme.palette.grey[300] })}>
          {' '}
          {modalTitle}{' '}
        </DialogTitle>
        <IconButton
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500]
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={(theme) => ({ borderBottom: 0.5, borderColor: theme.palette.grey[300] })}>
          <Box>{children}</Box>
        </DialogContent>
        <DialogActions>
          <Button color={buttonColor} variant="contained" disabled={sendButtonDisable} onClick={handleOnClick}>
            {actionTitleButton}
          </Button>
          <Button onClick={handleClose} color="primart.soft" autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default GlobalModal;
