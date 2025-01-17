import { Box, Grid, Typography } from "@mui/joy";
import * as S from "./style"

const Footer = () => {
  return (
    <Box >
      <Grid container spacing={2} style={{height:'500px', padding: '20px'}}>
        <Grid xs={12} md={6} sm={6}>
          <Box style={{display:'flex',justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '25px'}}>
            <S.Text>
              Just nu är denna webbplats och sociala medier under utveckling.
              Under tiden, följ oss gärna på Instagram, vi blir glada. Vi ses
              senare!
            </S.Text>
            <Box>
              <Typography
                component="a"
                href="https://www.instagram.com/folktfolk"
                target="_blank"
                sx={{
                    color:'skyblue'
                }}
              >
                Instagram @folktfolk
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={6} sm={6}></Grid>
      </Grid>
      <S.Footer>
            <p>&copy; 2024 Folk till Folk Secondhand Store. Alla rättigheter förbehållna..</p>
        </S.Footer>
    </Box>
  );
};

export default Footer;
