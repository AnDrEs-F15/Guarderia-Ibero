import { useState } from 'react';
import { Controller } from 'react-hook-form';
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useAuthRegister } from './hooks/useAuthRegister';

export default function AuthRegister() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const { control, onSubmit } = useAuthRegister();

  return (
    <Paper
      elevation={2}
      sx={{
        backgroundColor: '#fff',
        borderRadius: 2,
        p: { xs: 3, sm: 4 },
        maxWidth: 440,
        mx: 'auto',
        mt: { xs: 4, sm: 6 }
      }}
    >
      <Box mb={3} textAlign="center">
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Registro administradores
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Crear cuenta administradora
        </Typography>
      </Box>

      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Nombres"
                  autoComplete="given-name"
                  color="secondary"
                  sx={{ ...theme.typography.customInput }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Apellidos"
                  autoComplete="family-name"
                  color="secondary"
                  sx={{ ...theme.typography.customInput }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="documentId"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="register-email">Documento identificación</InputLabel>
                  <OutlinedInput {...field} id="register-email" type="text" label="Documento identificación" autoComplete="email" />
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="register-password">Contraseña</InputLabel>
                  <OutlinedInput
                    {...field}
                    id="register-password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    label="Contraseña"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end" size="large">
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <AnimateButton>
              <Button fullWidth type="submit" variant="contained" color="secondary" size="large" disableElevation>
                Crear cuenta
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
