import { Box, InputLabel, TextField } from "@mui/material";

interface ShowCaseInputProps {
  id: string;
  label: string;
}

const ShowCaseInput: React.FC<ShowCaseInputProps> = ({ id, label }) => {
  return (
    <Box>
      <InputLabel htmlFor={id} sx={{ color: "secondary.main", fontSize: 14, mb: 2 }}>
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
