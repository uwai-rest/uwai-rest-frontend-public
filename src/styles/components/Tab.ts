import type { Components } from "@mui/material/styles/components";
import type { Theme } from "@mui/material/styles/createTheme";

export const MuiTab: Components<Theme>["MuiTab"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.primary,
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.3125rem",
      textTransform: "none",
      borderRadius: "8px",
      padding: "4px 10px",
      minHeight: "36px",
      "&.Mui-selected": {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light,
      },
    }),
  },
};
