import { useForm } from 'react-hook-form';
import { postCourse } from '../../../api/course';
import { getProfessor } from '../../../api/professor';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const useCreateForm = () => {
  const methods = useForm();
  const queryClient = useQueryClient();
  const handleSubmitCreateCourse = methods.handleSubmit((data) => {
    console.log(data);
    fetchCourseSave.mutate(data);
  });

  // GUARDAR O CURSO
  const fetchCourseSave = useMutation({
    mutationFn: postCourse,
    onSuccess: () => {
      queryClient.invalidateQueries(['fetchAllCourse']);
      toast.success('Se guardo correctamente el registro');
    }
  });

  const { data: teacher } = useQuery({
    queryKey: ['fetchAllProfessor'],
    queryFn: getProfessor
  });

  const teachersMap = teacher?.content?.map((item) => ({
    label: `${item.firstName} ${item.lastName}`,
    value: item.documentId
  }));

  const courseForm = [
    {
      name: 'nameCourse',
      label: 'Nombre del curso',
      type: 'text',
      size: 1
    },
    {
      name: 'minAgeMonths',
      label: 'Edad mínima (en meses)',
      type: 'number',
      size: 0.5
    },
    {
      name: 'maxAgeMonths',
      label: 'Edad máxima (en meses)',
      type: 'number',
      size: 0.5
    },
    {
      name: 'maxCapacity',
      label: 'Capacidad máxima',
      type: 'number',
      size: 0.5
    },
    {
      name: 'shift',
      label: 'Turno',
      type: 'select',
      options: [
        { label: 'Mañana', value: 'Morning' },
        { label: 'Tarde', value: 'Afternoon' },
        { label: 'Completo', value: 'FullDay' }
      ],
      size: 0.5
    },
    {
      name: 'mainTeacherId',
      label: 'Profesor principal',
      type: 'select', // o "number" si vas a ingresar el ID directamente
      options: teachersMap, // se llena dinámicamente con los profesores existentes
      size: 1
    },
    {
      name: 'location',
      label: 'Ubicación del aula',
      type: 'text',
      size: 1
    }
  ];

  console.log(teachersMap);
  return {
    courseForm,
    methods,
    handleSubmitCreateCourse,
    fetchCourseSave
  };
};
