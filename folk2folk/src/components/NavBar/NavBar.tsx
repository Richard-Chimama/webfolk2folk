import {
  Box,
  List,
  ListItem,
  ListItemButton,
  IconButton,
  Drawer,
} from "@mui/joy";
import { FC, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/folk1.jpeg";

type OwnProps = object;

const Header: FC<OwnProps> = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerOpen(open);
    };

  return (
    <Box
      sx={{
        minHeight: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 16px",
      }}
    >
      <Box sx={{display: { xs:'none',sm: "none", md: "block" } }}>
        <img style={{ width: "100px" }} src={Logo} alt="folk till folk logo" />
      </Box>
      <Box sx={{
          fontFamily: "Butcherman, system-ui",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: {sm:"34px",md:"64px"},
      }} >FolktillFolk</Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: 'row',
          justifyContent: 'flex-end',
       
        }}
      >
        <List
          role="menubar"
          orientation="horizontal"
          sx={{
            "--List-radius": "8px",
            "--List-padding": "4px",
            "--List-gap": "8px",
            "--ListItem-gap": "0px",
          }}
        >
          <ListItem role="none">
            <ListItemButton role="menuitem" component="a" href="#home" sx={{color: 'white'}}>
              Hem
            </ListItemButton>
          </ListItem>
          <ListItem role="none">
            <ListItemButton role="menuitem" component="a" href="#about" sx={{color: 'white'}}>
              Om
            </ListItemButton>
          </ListItem>
          <ListItem role="none">
            <ListItemButton role="menuitem" component="a" href="#contact" sx={{color: 'white'}}>
              Kontakt
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon sx={{color:'white'}} />
        </IconButton>
      </Box>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            padding: "16px",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <ListItemButton component="a" href="#home">
                Hem
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="#about">
                Om
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="#contact">
                Kontakt
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
