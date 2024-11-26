import { AppBar, Typography, Toolbar, styled } from "@mui/material"
import { FaGithub, FaLinkedin } from "react-icons/fa"





const NavBar = () => {
  const StyledToobar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between", // Isso distribui os itens com mais flexibilidade
    alignItems: "center",
    marginLeft: "100px",
    padding: "0 20px", // Padding padrão para espaços laterais
    [theme.breakpoints.down("sm")]: {
      flexDirection: "flex", // Coloca os itens em coluna no mobile
      gap: "10px", // Espaçamento entre os itens
      textAlign: "center", // Centraliza o texto
    },
  }));
  

    return (
      <>
        <AppBar position="absolute">
            <StyledToobar>
            <Typography component="a" href="#about" sx={{ color: 'inherit', textDecoration: 'none' }}>
              Sobre
            </Typography>
            <Typography component="a" href="#skills" sx={{ color: 'inherit', textDecoration: 'none' }}>
              Habilidades
            </Typography>
            <Typography component="a" href="#projects" sx={{ color: 'inherit', textDecoration: 'none' }}>
              Projetos
            </Typography>
             {/* Ícones de redes sociais */}
            <div>
              <a href="https://github.com/kauuer" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/kauuerodrigues/" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
                <FaLinkedin size={24} />
              </a>
            </div>
            </StyledToobar>
            
            
        </AppBar>  
      </>
    )
  }
  
  export default NavBar