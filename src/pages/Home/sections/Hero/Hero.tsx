import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/perfil.png"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackGround/AnimatedBackGround";


const Hero = () => {

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: {
      paddingTop: "100px",
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: "0",
    }

  }))

  const StyledImg = styled("img")(() => ({
    width: "60%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }))

  return (
    <>
      <StyledHero>
        <Container  maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"100%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="secondary" variant="h1" textAlign="center" pb={2}> Kauê Rodrigues </Typography>
              <Typography color="secondary" variant="h3" textAlign="center"> Engenheiro de Software</Typography> 
              <Typography color="secondary" variant="h5" textAlign="center"> A melhor maneira de prever o futuro é cria-lo.</Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">                  
                  <StyledButton onClick= {() => console.log("download")}>
                    <DownloadIcon />
                    <Typography component="a" href="/my-portfolio/curriculo.pdf"  download="Kaue_Rodrigues_CV.pdf" sx={{color: 'inherit', textDecoration: 'none', }} >
                      Download CV
                    </Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick= {() => console.log("download")}>
                    <EmailIcon />
                      <Typography component="a" href="mailto:iggcode@gmail.com" sx={{color: 'inherit', textDecoration: 'none', }}>
                        Contato
                      </Typography>
                    </StyledButton>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero