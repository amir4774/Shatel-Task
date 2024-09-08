import {
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import BasicButton from "../BasicButton";

export interface NavbarDrawerProps {
  navLinks: string[];
  open: boolean;
  handleClose: () => void;
}

const NavbarDrawer: React.FC<NavbarDrawerProps> = ({
  navLinks,
  open,
  handleClose,
}) => {
  return (
    <nav>
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}
      >
        <Box onClick={handleClose}>
          <List>
            {navLinks.map((link) => (
              <Link key={link} href="#">
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary={link} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}

            <ListItem>
              <BasicButton text="شاتل" background="#F36339" />
            </ListItem>

            <ListItem>
              <BasicButton text="نماوا" background="#303539" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default NavbarDrawer;
