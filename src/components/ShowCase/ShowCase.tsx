import { Box, Stack } from "@mui/material";
import ShowCaseImages from "./ShowCaseImages";
import ShowCaseTexts from "./ShowCaseTexts";
import ShowCaseCard from "./ShowCaseCard";
import background from "/assets/background-feedback-home.svg";

const ShowCase = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      py={{ xs: 10, sm: 16 }}
      px={{ xs: 2, lg: 16 }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={5}
      >
        <Box maxWidth={{ xs: "100%", md: 678 }}>
          <ShowCaseTexts />
          <ShowCaseCard />
        </Box>

        <Box width={500} display={{ xs: "none", md: "block" }}>
          <ShowCaseImages />
        </Box>
      </Stack>
    </Box>
  );
};

export default ShowCase;
