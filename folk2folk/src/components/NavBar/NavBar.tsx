import { Box, List, ListItem, ListItemButton } from "@mui/joy";
import { FC } from "react";
import Logo from "../../assets/folk2.png";

type ownprop = {};

const Header: FC<ownprop> = () => {
  return (
    <Box
      sx={{
        minHeight: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <img style={{ width: "100px" }} src={Logo} alt="folk till folk logo" />
      </Box>
      <List
        role="menubar"
        orientation="horizontal"
        sx={{
            flex:1,
            justifyContent: 'flex-end',
          "--List-radius": "8px",
          "--List-padding": "4px",
          "--List-gap": "8px",
          "--ListItem-gap": "0px",
        }}
      >
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#product">
            Product
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#about">
            About
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#contact">
            Contact
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Header;
