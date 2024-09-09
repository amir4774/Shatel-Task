import { Box, Stack } from "@mui/material";
import ShowCaseInput from "./ShowCaseInput";
import BasicButton from "../BasicButton";

const formInputs = [
  { id: "name", label: "نام و نام خانوادگی" },
  { id: "phone", label: "شماره تماس ثابت (به همراه کد شهر)" },
  { id: "mobile", label: "شماره موبایل" },
  { id: "characters", label: "لطفا کاراکترها را تایپ کنید" },
];

const ShowCaseCard = () => {
  return (
    <Box bgcolor="#fff" mt={5} p={5} boxShadow={5} borderRadius={5}>
      <Stack spacing={3}>
        {formInputs.map((input) => (
          <ShowCaseInput key={input.id} id={input.id} label={input.label} />
        ))}

        <BasicButton text="ارسال" width="100px" />
      </Stack>
    </Box>
  );
};

export default ShowCaseCard;
