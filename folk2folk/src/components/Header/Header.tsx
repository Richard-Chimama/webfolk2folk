import { Box } from "@mui/joy";
import { FC } from "react";

type ownprop = Object;

const Header: FC<ownprop> = () => {
  return (
    <Box
      sx={{
        backgroundColor: "gainsboro",
        width: "100%",
        height: "50vh",
      }}
    ></Box>
  );
};

export default Header;
