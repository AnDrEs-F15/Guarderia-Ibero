import { Box } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import GlobalForm from '../../../components/GlobalForm';
import WizardFooter from './wizard/WizardFooter';
import { useCourseForm } from '../hooks/useCourseForm';

import GlobalNote from '../../../components/GlobalNote';

const CourseForm = () => {
  const { courseForm, handleCourseSubmit, methods } = useCourseForm();

  return (
    <>
      <FormProvider {...methods}>
        <Box sx={{ display: 'flex', width: { xs: '100%', sm: '55%' }, margin: '0 auto', gap: 4, background: '#FFF' }}>
          <GlobalNote color="#673ab7" bgNote="#f3f3f3">
            Completa los datos del curso para organizar mejor la oferta académica. Es importante definir edades, capacidad y jornada para
            garantizar un entorno adecuado para los niños.{' '}
          </GlobalNote>
        </Box>
        <Box sx={{ display: 'flex', width: { xs: '100%', sm: '50%' }, margin: '0 auto', gap: 4, background: '#FFF' }}>
          <GlobalForm formItems={courseForm} />
        </Box>
        <WizardFooter handleSubmit={handleCourseSubmit} />
      </FormProvider>
    </>
  );
};

export default CourseForm;
