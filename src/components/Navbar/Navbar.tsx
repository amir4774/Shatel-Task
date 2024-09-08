import { useState } from "react";
import { AppBar, Box, IconButton, Link, Toolbar } from "@mui/material";
import { NavbarStack } from "./Navbar.styled";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarDrawer from "./NavbarDrawer";
import shatelLogo from "/assets/shatel-logo.png";
import NavbarButtons from "./NavbarButtons";

const navLinks = ["پیشنهادات", "خرید", "توضیحات", "تماس"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <AppBar
        component="nav"
        sx={{ bgcolor: "#fff", px: { xs: "none", lg: 12 } }}
      >
        <Toolbar>
          <NavbarStack justifyContent="space-between" width="100%">
            <NavbarStack itemsGap={7}>
              <Box component="img" src={shatelLogo} alt="shatel logo" />

              <NavbarStack itemsGap={7} display={{ xs: "none", md: "flex" }}>
                {navLinks.map((link) => (
                  <Link key={link} href="#">
                    {link}
                  </Link>
                ))}
              </NavbarStack>
            </NavbarStack>

            <NavbarButtons />

            <IconButton
              color="primary"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </NavbarStack>
        </Toolbar>
      </AppBar>

      <NavbarDrawer
        navLinks={navLinks}
        open={mobileOpen}
        handleClose={handleDrawerToggle}
      />
    </>
  );
};

export default Navbar;
