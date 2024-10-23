import React from 'react';
import { Typography, Box } from '@mui/material';

const Projects: React.FC = () => {
  return (
    <Box id="projects" sx={{ padding: '50px 0' }}>
      <Typography variant="h2" align="center">
        Projects
      </Typography>
      <Typography variant="body1" align="center">
        {/* Adicione uma breve descrição dos seus projetos */}
        Loading...
        {/* Exemplo: Projeto 1, Projeto 2, etc. */}
      </Typography>
    </Box>
  );
};

export default Projects;
