import React from 'react';
import { Typography, Box } from '@mui/material'; // Supondo que você está usando Material-UI

const About: React.FC = () => {
  return (
    <Box id="about" sx={{ padding: '50px 0' }}>
      <Typography variant="h2" align="center">
        About Me
      </Typography>
      <Typography variant="body1" align="center" sx={{ maxWidth: '600px', margin: '0 auto' }}>
        <h3>A melhor maneira de prever o futuro é criá-lo. <br /></h3>
        Estudante de Eng. de Software e Desenvolvimento de Sistemas, Possuo experiência em Front-end como voluntário.Também possuo conhecimentos em Python, Flutter e banco de dados. <br /> <br />
        Sou apaixonado por desenvolvimento e inovação, buscando sempre novos desafios para expandir minhas habilidades. Falo português nativo e possuo nível intermediário em inglês e espanhol.
      </Typography>
    </Box>
  );
};

export default About
