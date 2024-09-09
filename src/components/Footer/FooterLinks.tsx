import { Link, List, ListItem, ListItemText } from "@mui/material";

const footerLinks = [
  "پیشنهاد های جشنواره",
  "درباره پیشنهاد",
  "توضیحات بیشتر",
  "ارتباط با ما",
];

const FooterLinks = () => {
  return (
    <List>
      {footerLinks.map((link) => (
        <ListItem key={link} disablePadding>
          <Link href="#">
            <ListItemText primary={link} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default FooterLinks;
