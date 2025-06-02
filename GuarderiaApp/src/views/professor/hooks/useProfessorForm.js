import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { postProfessor } from '../../../api/professor';
import { toast } from 'react-toastify';

export const useProfessorForm = () => {
  const queryClient = useQueryClient();

  const professorForm = [
    {
      name: 'firstName',
      label: 'Nombre',
      type: 'text',
      size: 1
    },
    {
      name: 'lastName',
      label: 'Apellido',
      type: 'text',
      size: 1
    },
    {
      name: 'documentId',
      label: 'DNI',
      type: 'text',
      size: 0.5
    },
    {
      name: 'phoneNumber',
      label: 'Teléfono',
      type: 'text',
      size: 0.5
    },
    {
      name: 'email',
      label: 'Correo electrónico',
      type: 'email',
      size: 1
    },
    {
      name: 'active',
      label: 'Activo',
      type: 'select',
      options: [
        { label: 'Sí', value: 'Y' },
        { label: 'No', value: 'N' }
      ],
      size: 1
    }
  ];
  const methods = useForm();
  const handleSubmitCreateProfessor = methods.handleSubmit((data) => {
    console.log(data);
    fetchCourseSave.mutate(data);
  });

  const fetchCourseSave = useMutation({
    mutationFn: postProfessor,
    onSuccess: () => {
      queryClient.invalidateQueries(['fetchAllProfessor']);
      toast.success('Se creo exitosamente el registro');
    }
  });

  return { professorForm, handleSubmitCreateProfessor, methods, fetchCourseSave };
};
