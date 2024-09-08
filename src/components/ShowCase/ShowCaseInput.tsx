import { Box, InputLabel, TextField } from "@mui/material";

interface ShowCaseInputProps {
  id: string;
  label: string;
}

const ShowCaseInput: React.FC<ShowCaseInputProps> = ({ id, label }) => {
  return (
    <Box>
      <InputLabel htmlFor={id} sx={{ color: "#303539", fontSize: 14, mb: 2 }}>
        {label}
        <Box component="sup" color="red">
          *
        </Box>
      </InputLabel>
      <TextField id={id} required fullWidth size="small" />
    </Box>
  );
};

export default ShowCaseInput;
