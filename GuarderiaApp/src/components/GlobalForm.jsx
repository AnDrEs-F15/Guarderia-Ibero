import { Grid, MenuItem, TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const GlobalForm = ({ formItems = [] }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <Grid container spacing={2} sx={{ width: { xs: '100%', sm: '90%' }, margin: '0 auto' }}>
      {formItems.map((field) => (
        <Grid item xs={12} md={field.size ? field.size * 12 : 12} key={field.name}>
          <Controller
            name={field.name}
            control={control}
            defaultValue={field.defaultValue ?? ''}
            render={({ field: controllerField }) => (
              <TextField
                {...controllerField}
                label={field.label}
                name={field.name}
                select={field.type === 'select'}
                multiline={field.type === 'textarea'}
                rows={field.type === 'textarea' ? 4 : undefined}
                type={field.type !== 'textarea' && field.type !== 'select' ? field.type : 'text'}
                fullWidth
                color="secondary"
                size="small"
                disabled={field?.disable}
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message}
                InputLabelProps={field.type === 'date' || field.disable ? { shrink: true } : undefined}
              >
                {field.type === 'select' &&
                  field.options?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
              </TextField>
            )}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default GlobalForm;
