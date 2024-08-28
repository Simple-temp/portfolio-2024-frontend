import React, { useState } from "react";
import "./Sidebar.scss";
import Home from "../../Pages/Home/Home";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
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
import { Container, Row } from "react-bootstrap";
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import Footer from "../../Pages/Footer/Footer";

const pages = [
  { name: "Home", icon: <HomeIcon />, id: "home-section" },
  { name: "About", icon: <InfoIcon />, id: "about-section" },
  { name: "Services", icon: <WorkIcon />, id: "services-section" },
  { name: "Portfolio", icon: <FolderIcon />, id: "portfolio-section" },
  { name: "Contact", icon: <ContactMailIcon />, id: "contact-section" },
  { name: "Footer", icon: <VerticalAlignBottomIcon />, id: "footer-section" },
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
      <Row>
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
          <Box component="main" sx={{ flexGrow: 1 }}>
            <DrawerHeader />
            <div className="side-bar-container" id="home-section">
              <div className="home-container">
                <Home />
              </div>
            </div>
            <div className="about-section" id="about-section">
              <About />
            </div>
            <div className="services-section" id="services-section">
              <Services />
            </div>
            <div className="portfolio-section" id="portfolio-section">
              <Portfolio />
            </div>
            <div className="contact-section" id="contact-section">
              <Contact />
            </div>
            <div className="footer-section" id="footer-section">
              <Footer/>
            </div>
          </Box>
        </Box>
      </Row>
    </>
  );
};

export default Sidebar;
