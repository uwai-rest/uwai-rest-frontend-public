import type { Components } from "@mui/material/styles/components";
import type { Theme } from "@mui/material/styles/createTheme";

export const MuiCardContent: Components<Theme>["MuiCardContent"] = {
  styleOverrides: {
    root: {
      border: "none",
      borderRadius: "0.625rem",
      padding: "1.5625rem 1.25rem",
    },
  },
};
