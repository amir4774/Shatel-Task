import { Box } from "@mui/material";
import lineFooter from "/assets/footer-line.svg";

const FooterLine = () => {
  return (
    <Box
      component="img"
      src={lineFooter}
      sx={{ width: "100%", transform: { xs: "scaleY(3)", md: "scaleY(1)" } }}
    />
  );
};

export default FooterLine;
