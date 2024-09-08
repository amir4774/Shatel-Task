import { Box, Typography } from "@mui/material";
import line from "/assets/title-line.png";

const ShowCaseTexts = () => {
  return (
    <>
      <Typography fontWeight="bold" variant="h6">
        دریافت سرویس
      </Typography>
      <Box component="img" src={line} />

      <Typography textAlign="justify">
        برای بهره‌مندی از این شرایط و دریافت سرویس‌های مختلف اینترنت پرسرعت شاتل
        فرم زیر را تکمیل کنید تا همکاران ما در سریع‌ترین هنگام با شما تماس
        بگیرند.
      </Typography>
    </>
  );
};

export default ShowCaseTexts;
