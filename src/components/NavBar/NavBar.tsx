import { AppBar, Typography, Toolbar, styled } from "@mui/material"




const NavBar = () => {
  const StyledToobar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly"
  }))
  

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
            </StyledToobar>
            
            
        </AppBar>  
      </>
    )
  }
  
  export default NavBar