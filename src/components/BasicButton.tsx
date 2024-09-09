import { Button } from "@mui/material";

export interface BasicButtonProps {
  text: string;
  background?: string;
  width: string;
}

const BasicButton: React.FC<BasicButtonProps> = ({
  text,
  background,
  width,
}) => {
  return (
    <Button
      variant="contained"
      sx={{ bgcolor: background || "primary", width, borderRadius: 20, px: 5 }}
    >
      {text}
    </Button>
  );
};

export default BasicButton;
