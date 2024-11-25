import React from 'react';
import { Typography, Box } from '@mui/material';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiFlutter, SiGit } from 'react-icons/si';
import '../../../../index.css';

const Skills: React.FC = () => {
  return (
    <Box id="skills" sx={{ padding: '50px 0', backgroundColor: '#f0f0f0' }}>
      <Typography variant="h2" align="center" gutterBottom>
        Habilidades
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        {/* Lista suas habilidades principais */}
      </Typography>
      <div className="skills-icons">
        <div className="skill">
          <FaHtml5 title="HTML5" className="icon html" />
          <Typography variant="body2">HTML5</Typography>
        </div>
        <div className="skill">
          <FaCss3Alt title="CSS3" className="icon css" />
          <Typography variant="body2">CSS3</Typography>
        </div>
        <div className="skill">
          <SiTypescript title="TypeScript" className="icon typescript" />
          <Typography variant="body2">TypeScript</Typography>
        </div>
        <div className="skill">
          <FaPython title="Python" className="icon python" />
          <Typography variant="body2">Python</Typography>
        </div>
        <div className="skill">
          <FaReact title="React" className="icon react" />
          <Typography variant="body2">React</Typography>
        </div>
        <div className="skill">
          <SiFlutter title="Flutter" className="icon flutter" />
          <Typography variant="body2">Flutter</Typography>
        </div>
        <div className="skill">
          <FaGithub title="GitHub" className="icon git" />
          <Typography variant="body2">GitHub</Typography>
        </div>
        <div className="skill">
          <SiGit title="Git" className="icon git" />
          <Typography variant="body2">Git</Typography>
        </div>
      </div>
    </Box>
  );
};

export default Skills;

