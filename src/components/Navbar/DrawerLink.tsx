import { Link, ListItem, ListItemButton, ListItemText } from "@mui/material";

interface DrawerLinkProps {
  link: string;
}

const DrawerLink: React.FC<DrawerLinkProps> = ({ link }) => {
  return (
    <Link href="#">
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText primary={link} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default DrawerLink;
