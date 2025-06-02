export const useProfessorTable = () => {
  const teacherColumns = [
    { field: 'documentId', headerName: 'DNI', width: 130 },
    { field: 'firstName', headerName: 'Nombre', flex: 1 },
    { field: 'lastName', headerName: 'Apellido', flex: 1 },
    { field: 'phoneNumber', headerName: 'Teléfono', width: 140 },
    { field: 'email', headerName: 'Correo electrónico', flex: 1 },
    {
      field: 'active',
      headerName: 'Activo',
      width: 100,
      type: 'boolean'
    }
  ];

  return { teacherColumns };
};
