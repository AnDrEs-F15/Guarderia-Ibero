import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { postAuthLogin } from '../../../../api/auth';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { login } from '../../../../store/slice/authSlice';
export const useAuthLogin = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log('Datos del login:', data);
    fetchAuthLogin.mutate(data);
    // Aquí puedes hacer el dispatch o llamada a tu API
  });

  const fetchAuthLogin = useMutation({
    mutationFn: postAuthLogin,
    onSuccess: (data) => {
      toast.success('Ingreso exitoso');
      dispatch(login({ token: data?.token }));
    },
    onError: () => toast.error('Verifique las credenciales por favor')
  });

  return { onSubmit, register, errors };
};
