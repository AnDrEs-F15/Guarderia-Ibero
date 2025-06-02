import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import StepperForm from './components/wizard/StepperForm';
import AppMultiStep from './components/wizard/AppMultiStep';
import { Box } from '@mui/material';
import AppBar from './components/appbar/AppBar';
import { FormContextProvider } from './context/FormContext';
const RegisterFormIndex = () => {
  return (
    <>
      <AppBar></AppBar>
      <MainCard /* title="Formulario Inscripcion" */>
        <Box sx={{ width: { xs: '100%', sm: '80%' }, margin: '0 auto' }}>
          <FormContextProvider>
            <AppMultiStep />
          </FormContextProvider>
        </Box>
      </MainCard>
    </>
  );
};

export default RegisterFormIndex;
