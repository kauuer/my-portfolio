import React from 'react';
import { Typography, Box } from '@mui/material'; // Supondo que você está usando Material-UI

const About: React.FC = () => {
  return (
    <Box id="about" sx={{ padding: '50px 0' }}>
      <Typography variant="h2" align="center">
        Sobre
      </Typography>
      <Typography variant="body1" align="center" sx={{ maxWidth: '600px', margin: '0 auto' }}>
        Estudante de Engenharia de Software, possuo experiência em front-end como voluntário e qualidade de dados como estágiario. <br /> <br />
        
        Contribui para projetos que aprimoram funcionalidades e experiência do usuário. Em meus projetos pessoais,
        destaco minha preferência por criar aplicações utilizando Flutter no desenvolvimento de aplicativos, e também de projetos para web com Front,
        onde exploro tecnologias modernas para entregar soluções escaláveis e intuitivas. . Falo português nativo e possuo nível intermediário em inglês e espanhol.
      </Typography>
    </Box>
  );
};

export default About
