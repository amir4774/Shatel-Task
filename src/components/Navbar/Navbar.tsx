import { useState } from "react";
import { AppBar, Box, IconButton, Link, Stack, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BasicButton from "../BasicButton";
import NavbarDrawer from "./NavbarDrawer";
import shatelLogo from "/assets/shatel-logo.png";

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
          <Stack justifyContent="space-between" width="100%">
            <Stack gap={7}>
              <Box component="img" src={shatelLogo} alt="shatel logo" />

              <Stack gap={7} display={{ xs: "none", md: "flex" }}>
                {navLinks.map((link) => (
                  <Link key={link} href="#">
                    {link}
                  </Link>
                ))}
              </Stack>
            </Stack>

            <Stack gap={3} display={{ xs: "none", md: "flex" }}>
              <BasicButton text="شاتل" background="#F36339" />
              <BasicButton text="نماوا" background="#303539" />
            </Stack>

            <IconButton
              color="primary"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
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
