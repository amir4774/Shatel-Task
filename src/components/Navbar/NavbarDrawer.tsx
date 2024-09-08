import { Box, Drawer, List, ListItem } from "@mui/material";
import BasicButton from "../BasicButton";
import DrawerLink from "./DrawerLink";

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
              <DrawerLink key={link} link={link} />
            ))}

            <ListItem>
              <BasicButton text="شاتل" background="#F36339" width="100%" />
            </ListItem>

            <ListItem>
              <BasicButton text="نماوا" background="#303539" width="100%" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default NavbarDrawer;
