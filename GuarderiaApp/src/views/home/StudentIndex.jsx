import { Typography } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import GlobalModal from '../../components/GlobalModal';
const StudentIndex = () => {
  return (
    <>
      <MainCard title="Estudiantes">
        <GlobalModal
          buttonTitle="Crear Estudiante"
          buttonColor="secondary"
          buttonBackground="secondary"
          modalTitle="Creacion de estudiante"
          actionTitleButton="Guardar"
        >
          Hola
        </GlobalModal>
      </MainCard>
    </>
  );
};

export default StudentIndex;
