//import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Kauê Rodrigues. Todos os direitos reservados.
      </Typography>
      <Typography variant="body2">
        <a href="mailto:seuemail@example.com" style={{ color: '#fff', textDecoration: 'none' }}>
          iggcode@gmail.com
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
