import { Box, Button, Grid, Link, ThemeProvider, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { resumeLink } from '../../constants/data';
import { linkSx } from '../../constants/sxConstants';
import theme from '../../hooks/themes';


function Hero() {
    return (
        <ThemeProvider theme={theme}>
            <Container disableGutters sx={{ marginY: "20rem"}}>            
                <Grid container display={"flex"} flexDirection={"column"}>
                    {/* <Grid item xs={6}> */}
                        <Typography variant="h4" component="h1" marginBottom={1} >
                        Hi, my name is
                        </Typography>
                    {/* </Grid> */}
                    <Typography variant="h1" component="h2" marginBottom={0.5} >
                    Simon Zargarian.
                    </Typography>
                    <Typography variant="h2" component="h3" marginBottom={1} >
                    I'm a Java / React / Python-AI developer.
                    </Typography>
                    
                    <Box maxWidth={"sm"}>
                    <Typography variant="body1" component="p" marginBottom={2} boxSizing={"inherit"}>
                    I am a software-enginner, specializing in backend development with strong fucos on UI and React. I am currently, working 
                    with <Link href="#" onClick={() => window.open("https://www.xlntgroup.se/", '_blank', 'noopener,noreferrer')} underline="none" sx={linkSx}>{' XLNT Group '}</Link>, and 
                    creating automation framework using Java and React by utilizing varius AI technologies such as Open-AI GPT, Google Gemma and Facebook Llama, I am also developing and fine tuning Language Models and with Python and Machine Learning.
                    </Typography>
                    </Box>
                    <Box sx={{ 
                        display: { xs: 'flex', md: 'none' }, color:"#51bda3" }}
                    >
                        <Button variant="outlined" href={resumeLink} sx={{ 
                        display: 'flex', paddingY: 2, color:"#51bda3", borderWidth: 2, borderColor: "#51bda3", '&:hover': { borderWidth: 2, borderColor: "#51bda3", backgroundColor:"ButtonHighlight" }
                        }}>
                        Resume
                        </Button>
                    </Box>
                </Grid >            
            </Container>
        </ThemeProvider>
        
    );
  }
  
  export default Hero;