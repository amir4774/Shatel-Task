import { Box, Stack } from "@mui/material";
import landing from "/assets/landing.png";
import cloud from "/assets/cloud.svg";
import wifiIcon from "/assets/wifi-icon.svg";

const ShowCaseImages = () => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Box
          component="img"
          src={wifiIcon}
          width={170}
          mr={5}
          sx={{ rotate: "10deg" }}
        />
        <Box component="img" src={cloud} width={140} />
      </Stack>
      <Box component="img" src={landing} width="100%" mt={-10} />
    </>
  );
};

export default ShowCaseImages;
