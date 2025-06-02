import { useQuery } from '@tanstack/react-query';
import { getAllStudentsByCourse } from '../../../api/enrollment';

export const useCourseStudent = (courseId) => {
  console.log(courseId);
  const fetchAStudentByCourse = useQuery({
    queryKey: ['fetchAStudentByCourse', courseId],
    queryFn: () => getAllStudentsByCourse(courseId),
    enabled: !!courseId
  });

  const childColumns = [
    { field: 'documentId', headerName: 'Documento', flex: 1 },
    { field: 'firstName', headerName: 'Nombre', flex: 1 },
    { field: 'lastName', headerName: 'Apellido', flex: 1 },
    { field: 'birthDate', headerName: 'Fecha de nacimiento', flex: 1 },
    { field: 'gender', headerName: 'Género', width: 120 },
    { field: 'allergies', headerName: 'Alergias', flex: 1 },
    { field: 'medicalNotes', headerName: 'Notas médicas', flex: 2 }
  ];

  return { fetchAStudentByCourse, childColumns };
};
