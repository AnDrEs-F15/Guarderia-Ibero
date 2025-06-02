import React from 'react';
import { Card, CardContent, Typography, Grid, Divider, Box, Avatar, Paper, useTheme } from '@mui/material';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';

const EnrollmentDetailCard = ({ enrollment }) => {
  const { child, guardian, course, enrollDate } = enrollment;
  const theme = useTheme();
  const InfoItem = ({ label, value }) => (
    <Grid item xs={12} sm={6}>
      <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
        {label}
      </Typography>
      <Typography variant="body1">{value || '—'}</Typography>
    </Grid>
  );

  const SectionHeader = ({ icon, title, color }) => (
    <Box display="flex" alignItems="center" mb={2}>
      <Avatar sx={{ bgcolor: 'secondary.main', mr: 2, color: 'white' }}>{icon}</Avatar>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Paper
        elevation={4}
        sx={{
          maxWidth: 960,
          mx: 'auto',
          p: 4,
          borderRadius: 3,
          backgroundColor: '#fff'
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, textAlign: 'center' }}>
          Detalles de la Inscripción #{enrollment?.id}
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Niño */}
        <SectionHeader icon={<ChildCareIcon />} title="Datos del Niño" color="primary.main" />
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <InfoItem label="Nombre completo" value={`${child?.firstName} ${child?.lastName}`} />
          <InfoItem label="Documento" value={child?.documentId} />
          <InfoItem label="Fecha de nacimiento" value={child?.birthDate} />
          <InfoItem label="Género" value={child?.gender} />
          <InfoItem label="Alergias" value={child?.allergies} />
          <InfoItem label="Notas médicas" value={child?.medicalNotes} />
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Acudiente */}
        <SectionHeader icon={<PersonIcon />} title="Datos del Acudiente" color="secondary.main" />
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <InfoItem label="Nombre completo" value={`${guardian?.firstName} ${guardian?.lastName}`} />
          <InfoItem label="Documento" value={guardian?.documentId} />
          <InfoItem label="Teléfono" value={guardian?.phoneNumber} />
          <InfoItem label="Correo electrónico" value={guardian?.email} />
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Curso */}
        <SectionHeader icon={<SchoolIcon />} title="Curso Asignado" color="success.main" />
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <InfoItem label="Nombre del curso" value={course?.nameCourse} />
          <InfoItem label="Turno" value={course?.shift} />
          <InfoItem label="Edad mínima (meses)" value={course?.minAgeMonths} />
          <InfoItem label="Edad máxima (meses)" value={course?.maxAgeMonths} />
          <InfoItem label="Ubicación" value={course?.location} />
          <InfoItem label="Capacidad máxima" value={course?.maxCapacity} />
          <InfoItem
            label="Profesor principal"
            value={course?.mainTeacher ? `${course?.mainTeacher.firstName} ${course?.mainTeacher?.lastName}` : 'Sin asignar'}
          />
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Fecha de inscripción */}
        <Typography variant="body2" color="text.secondary" align="right">
          Fecha de inscripción: <strong>{enrollDate}</strong>
        </Typography>
      </Paper>
    </Box>
  );
};

export default EnrollmentDetailCard;
