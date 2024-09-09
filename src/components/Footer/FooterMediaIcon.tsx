import { ListItemIcon, Stack } from "@mui/material";

interface FooterMediaIconProps {
  icon: JSX.Element;
}

const FooterMediaIcon: React.FC<FooterMediaIconProps> = ({ icon }) => {
  return (
    <ListItemIcon
      sx={{
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          bgcolor: "#F36339",
          color: "#fff",
          borderRadius: "50%",
          p: 0.5,
        }}
      >
        {icon}
      </Stack>
    </ListItemIcon>
  );
};

export default FooterMediaIcon;
