import { useForm } from 'react-hook-form';
import { useWizard } from 'react-use-wizard';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { postParent } from '../../../api/parent';
import { toast } from 'react-toastify';
import { useAppFormContext } from '../context/FormContext';

export const useGuardianForm = () => {
  const { setParentId } = useAppFormContext();
  const guardianForm = [
    {
      name: 'documentId',
      label: 'Documento de Identidad',
      type: 'text',
      size: 1
    },
    {
      name: 'firstName',
      label: 'Nombre',
      type: 'text',
      size: 0.5
    },
    {
      name: 'lastName',
      label: 'Apellido',
      type: 'text',
      size: 0.5
    },
    {
      name: 'relationship',
      label: 'Parentesco',
      type: 'text',
      size: 0.5
    },
    {
      name: 'phoneNumber',
      label: 'Número de Teléfono',
      type: 'text',
      size: 0.5
    },
    {
      name: 'email',
      label: 'Correo Electrónico',
      type: 'email',
      size: 1
    }
  ];

  const guardianSchema = Yup.object().shape({
    documentId: Yup.string().required('El documento es obligatorio').max(20, 'Máximo 20 caracteres'),
    firstName: Yup.string().required('El nombre es obligatorio').max(50, 'Máximo 50 caracteres'),
    lastName: Yup.string().required('El apellido es obligatorio').max(50, 'Máximo 50 caracteres'),
    relationship: Yup.string().max(20, 'Máximo 20 caracteres'),
    phoneNumber: Yup.string().max(20, 'Máximo 20 caracteres'),
    email: Yup.string().email('Correo no válido').max(100, 'Máximo 100 caracteres')
  });

  const guardiantContextForm = useForm({
    resolver: yupResolver(guardianSchema),
    mode: 'onTouched'
  });
  const { nextStep } = useWizard();
  const handleGuardSubmit = guardiantContextForm.handleSubmit((data) => {
    console.log(data);
    fetchParentSave.mutate(data);
    setParentId(data.documentId);
    nextStep();
  });

  const fetchParentSave = useMutation({
    mutationFn: postParent,
    onSuccess: () => toast.success('Datos guardados exitosamente')
  });
  return { guardianForm, guardianSchema, handleGuardSubmit, guardiantContextForm };
};
