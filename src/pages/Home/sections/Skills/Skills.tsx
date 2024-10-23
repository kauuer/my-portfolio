import React from 'react';
import { Typography, Box } from '@mui/material';

const Skills: React.FC = () => {
  return (
    <Box id="skills" sx={{ padding: '50px 0', backgroundColor: '#f0f0f0' }}>
      <Typography variant="h2" align="center">
        My Skills
      </Typography>
      <Typography variant="body1" align="center">
        {/* Lista suas habilidades principais */}
        JavaScript, React, TypeScript, Python, Flutter.
      </Typography>
    </Box>
  );
};

export default Skills;
