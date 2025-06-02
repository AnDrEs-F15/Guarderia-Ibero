import { Box, Typography } from '@mui/material';
import { FilePond } from 'react-filepond'; // ✅ ESTA es la forma correcta
import { registerPlugin } from 'filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import React, { useState } from 'react';
// (Opcional) Vista previa para imágenes
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import '../../../assets/css/drop.css';
import WizardFooter from './wizard/WizardFooter';
import { Controller, useForm } from 'react-hook-form';
import { useWizard } from 'react-use-wizard';
import GlobalNote from '../../../components/GlobalNote';
// Registrar plugin
registerPlugin(FilePondPluginImagePreview);
const DocumentForm = () => {
  const [files, setFiles] = useState([]);
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const { nextStep } = useWizard();
  console.log(errors);
  const handleDocumentSubmit = handleSubmit((data) => {
    console.log(data);
    nextStep();
  });
  return (
    <>
      <Box component={'form'}>
        <Box sx={{ display: 'flex', width: { xs: '100%', sm: '55%' }, margin: '0 auto', gap: 4, background: '#FFF' }}>
          <GlobalNote color="#673ab7" /* bgNote="#f3f3f3" */>
            Sube los documentos requeridos para completar la inscripción del niño o niña. Asegúrate de adjuntar archivos legibles y en
            formato PDF o imagen. Este paso es obligatorio para continuar con el proceso.
          </GlobalNote>
        </Box>
        <Box>
          <label>DNI Niño</label>
          <Controller
            control={control}
            name="dni"
            /*             rules={{
              validate: (files) => files?.length > 0 || 'Debes subir el DNI'
            }} */
            render={({ field }) => (
              <FilePond
                files={field.value || []}
                onupdatefiles={(fileItems) => field.onChange(fileItems)}
                allowMultiple={false}
                maxFileSize="5MB"
                acceptedFileTypes={['image/*', 'application/pdf']}
                labelIdle='Arrastra y suelta tus archivos o <span class="filepond--label-action">haz clic aquí</span>'
                name="files"
                credits={false}
                onerror={errors.dni?.message}
              />
            )}
          />
          {errors.dni && <p style={{ color: 'red' }}>{errors.dni.message}</p>}
        </Box>
        <Box>
          <label>Certificado de vacunacion</label>
          <Controller
            control={control}
            name="certVac"
            /*             rules={{
              validate: (files) => files?.length > 0 || 'Debes subir el certificado'
            }} */
            render={({ field }) => (
              <FilePond
                files={field.value || []}
                onupdatefiles={(fileItems) => field.onChange(fileItems)}
                allowMultiple={false}
                maxFileSize="5MB"
                acceptedFileTypes={['image/*', 'application/pdf']}
                labelIdle='Arrastra y suelta tus archivos o <span class="filepond--label-action">haz clic aquí</span>'
                name="files"
                credits={false}
              />
            )}
          />
          {errors?.certVac && <p style={{ color: 'red' }}>{errors.certVac?.message}</p>}
        </Box>
      </Box>

      <WizardFooter handleSubmit={handleDocumentSubmit} />
    </>
  );
};

export default DocumentForm;
