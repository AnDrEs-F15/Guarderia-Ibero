import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useWizard } from 'react-use-wizard';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { postChild } from '../../../api/child';
import { toast } from 'react-toastify';
import { useAppFormContext } from '../context/FormContext';

export const useChildForm = () => {
  const { setChildId } = useAppFormContext();
  const childForm = [
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
      name: 'birthDate',
      label: 'Fecha de nacimiento',
      type: 'date',
      size: 0.5
    },
    {
      name: 'gender',
      label: 'Género',
      type: 'select',
      options: [
        { label: 'Masculino', value: 'MASCULINO' },
        { label: 'Femenino', value: 'FEMENINO' }
      ],
      size: 0.5
    },
    {
      name: 'documentId',
      label: 'Documento de identidad',
      type: 'text',
      size: 1
    },
    {
      name: 'medicalNotes',
      label: 'Notas médicas',
      type: 'textarea',
      size: 1
    },
    {
      name: 'allergies',
      label: 'Alergias',
      type: 'textarea',
      size: 1
    }
  ];

  const childSchema = yup.object().shape({
    firstName: yup.string().required('El nombre es obligatorio').max(50, 'Máximo 50 caracteres'),
    lastName: yup.string().required('El apellido es obligatorio').max(50, 'Máximo 50 caracteres'),
    birthDate: yup
      .date()
      .typeError('Debe ser una fecha válida') // mensaje si el formato es incorrecto
      .required('La fecha de nacimiento es obligatoria')
      .max(new Date(), 'La fecha no puede ser futura')
      .nullable()
      .transform((value, originalValue) => (originalValue === '' ? undefined : value)),
    gender: yup.string().oneOf(['MASCULINO', 'FEMENINO'], 'Género inválido').required('El género es obligatorio'),
    documentId: yup.string().required('El documento de identidad es obligatorio').max(20, 'Máximo 20 caracteres'),
    medicalNotes: yup.string().max(200, 'Máximo 200 caracteres').nullable(),
    allergies: yup.string().max(100, 'Máximo 100 caracteres').nullable()
  });

  const methods = useForm({
    resolver: yupResolver(childSchema),
    mode: 'onTouched'
  });
  const { nextStep } = useWizard();
  const handleChildSubmit = methods.handleSubmit((data) => {
    console.log(data);
    fetchChildSave.mutate(data);
    setChildId(data.documentId);
    nextStep();
  });
  const fetchChildSave = useMutation({
    mutationFn: postChild,
    onSuccess: () => {
      toast.success('Datos guardados exitosamente');
    }
  });
  return { childForm, childSchema, handleChildSubmit, methods };
};
