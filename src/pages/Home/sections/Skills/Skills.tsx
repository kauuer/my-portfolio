import React from 'react';
import { Typography, Box } from '@mui/material';
import { FaHtml5, FaCss3Alt, FaReact, FaPython } from 'react-icons/fa';
import { SiTypescript, SiFlutter } from 'react-icons/si';
import '../../../../index.css';


const Skills: React.FC = () => {
  return (
    <Box id="skills" sx={{ padding: '50px 0', backgroundColor: '#f0f0f0' }}>
      <Typography variant="h2" align="center">
         Habilidades
      </Typography>
      <Typography variant="body1" align="center">
        {/* Lista suas habilidades principais */}
        <div className="skills-icons">
        <div className="skill">
          <FaHtml5 title="HTML5" className="icon html" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <FaCss3Alt title="CSS3" className="icon css" />
          <p>CSS3</p>
        </div>
          <div className="skill">
            <SiTypescript title="TypeScript" className="icon typescript" />
            <p>TypeScript</p>
          </div>
          <div className="skill">
            <FaPython title="Python" className="icon python" />
            <p>Python</p>
          </div>
          <div className="skill">
            <FaReact title="React" className="icon react" />
            <p>React</p>
          </div>
          <div className="skill">
            <SiFlutter title="Flutter" className="icon flutter" />
            <p>Flutter</p>
          </div>
        </div>
      </Typography>
    </Box>
  );
};

export default Skills;
