import { Box, Typography } from "@mui/joy";
import * as S from "./style";
import Instagram from "../../assets/instagram.png"

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
          height: "400px",
        }}
      >
        <S.Title>Follow us</S.Title>
        <Box sx={{display:'flex', gap: '10px', alignItems: 'center'}}>
          <img src={Instagram} alt="instagram logo" width="30px" />
          <Typography
            component="a"
            href="https://www.instagram.com/folktillfolk1"
            target="_blank"
            sx={{
              color: "skyblue",
            }}
          >
            @folktillfolk1
          </Typography>
        </Box>
      </Box>
      <S.Footer>
        <p>
          &copy; {date} FolktillFolk Secondhand Store. All right reserved.
        </p>
      </S.Footer>
    </Box>
  );
};

export default Footer;
