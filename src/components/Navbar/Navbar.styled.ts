import { Stack, styled } from "@mui/material";

interface NavbarStackProps {
  itemsGap?: number;
}

export const NavbarStack = styled(Stack)<NavbarStackProps>(
  ({ theme, itemsGap }) => ({
    alignItems: "center",
    flexDirection: "row",
    gap: theme.spacing(itemsGap || 0),
  })
);
