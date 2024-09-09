import { NavbarStack } from "./Navbar.styled";
import BasicButton from "../BasicButton";

const NavbarButtons = () => {
  return (
    <NavbarStack itemsgap={3} display={{ xs: "none", md: "flex" }}>
      <BasicButton text="شاتل" width="100px" />
      <BasicButton text="نماوا" background="secondary.main" width="100px" />
    </NavbarStack>
  );
};

export default NavbarButtons;
