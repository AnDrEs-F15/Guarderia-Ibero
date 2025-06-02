import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useWizard } from 'react-use-wizard';
import GlobalForm from '../../../components/GlobalForm';
import { useChildForm } from '../hooks/useChildForm';
import { Box } from '@mui/material';
import WizardFooter from './wizard/WizardFooter';
import GlobalNote from '../../../components/GlobalNote';

const ChildForm = () => {
  const { childForm, childSchema, handleChildSubmit, methods } = useChildForm();

  return (
    <>
      <FormProvider {...methods}>
        <Box sx={{ display: 'flex', width: { xs: '100%', sm: '55%' }, margin: '0 auto', gap: 4, background: '#FFF' }}>
          <GlobalNote color="#673ab7" bgNote="#f3f3f3">
            Completa los datos personales del niño o niña. Esta información nos ayudará a brindarle una atención adecuada y personalizada.
          </GlobalNote>
        </Box>
        <Box sx={{ display: 'flex', width: { xs: '100%', sm: '50%' }, margin: '0 auto', gap: 4, background: '#FFF' }}>
          <GlobalForm formItems={childForm} />
        </Box>
        <WizardFooter handleSubmit={handleChildSubmit} />
      </FormProvider>
    </>
  );
};

export default ChildForm;
