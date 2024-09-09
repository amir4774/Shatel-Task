import { Box, Stack } from "@mui/material";
import FooterLine from "./FooterLine";
import FooterLinks from "./FooterLinks";
import FooterMedia from "./FooterMedia";

const Footer = () => {
  return (
    <Box component="footer" mt={2} width={{ xs: "95%", lg: "80%" }} mx="auto">
      <FooterLine />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        py={10}
      >
        <FooterLinks />
        <FooterMedia />
      </Stack>
    </Box>
  );
};

export default Footer;
