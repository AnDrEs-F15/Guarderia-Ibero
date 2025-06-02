import { useMutation, useQuery } from '@tanstack/react-query';
import { getAllEnrollmentById, patchEnrollmentStatus } from '../../../api/enrollment';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

export const useEnrollmentDetail = (id) => {
  const navigate = useNavigate();
  const enrollmentById = useQuery({
    queryKey: ['enrollment', id],
    queryFn: () => getAllEnrollmentById(id),
    enabled: !!id // solo se ejecuta si `id` existe
  });

  const handleUpdateStatusEnrollment = (status) => {
    console.log(status);
    fetchUpdateStatusEnrollment.mutate({ id: parseInt(id), status });
  };

  const fetchUpdateStatusEnrollment = useMutation({
    mutationFn: patchEnrollmentStatus,
    onSuccess: () => {
      toast.success('Se actualiazo la solicitud correctamente');
      navigate('/');
    }
  });
  return { enrollmentById, fetchUpdateStatusEnrollment, handleUpdateStatusEnrollment };
};
