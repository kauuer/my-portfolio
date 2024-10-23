import React from 'react';
import { Typography, Box } from '@mui/material'; // Supondo que você está usando Material-UI

const About: React.FC = () => {
  return (
    <Box id="about" sx={{ padding: '50px 0' }}>
      <Typography variant="h2" align="center">
        About Me
      </Typography>
      <Typography variant="body1" align="center" sx={{ maxWidth: '600px', margin: '0 auto' }}>
        <b>A melhor maneira de prever o futuro é criá-lo. <br /></b>
        Estudante de Eng. de Software e Desenvolvimento de Sistemas, possuo experiência em Front-end como voluntário e banco de dados como estágiario. <br /> <br />
        Sou apaixonado por inovação e estou buscando novos desafios para expandir minhas habilidades. Falo português nativo e possuo nível intermediário em inglês e espanhol.
      </Typography>
    </Box>
  );
};

export default About
