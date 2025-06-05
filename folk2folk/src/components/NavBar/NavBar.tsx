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
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/folk1.jpeg";

type OwnProps = object;

const Header: FC<OwnProps> = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Hem" },
    { id: "about", label: "Om oss" },
    { id: "contact", label: "Kontakt" }
  ];

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
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
        backgroundColor: 'var(--background-darker)',
      }}
    >
      <Box sx={{display: { xs:'none', sm: "none", md: "block" } }}>
        <img style={{ width: "100px" }} src={Logo} alt="folk till folk logotyp" />
      </Box>
      
      <Box sx={{
        fontFamily: "Butcherman, system-ui",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: {sm:"34px", md:"64px"},
      }}>
        FolktillFolk
      </Box>

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
          {menuItems.map((item) => (
            <ListItem key={item.id} role="none">
              <ListItemButton
                role="menuitem"
                component="a"
                href={`#${item.id}`}
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: 'var(--primary-color)',
                    backgroundColor: 'transparent',
                  }
                }}
              >
                {item.label}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton 
          onClick={toggleDrawer(true)}
          sx={{ color: 'white' }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer 
        anchor="right" 
        open={drawerOpen} 
        onClose={toggleDrawer(false)}
        slotProps={{
          content: {
            sx: {
              backgroundColor: 'var(--background-darker)',
            }
          }
        }}
      >
        <Box
          sx={{
            width: 250,
            padding: "16px",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <Box sx={{ 
              fontFamily: "Butcherman, system-ui",
              fontSize: "24px",
              color: 'white',
            }}>
              FolktillFolk
            </Box>
            <IconButton 
              onClick={toggleDrawer(false)}
              sx={{ color: 'white' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {menuItems.map((item) => (
              <ListItem key={item.id}>
                <ListItemButton
                  component="a"
                  href={`#${item.id}`}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      color: 'var(--primary-color)',
                    }
                  }}
                >
                  {item.label}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
