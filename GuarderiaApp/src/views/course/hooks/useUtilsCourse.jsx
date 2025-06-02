import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const useUtilsCourse = () => {
  const navigate = useNavigate();
  const courseColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nameCourse', headerName: 'Nombre del curso', flex: 1 },
    { field: 'minAgeMonths', headerName: 'Edad mínima (meses)', flex: 0.5 },
    { field: 'maxAgeMonths', headerName: 'Edad máxima (meses)', flex: 0.5 },
    { field: 'maxCapacity', headerName: 'Capacidad máxima', flex: 0.5 },
    { field: 'shift', headerName: 'Turno', flex: 0.5 },
    { field: 'location', headerName: 'Ubicación', flex: 1 },
    {
      field: 'mainTeacher',
      headerName: 'Profesor',
      width: 200,
      renderCell: (params) => {
        const teacher = params.formattedValue;
        return teacher ? `${teacher.firstName} ${teacher.lastName}` : 'Sin asignar';
      }
    },
    {
      field: 'active',
      headerName: 'Activo',
      width: 100,
      type: 'boolean'
    },
    {
      field: 'option',
      headerName: 'Gestionar',
      width: 100,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <IconButton onClick={() => navigate(`/course/${params.row.id}/students`)} color="secondary" aria-label="ver inscripción">
          <VisibilityIcon color="secondary" />
        </IconButton>
      )
    }
  ];

  return { courseColumns };
};
