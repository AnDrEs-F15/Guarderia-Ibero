import React from 'react';
import GlobalModal from '../../../components/GlobalModal';
import { FormProvider, useForm } from 'react-hook-form';
import { useCreateForm } from '../hooks/useCreateForm';
import GlobalForm from '../../../components/GlobalForm';
const CreateCourse = () => {
  const {
    courseForm,
    methods,
    handleSubmitCreateCourse,
    fetchCourseSave: { isSuccess }
  } = useCreateForm();
  return (
    <>
      <FormProvider {...methods}>
        <GlobalModal
          buttonTitle="Crear Aula"
          buttonColor="secondary"
          buttonBackground="secondary"
          modalTitle="Crear Sala (Aula)"
          actionTitleButton="Guardar"
          handleOnClick={handleSubmitCreateCourse}
          closeModal={isSuccess}
        >
          <GlobalForm formItems={courseForm} />
        </GlobalModal>
      </FormProvider>
    </>
  );
};

export default CreateCourse;
