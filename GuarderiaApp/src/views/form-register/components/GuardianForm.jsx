import { Box, Button } from '@mui/material';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import GlobalForm from '../../../components/GlobalForm';
import { useGuardianForm } from '../hooks/useGuardianForm';
import WizardFooter from './wizard/WizardFooter';
import GlobalNote from '../../../components/GlobalNote';

const GuardianForm = () => {
  const { guardianForm, handleGuardSubmit, guardiantContextForm } = useGuardianForm();

  return (
    <>
      <FormProvider {...guardiantContextForm}>
        <Box sx={{ display: 'flex', width: { xs: '100%', sm: '55%' }, margin: '0 auto', gap: 4, background: '#FFF' }}>
          <GlobalNote textColor="gray" color="#673ab7" bgNote="#f3f3f3">
            Ingresa los datos del acudiente principal. Es importante contar con esta información para mantenernos en contacto y garantizar
            la seguridad del niño o niña.{' '}
          </GlobalNote>
        </Box>
        <Box sx={{ display: 'flex', width: { xs: '100%', sm: '50%' }, margin: '0 auto', gap: 4, background: '#FFF' }}>
          <GlobalForm formItems={guardianForm} />
        </Box>
        <WizardFooter handleSubmit={handleGuardSubmit} />
      </FormProvider>
    </>
  );
};

export default GuardianForm;
