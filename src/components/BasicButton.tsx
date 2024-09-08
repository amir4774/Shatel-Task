import { Button } from "@mui/material";

export interface BasicButtonProps {
  text: string;
  background: string;
}

const BasicButton: React.FC<BasicButtonProps> = ({ text, background }) => {
  return (
    <Button
      variant="contained"
      sx={{ bgcolor: background, borderRadius: 20, px: 5 }}
      fullWidth
    >
      {text}
    </Button>
  );
};

export default BasicButton;
