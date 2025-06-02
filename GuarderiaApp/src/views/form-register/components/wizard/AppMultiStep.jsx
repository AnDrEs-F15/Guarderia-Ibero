import React from 'react';
import { Wizard } from 'react-use-wizard';
import StepperForm from './StepperForm';
import ChildForm from '../ChildForm';
import GuardianForm from '../GuardianForm';
import DocumentForm from '../DocumentForm';
import CourseForm from '../CourseForm';

const AppMultiStep = () => {
  return (
    <>
      <Wizard /* footer={<WizardFooter />} */ header={<StepperForm />}>
        <ChildForm />
        <CourseForm />
        <GuardianForm />
        <DocumentForm />
      </Wizard>
    </>
  );
};

export default AppMultiStep;
