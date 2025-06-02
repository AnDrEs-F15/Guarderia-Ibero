import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import GlobalTable from '../../components/GlobalTable';
import { useEnrollment } from './hooks/useEnrollment';

const EnrollmentIndex = () => {
  const {
    enrollmentColumns,
    fetchAllEnrollment: { data }
  } = useEnrollment();
  console.log(data);
  return (
    <>
      <MainCard title="Solicitudes de incripcion">
        <GlobalTable colums={enrollmentColumns} getRowId="id" rows={data || []} /* rowCount={data?.totalElements}  */ />
      </MainCard>
    </>
  );
};

export default EnrollmentIndex;
