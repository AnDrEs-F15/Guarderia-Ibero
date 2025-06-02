import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import GlobalTable from '../../components/GlobalTable';
import { useParams } from 'react-router';
import { useCourseStudent } from './hooks/useCourseStudent';

const CourseStudent = () => {
  const { id } = useParams();

  const {
    childColumns,
    fetchAStudentByCourse: { data }
  } = useCourseStudent(id);
  return (
    <MainCard title="Lista de estudiantes del curso">
      <GlobalTable rows={data ? data : []} colums={childColumns} getRowId="id" />
    </MainCard>
  );
};

export default CourseStudent;
