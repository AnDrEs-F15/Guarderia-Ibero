import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Stack, Stepper, Step, StepLabel, StepConnector, useMediaQuery } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import { useWizard } from 'react-use-wizard';
import { useTheme } from '@emotion/react';
import StepperConector from './StepperConector';

// === ICONOS PERSONALIZADOS ===
const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 40,
  height: 40,
  display: 'flex',
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 20,
  ...(ownerState.active && {
    backgroundImage: 'secondary', //'linear-gradient(136deg, #a084e8 0%, #8e7cc3 50%, #7b68ee 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
  }),
  ...(ownerState.completed && {
    backgroundImage: 'linear-gradient(136deg, #a084e8 0%, #8e7cc3 50%, #7b68ee 100%)'
  })
}));

function ColorlibStepIcon(props) {
  const { active, completed, icon } = props;
  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />
  };

  return <ColorlibStepIconRoot ownerState={{ completed, active }}>{icons[icon]}</ColorlibStepIconRoot>;
}

// === COMPONENTE PRINCIPAL ===
const StepperForm = () => {
  const { activeStep, goToStep } = useWizard(); // useWizard: activeStep comienza en 1
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const steps = ['Informacion del niño', 'Aula', 'Información Acudiente', 'Cargue de documentos'];

  const handleStepClick = (stepIndex) => {
    if (stepIndex <= activeStep) {
      goToStep(stepIndex);
    }
  };

  return (
    <Stack sx={{ width: '100%', mb: 3 }} spacing={4}>
      <Stepper
        activeStep={activeStep + 1} // Ajuste para Stepper (base 0)
        orientation={isMobile ? 'vertical' : 'horizontal'}
        alternativeLabel={!isMobile}
        connector={<StepperConector />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              onClick={() => handleStepClick(index)}
              sx={{
                cursor: index + 1 <= activeStep ? 'pointer' : 'default',
                '& .MuiStepLabel-label': {
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  fontWeight: activeStep === index ? 'bold' : 'normal',
                  color: 'gray'
                }
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default StepperForm;
