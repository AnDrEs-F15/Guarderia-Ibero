import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { postAuthRegister } from '../../../../api/auth';

export const useAuthRegister = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // Aquí puedes enviar el JSON al backend (ej: fetch/axios)
    fetchAuthRegister.mutate(data);
  });

  const fetchAuthRegister = useMutation({
    mutationFn: postAuthRegister,
    onSuccess: () => {
      toast.success('Datos guardados exitosamente');
    }
  });

  return { control, onSubmit };
};
