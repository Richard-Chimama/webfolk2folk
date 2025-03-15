import { Box } from "@mui/joy";
import * as S from "./style";
//import Instagram from "../../assets/instagram.png"

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "25px",
          height: "200px",
        }}
      >
        <S.Title>Follow us</S.Title>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <S.IconLink
            target="_blank"
            href="https://www.instagram.com/folktillfolk1"
          >
            Instagram
          </S.IconLink>
          <S.IconLink
            target="_blank"
            href="https://www.tiktok.com/@folktillfolk?_t=ZN-8uhSU2ybsUY&_r=1"
          >
            TicTok
          </S.IconLink>
          <S.IconLink
            target="_blank"
            href="https://open.spotify.com/playlist/7ge9SmHzBAcUAEcIgsJhzR?si=JWzMRruTRGS1I-fi1HDc0Q&pi=DFnNf9ivS3SSq&nd=1&dlsi=5ba85d1944934072"
          >
            Spotfy
          </S.IconLink>
        </Box>
      </Box>
      <S.Footer>
        <p>&copy; {date} FolktillFolk Secondhand Store. All right reserved.</p>
      </S.Footer>
    </Box>
  );
};

export default Footer;
