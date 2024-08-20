import { Box } from "@mui/joy";
import { FC } from "react";
import butik from "../../assets/butik.jpg"

type ownprop = Object;

const Header: FC<ownprop> = () => {
  return (
    <Box
      sx={{
        backgroundColor: "gainsboro",
        width: "100%",
      }}
    >
      <div id="home"></div>
      <img src={butik}  width={'100%'}/>
    </Box>
  );
};

export default Header;
