import type { Components } from "@mui/material/styles/components";

export const MuiContainer: Components["MuiContainer"] = {
  defaultProps: {
    maxWidth: "lg",
  },
  styleOverrides: {
    root: {
      paddingLeft: "6px",
      paddingRight: "6px",
    },
  },
};
