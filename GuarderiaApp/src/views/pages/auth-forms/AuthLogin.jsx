import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography, Box } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAuthLogin } from './hooks/useAuthLogin';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

// ===============================|| JWT - LOGIN (con React Hook Form) ||=============================== //

export default function AuthLogin() {
  const auth = useSelector((state) => state.auth);
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const { onSubmit, register, errors } = useAuthLogin();
  if (auth?.token) return <Navigate to="/" replace />;

  return (
    <form onSubmit={onSubmit}>
      <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
        <InputLabel htmlFor="username">Usuario</InputLabel>
        <OutlinedInput id="username" label="Usuario" {...register('username', { required: 'El nombre de usuario es obligatorio' })} />
        {errors.username && (
          <Typography color="error" variant="caption">
            {errors.username.message}
          </Typography>
        )}
      </FormControl>

      <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
        <InputLabel htmlFor="password">Contraseña</InputLabel>
        <OutlinedInput
          id="password"
          type={showPassword ? 'text' : 'password'}
          label="Contraseña"
          {...register('password', { required: 'La contraseña es obligatoria' })}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="mostrar/ocultar contraseña"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={(e) => e.preventDefault()}
                edge="end"
                size="large"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        {errors.password && (
          <Typography color="error" variant="caption">
            {errors.password.message}
          </Typography>
        )}
      </FormControl>

      <Box sx={{ mt: 2 }}>
        <AnimateButton>
          <Button color="secondary" fullWidth size="large" type="submit" variant="contained">
            Iniciar sesión
          </Button>
        </AnimateButton>
      </Box>
    </form>
  );
}
