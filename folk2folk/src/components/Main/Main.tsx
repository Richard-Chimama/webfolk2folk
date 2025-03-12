import { Box, Divider, Typography } from "@mui/joy";
import Spacer from "../Spacer";
import * as S from "./styled";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MasonryImageList from "./MasonryImageList";

const Main = () => {
  return (
    <Box sx={{ marginBottom: "15px" }}>
      <div id="about">
        <Box
          sx={{
            mx: { xs: "2%", md: "10%" },
            width: { xs: "97%", md: "80%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "flex-start", md: "center" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "flex-start", md: "center" },
              alignItems: "center",
            }}
          >
            <Typography component="h1" sx={{ color: "whitesmoke" }}>
              ADRESS
            </Typography>
            <S.Text>
              Störtloppsvägen 20,{<br />}129 47 Hägersten
              {<br />}
              <S.MapLink href="https://maps.app.goo.gl/XcBLZ3QG6dNX9gnu5">
                Map <ArrowOutwardIcon />
              </S.MapLink>
            </S.Text>
          </Box>

          <MasonryImageList />

          <Spacer h="35px" />
          <S.Title>Daily Offerings</S.Title>
          <Box sx={{ fontWeight: "bold", fontStyle: "italic" }}>
            Secondhand Streetwear | curated Aesthetics | Community & Culture
          </Box>
          <S.Text>
            Explore handpicked Carhartt workwear, Levi denims, office siren
            outfits, skater fits, and more
          </S.Text>
          <S.Text>
            Shop premium fur, leather pieces, and statement accessories
          </S.Text>
          <S.Text>Discover Nike, Adidas, Puma, and NFL selections</S.Text>
          <S.Text>
            Selling things within fashion and entertainment recycled shopping
            experience Enjoy a laid-back shopping experience—{" "}
            <b>
              bring your coffee, make friends, and find your next favorite
              piece.
            </b>
          </S.Text>
          <Divider />
          <Spacer h="35px" />
          <S.Title>About us</S.Title>
          <S.Text>
            FolktillFolk was founded in 2024 with a vision beyond just selling
            clothes—we set out to sell good feelings. From the very beginning,
            our mission has been to make people feel great, not just in what
            they wear but in how they see themselves. That purpose has driven us
            every step of the way, and it continues to fuel our success.
            <br />
            <br />
            Our secondhand clothes come from trusted suppliers across various
            locations, including Spain, the UK, the USA, Italy, Poland, France,
            and India and many more . Each piece is carefully selected and
            thoroughly inspected to ensure quality and authenticity before it
            reaches our store. We take great care in preparing every item, so
            our customers can feel confident that they’re getting well-curated,
            stylish, and high-quality clothing worth investing in.
          </S.Text>
        </Box>
      </div>
    </Box>
  );
};

export default Main;
