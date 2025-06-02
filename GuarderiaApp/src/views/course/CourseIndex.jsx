import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import CreateCourse from './components/CreateCourse';
import GlobalTable from '../../components/GlobalTable';
import { useCourseApi } from './hooks/useCourseApi';
import { useUtilsCourse } from './hooks/useUtilsCourse';
const CourseIndex = () => {
  const { courseColumns } = useUtilsCourse();
  const {
    fetchAllCourses: { data, isFetching }
  } = useCourseApi();
  console.log(data);
  return (
    <>
      <MainCard title="Cursos">
        <CreateCourse />
        <GlobalTable rowCount={data?.totalElements} isLoading={isFetching} colums={courseColumns} rows={data?.content} getRowId="id" />
      </MainCard>
    </>
  );
};

export default CourseIndex;
