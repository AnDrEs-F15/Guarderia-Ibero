import { Box, Button } from '@mui/material';
import React from 'react';
import { useWizard } from 'react-use-wizard';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';
import { useNavigate } from 'react-router-dom';

const WizardFooter = ({ handleSubmit }) => {
  const { previousStep, isLastStep, isFirstStep, stepCount, activeStep } = useWizard();
  const navigate = useNavigate();

  const handleFinalStep = () => {
    // Llama al submit por si tienes lógica adicional
    handleSubmit();

    // Luego redirige al componente de felicitación
    navigate('/form-register-end');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        pt: 3,
        gap: 2,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: 2
      }}
    >
      <Button color="secondary" disabled={isFirstStep} onClick={previousStep} variant="contained">
        Atrás
      </Button>
      <AnimateButton>
        <Button color="secondary" onClick={isLastStep ? handleFinalStep : handleSubmit} variant="contained">
          {isLastStep ? 'Finalizar' : 'Siguiente'}
        </Button>
      </AnimateButton>
    </Box>
  );
};

export default WizardFooter;
