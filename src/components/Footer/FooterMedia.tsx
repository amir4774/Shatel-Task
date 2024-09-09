import { List, ListItem, ListItemText } from "@mui/material";
import { Phone, Mail, ChatBubble } from "@mui/icons-material";
import FooterMediaIcon from "./FooterMediaIcon";

const medias = [
  {
    text: "91000000",
    icon: <Phone />,
  },
  { text: "info@shatel.ir", icon: <Mail /> },
  { text: "گفت و گوی آنلاین", icon: <ChatBubble /> },
];

const FooterMedia = () => {
  return (
    <List>
      {medias.map((media) => (
        <ListItem key={media.text}>
          <ListItemText primary={media.text} />
          <FooterMediaIcon icon={media.icon} />
        </ListItem>
      ))}
    </List>
  );
};

export default FooterMedia;
