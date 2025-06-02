import React from 'react';
import EnrollmentDetailCard from './components/EnrollmentDetailCard';
import { Box, Button } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { useParams } from 'react-router';
import { useEnrollmentDetail } from './hooks/useEnrollmentDetail';

const EnrollmentDetail = () => {
  const { id } = useParams();
  const {
    enrollmentById: { data },
    handleUpdateStatusEnrollment
  } = useEnrollmentDetail(id);
  return (
    <MainCard>
      <Box sx={{ display: 'flex', justifyContent: 'end', gap: 3, my: 1 }}>
        <Button onClick={() => handleUpdateStatusEnrollment('Aprobado')} color="success" variant="contained">
          Aceptar solicitud
        </Button>
        <Button onClick={() => handleUpdateStatusEnrollment('Rehazado')} color="error" variant="contained">
          Rechazar solicitud{' '}
        </Button>
      </Box>
      <EnrollmentDetailCard enrollment={data || []} />
    </MainCard>
  );
};

export default EnrollmentDetail;
