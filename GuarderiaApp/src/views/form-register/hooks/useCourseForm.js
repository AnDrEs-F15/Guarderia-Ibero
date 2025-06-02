import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useWizard } from 'react-use-wizard';
import { getCourseActive } from '../../../api/course';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useAppFormContext } from '../context/FormContext';
import { postEnrollment } from '../../../api/enrollment';
import { toast } from 'react-toastify';
export const useCourseForm = () => {
  const methods = useForm({
    /* resolver: yupResolver(guardianSchema), */
    mode: 'onTouched'
  });
  const { childId, parentId } = useAppFormContext();
  const { nextStep } = useWizard();
  const handleCourseSubmit = methods.handleSubmit((data) => {
    console.log(data);
    fetchEnrollmentSave.mutate({
      childId: childId,
      attendantId: parentId,
      courseId: data?.nameCourse,
      statusEnrollment: 'Pendiente'
    });
    nextStep();
  });

  const { data: course } = useQuery({
    queryKey: ['fetchAllCoursesActive'],
    queryFn: getCourseActive
  });

  const fetchEnrollmentSave = useMutation({
    mutationFn: postEnrollment,
    onSuccess: () => {
      toast.success('Datos guardados exitosamente');
    }
  });

  const courseMap = course?.map((item) => ({
    label: `${item.nameCourse} - Jornada (${item.shift})`,
    value: item?.id
  }));

  const selectedCourse = course?.find((item) => item.id === methods.watch('nameCourse'));

  // Efecto para setear dinámicamente campos cuando cambia el curso
  useEffect(() => {
    if (selectedCourse) {
      methods.setValue('shift', selectedCourse.shift);
      methods.setValue('maxCapacity', selectedCourse.maxCapacity);
      methods.setValue('minAgeMonths', selectedCourse.minAgeMonths);
      methods.setValue('maxAgeMonths', selectedCourse.maxAgeMonths);
      methods.setValue('mainTeacherId', `${selectedCourse.mainTeacher?.firstName || ''} ${selectedCourse.mainTeacher?.lastName || ''}`);
    }
  }, [selectedCourse, methods]);
  /* console.log(filterData); */

  const courseForm = [
    {
      name: 'nameCourse',
      label: 'Nombre del curso',
      type: 'select',
      options: courseMap,
      size: 1
    },
    {
      name: 'shift',
      label: 'Jornada',
      type: 'select',
      options: [
        { label: 'Mañana', value: 'Morning' },
        { label: 'Tarde', value: 'Afternoon' },
        { label: 'Todo el día', value: 'FullDay' }
      ],
      size: 0.5,
      disable: true
      // defaultValue: filterData ? filterData.map((item) => item?.shift) : false
    },
    {
      name: 'maxCapacity',
      label: 'Capacidad máxima',
      type: 'number',
      size: 0.5,
      disable: true
      // defaultValue: filterData ? filterData.map((item) => item?.maxCapacity) : false
    },
    {
      name: 'minAgeMonths',
      label: 'Edad mínima (meses)',
      type: 'number',
      size: 0.5,
      disable: true
      // defaultValue: filterData ? filterData.map((item) => item?.minAgeMonths) : false
    },
    {
      name: 'maxAgeMonths',
      label: 'Edad máxima (meses)',
      type: 'number',
      size: 0.5,
      disable: true
      // defaultValue: filterData ? filterData.map((item) => item?.maxAgeMonths) : false
    },

    {
      name: 'mainTeacherId',
      label: 'Docente principal (ID)',
      type: 'text',
      size: 1,
      disable: true
      // defaultValue: filterData ? filterData.map((item) => item?.mainTeacher?.firstName + ' ' + item?.mainTeacher?.lastName) : false
    }
  ];

  return { courseForm, handleCourseSubmit, methods };
};
