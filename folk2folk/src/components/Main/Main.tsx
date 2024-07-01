import { Box, Divider, Grid, Stack, Typography } from "@mui/joy";
import Spacer from "../Spacer";
import * as S from "./styled";
import WeeklySchedule from "../WeeklyShedule";

const Main = () => {
  return (
    <Box sx={{marginBottom:'15px'}}>
      <Box
        sx={{
          mx: "15%",
          width: "70%",
        }}
      >
        <Spacer h="35px" />
        <Typography
          component="h1"
          sx={{
            fontSize: "44px",
            lineHeight: "62px",
            fontWeight: "600",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Hej!
        </Typography>
        <Spacer h="25px" />
        <S.Text>
          Välkommen till Folk till Folk Secondhand, din nya resmål för
          secondhand-kläder av hög kvalitet som ligger på Störtloppsvägen 20. På
          Folk till Folk erbjuder vi ett brett utbud av prisvärda
          secondhand-kläder för män, kvinnor och barn. Vi sommanställer noggrant
          vårt urval genom att köpa från välrenommerade återvinningsföretag för
          att säkerställa att varje föremål uppfyller våra göga knalitetskrav.
        </S.Text>
        <Spacer h="25px" />
        <S.Text>
          Vi är djupt engagerade i hållbarhet och miljövård. Genom att välja
          begagnat sparar du inte bara pengar utan bidrar också till en mer
          hållbar framtid. Vårt uppdrag är att göra snygga och högkvalitative
          kläder tillgängliga för alla oavsett dudget.
        </S.Text>
        <Spacer h="25px" />
        <S.Text>
          Var med och främja en grönare planet och upptäck glädjen med
          secodhandshopping på Folk till Folk.
        </S.Text>
        <Spacer h="35px" />
        <Divider />

        <Grid container spacing={2}>
          <Grid xs={12} md={6} sm={6}>
            <Box>
                <Spacer h='16px'/>
              <Typography component="h1">ÖPPETTIDER</Typography>
                <Spacer h="16px" />
              <WeeklySchedule />
            </Box>
          </Grid>
          <Grid xs={12} md={6} sm={6}>
            <Box>
              <S.Text>
                Just nu är denna webbplats och sociala medier under utveckling.
                Under tiden, följ oss gärna på Instagram, vi blir glada. Vi ses
                senare!
              </S.Text>
              <S.Text>
                <Typography
                  component="a"
                  href="https://www.instagram.com/folk2folk_sthlm?igsh=MWx6ZDVuaTdnandmNw=="
                  target="_blank"
                >
                  Instagram @folk2folk_sthlm
                </Typography>
                <Typography
                  component="a"
                  href="https://www.tiktok.com/@folk2folk_sthlm?_t=8ndYY4vzpMz&_r=1"
                  target="_blank"
                >
                  TikTok @folk2folk_sthlm
                </Typography>
              </S.Text>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Main;
