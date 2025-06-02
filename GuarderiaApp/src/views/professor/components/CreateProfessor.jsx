import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import GlobalModal from '../../../components/GlobalModal';
import GlobalForm from '../../../components/GlobalForm';
import { useProfessorForm } from '../hooks/useProfessorForm';

const CreateProfessor = () => {
  const {
    professorForm,
    handleSubmitCreateProfessor,
    methods,
    fetchCourseSave: { isSuccess }
  } = useProfessorForm();
  return (
    <>
      <FormProvider {...methods}>
        <GlobalModal
          buttonTitle="Crear Profesor"
          buttonColor="secondary"
          buttonBackground="secondary"
          modalTitle="Crear Profesor"
          actionTitleButton="Guardar"
          handleOnClick={handleSubmitCreateProfessor}
          closeModal={isSuccess}
        >
          <GlobalForm formItems={professorForm} />
        </GlobalModal>
      </FormProvider>
    </>
  );
};

export default CreateProfessor;
