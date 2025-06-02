import React from 'react';
import { Box, Typography } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

const GlobalNote = ({ children, color, bgNote, textColor, textSize }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1, sm: 2 },
          bgcolor: bgNote || 'primary',
          borderLeft: { xs: 'none', sm: '4px solid' },
          borderColor: { sm: color },
          padding: { xs: 1, sm: 2 },
          borderRadius: 2,
          mb: 2,
          flexDirection: { xs: 'column', sm: 'row' },
          textAlign: { xs: 'center', sm: 'left' }
        }}
      >
        <InfoOutlinedIcon
          sx={{
            color,
            fontSize: { xs: 20, sm: 30 } // icono más pequeño en móvil
          }}
        />
        <Typography sx={{ fontWeight: 500 }} color={textColor || 'text.primary'} variant={textSize || 'body2'}>
          {children}
        </Typography>
      </Box>
    </>
  );
};

export default GlobalNote;
