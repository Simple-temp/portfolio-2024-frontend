import React, { useState } from "react";
import "./Sidebar.scss";
import Home from "../../Pages/Home/Home";
import Profile from "../Profile/Profile";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DrawerHeader, AppBar, Drawer } from "./SideBarMaterialUi";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Home as HomeIcon,
  Info as InfoIcon,
  Work as WorkIcon,
  Folder as FolderIcon,
  ContactMail as ContactMailIcon,
} from "@mui/icons-material";
import About from "../../Pages/About/About";
import Services from "../../Pages/Services/Services";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import Contact from "../../Pages/Contact/Contact";

const pages = [
  { name: "Home", icon: <HomeIcon />, id: "home-section" },
  { name: "About", icon: <InfoIcon />, id: "about-section" },
  { name: "Services", icon: <WorkIcon />, id: "services-section" },
  { name: "Portfolio", icon: <FolderIcon />, id: "portfolio-section" },
  { name: "Contact", icon: <ContactMailIcon />, id: "contact-section" },
];

const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [activePage, setActivePage] = useState("");

  const handleScroll = (id) => {
    setActivePage(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} className="appbar">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  marginRight: 5,
                },
                open && { display: "none" },
              ]}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} className="drawer">
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {pages.map((page) => (
              <ListItem
                key={page.name}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  onClick={() => handleScroll(page.id)}
                  sx={[
                    { minHeight: 48, px: 2.5 },
                    open
                      ? { justifyContent: "initial" }
                      : { justifyContent: "center" },
                    activePage === page.id
                      ? { backgroundColor: "#e0f7fa", color: "#00796b" }
                      : {},
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      { minWidth: 0, justifyContent: "center" },
                      open ? { mr: 3 } : { mr: "auto" },
                      activePage === page.id ? { color: "#00796b" } : {},
                    ]}
                  >
                    {page.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={page.name}
                    sx={[
                      open ? { opacity: 1 } : { opacity: 0 },
                      activePage === page.id ? { color: "#00796b" } : {},
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1,}}>
          <DrawerHeader />
          <div className="side-bar-container" id="home-section">
            <div className="home-container">
              <Home />
            </div>
          </div>
          <div className="about-section pt-5 mt-5" id="about-section">
            <About/>
          </div>
          <div className="about-section" id="services-section">
            <Services/>
          </div>
          <div className="about-section" id="portfolio-section">
            <Portfolio/>
          </div>
          <div className="about-section" id="contact-section">
            <Contact/>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
