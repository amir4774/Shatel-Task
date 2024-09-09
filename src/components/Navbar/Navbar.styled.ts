import { Stack, styled } from "@mui/material";

interface NavbarStackProps {
  itemsgap?: number;
}

export const NavbarStack = styled(Stack)<NavbarStackProps>(
  ({ theme, itemsgap }) => ({
    alignItems: "center",
    flexDirection: "row",
    gap: theme.spacing(itemsgap || 0),
  })
);
