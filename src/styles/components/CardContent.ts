import type { Components } from "@mui/material/styles/components";
import type { Theme } from "@mui/material/styles/createTheme";

export const MuiCardContent: Components<Theme>["MuiCardContent"] = {
  styleOverrides: {
    root: {
      border: "none",
      borderRadius: "1rem",
      padding: "0.5rem !important",
    },
  },
};
