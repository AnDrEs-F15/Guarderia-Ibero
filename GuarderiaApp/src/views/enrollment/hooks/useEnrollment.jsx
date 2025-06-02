import { useQuery } from '@tanstack/react-query';
import { getAllEnrollment } from '../../../api/enrollment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Chip, IconButton } from '@mui/material';
import { useNavigate } from 'react-router';

export const useEnrollment = () => {
  const navigate = useNavigate();
  const fetchAllEnrollment = useQuery({
    queryKey: ['fetchAllEnrollment'],
    queryFn: getAllEnrollment
  });

  const enrollmentColumns = [
    { field: 'id', headerName: '# ID', width: 70 },
    {
      field: 'child.documentId',
      headerName: 'Documento del niño',
      renderCell: (params) => params.row.child?.documentId || '',
      flex: 0.5
    },
    {
      field: 'child.fullName',
      headerName: 'Nombre completo',
      renderCell: (params) => `${params.row.child?.firstName || ''} ${params.row.child?.lastName || ''}`,
      flex: 1
    },
    {
      field: 'child.gender',
      headerName: 'Género',
      renderCell: (params) => params.row.child?.gender || '',
      width: 100
    },
    {
      field: 'enrollDate',
      headerName: 'Fecha de inscripción',
      width: 150
    },
    {
      field: 'courseId',
      headerName: 'Curso ',
      renderCell: (params) => params.row.course?.nameCourse || '',
      width: 100
    },

    {
      field: 'statusEnrollment',
      headerName: 'Estado',
      width: 200,
      renderCell: (params) => {
        const value = params.value;

        let color = 'default';
        let label = 'Sin Estado';

        if (value === 'Pendiente') {
          color = 'warning';
          label = 'Pendiente';
        } else if (value === 'Aprobado') {
          color = 'success';
          label = 'Aprobado';
        }
        if (value === 'Rehazado') {
          color = 'error';
          label = 'Rehazado';
        }

        return <Chip label={label} color={color} variant="outlined" />;
      }
    },
    {
      field: 'option',
      headerName: 'Gestionar',
      width: 100,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <IconButton onClick={() => navigate(`/enrollment/${params.row.id}`)} color="secondary" aria-label="ver inscripción">
          <VisibilityIcon color="secondary" />
        </IconButton>
      )
    }
  ];

  return { fetchAllEnrollment, enrollmentColumns };
};
