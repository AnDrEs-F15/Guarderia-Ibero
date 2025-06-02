import React from 'react';
import { Button, Typography, Box, Paper, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoSection from '../../../layout/MainLayout/LogoSection';

const Congratulation = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        px: 2
      }}
    >
      <Paper elevation={3} sx={{ p: 5, textAlign: 'center', maxWidth: 500 }}>
        <Typography variant="h4" color="text.secondary" gutterBottom>
          Guarderia pequeños pasos
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h4" color="success" gutterBottom>
          ¡Registro exitoso!
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          El proceso de inscripción se ha completado correctamente. Gracias por confiar en nuestro servicio.
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          Si deseas registrar a otro niño o niña, puedes hacerlo haciendo clic en el siguiente botón.
        </Typography>

        <Button variant="contained" color="secondary" size="large" onClick={() => navigate('/form-register')}>
          Realizar nueva inscripción
        </Button>
      </Paper>
    </Box>
  );
};

export default Congratulation;
