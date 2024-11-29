import React from "react";
import { Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import previewLanging from "../../../../assets/images/preview-langing.png";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa"; // Importe os ícones

const Projects: React.FC = () => {
  // Dados dos projetos
  const projects = [
    {
      title: "Site Pet",
      description: (
        <>Landing page responsiva. <span style={{ fontWeight: "bold", color: "blue" }}> Criado em 01/2024</span></>
      ),
      imageUrl: previewLanging, 
      link: "https://kauuer.github.io/site-pet/",
      githubLink: "https://github.com/kauuer/site-pet",
      technologies: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <FaJs />, name: "JavaScript" },
      ],
    },
    // Adicione mais projetos conforme necessário
  ];
  const getColorForTechnology = (techName: string) => {
    switch (techName) {
      case "HTML5":
        return "orange"; // cor personalizada para HTML
      case "CSS3":
        return "blue";   // cor personalizada para CSS
      case "JavaScript":
        return "yellow"; // cor personalizada para JavaScript
      default:
        return "gray";   // cor padrão
    }
  };

  return (
    <Box id="projects" sx={{ padding: "50px 0" }}>
      <Typography variant="h2" align="center" gutterBottom>
        Projetos
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
              {  }
              <CardMedia
                component="img"
                alt={`${project.title} preview`}
                height="180"
                image={project.imageUrl}
              />
              {/* Conteúdo do projeto */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "20px" }}>
                  {project.technologies.map((tech, index) => (
                    <Box key={index} title={tech.name}>
                      <Box sx={{ color: getColorForTechnology(tech.name) }}>
                        {tech.icon}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </CardContent>
              {/* Ações (botão/link) */}
              <CardActions
              sx={{
                display: "flex",            // Torna o container flexível
                flexDirection: "row",       // Alinha os botões horizontalmente
                justifyContent: "center",   // Centraliza os botões no eixo horizontal
                alignItems: "center",       // Alinha os botões no eixo vertical
                gap: "80px",                // Adiciona espaçamento entre os botões
                padding: "16px",            // Padding ao redor dos botões
              }}
              >
              <Button
                size="small"
                color="secondary"
                onClick={() => window.open(project.link, "_blank")}
                sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px", // Deixe o botão mais arredondado
                textTransform: "none", 
                transition: "all 0.3s ease", // Adiciona animação para hover
                "&:hover": {
                bgcolor: "primary.dark", // Cor de fundo ao passar o mouse
                },
                }}
              >
                Ver Projeto
              </Button>
              <Button
                size="small"
                color="secondary"
                onClick={() => window.open(project.githubLink, "_blank")}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px", // Deixe o botão mais arredondado
                  textTransform: "none", 
                  transition: "all 0.3s ease", // Adiciona animação para hover
                  "&:hover": {
                  bgcolor: "primary.dark", // Cor de fundo ao passar o mouse
                  }
                }}
              >
                Ver no GitHub
              </Button>

              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;

