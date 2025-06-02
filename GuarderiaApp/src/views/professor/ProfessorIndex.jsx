import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import GlobalTable from '../../components/GlobalTable';
import { useProfessorTable } from './hooks/useProfessorTable';
import CreateProfessor from './components/CreateProfessor';
import { useProfessorApi } from './hooks/useProfessorApi';
const ProfessorIndex = () => {
  const { teacherColumns } = useProfessorTable();
  const {
    fetchAllProfessor: { data }
  } = useProfessorApi();
  console.log(data);
  return (
    <>
      <MainCard title="Profesores">
        <CreateProfessor />
        <GlobalTable colums={teacherColumns} getRowId="documentId" rows={data?.content} rowCount={data?.totalElements} />
      </MainCard>
    </>
  );
};

export default ProfessorIndex;
