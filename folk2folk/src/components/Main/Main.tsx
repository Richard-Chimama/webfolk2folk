import { Box, Divider, Grid, Typography } from "@mui/joy";
import Spacer from "../Spacer";
import * as S from "./styled";
import WeeklySchedule from "../WeeklyShedule";

const Main = () => {
  return (
    <Box sx={{ marginBottom: "15px" }}>
      <div id="about">
        <Box
          sx={{
            mx: { xs: "2%", md: "10%" },
            width: { xs: "97%", md: "80%" },
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
            Välkommen till Folk till Folk Secondhand, din nya destination för
            secondhandkläder av hög kvalitet som ligger på{" "}
            <b>Störtloppsvägen 20</b>. På Folk till Folk erbjuder vi ett brett
            utbud av prisvärda secondhand-kläder för män, kvinnor och barn. Vi
            sammanställer noggrant vårt urval genom att köpa från välrenommerade
            butiker och personligen sortera donerade kläder för att säkerställa
            att varje föremål uppfyller våra höga kvalitetsstandarder.
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
            Vi uppmuntrar dig att gå med oss ​​i denna ansträngning genom att
            donera dina tidigare älskade kläder, skor och väskor. Dina
            försiktigt använda föremål kan vara precis vad någon annan behöver.
            Alla donationer ska vara rena och i gott skick, redo att hitta ett
            nytt hem och förlänga deras livscykel.
          </S.Text>
          <Spacer h="25px" />

          <S.Text>
            Hjälp oss främja en hållbar livsstil och återupptäck glädjen med
            secondhandshopping på Folk till Folk. Tillsammans kan vi göra
            skillnad!
          </S.Text>
          <Spacer h="35px" />
          <Divider />

          <Grid container spacing={2}>
            <Grid xs={12} md={6} sm={6}>
              <Box>
                <Spacer h="16px" />
                <Typography component="h1">ÖPPETTIDER</Typography>
                <Spacer h="16px" />
                <WeeklySchedule />
              </Box>
            </Grid>
            <Grid xs={12} md={6} sm={6}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2037.4001493494702!2d17.967989799999998!3d59.292874000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f779ddec055e3%3A0xe1f1691e2891a443!2sFolk%20till%20folk!5e0!3m2!1ssv!2sse!4v1720987305027!5m2!1ssv!2sse"
                width="100%"
                height="450"
                style={{ border: "0px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Box>
  );
};

export default Main;
