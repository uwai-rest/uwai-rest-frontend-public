import type { Components } from "@mui/material/styles/components";
import type { Theme } from "@mui/material/styles/createTheme";

export const MuiTabs: Components<Theme>["MuiTabs"] = {
  styleOverrides: {
    root: {
      "& .MuiTabs-flexContainer": {
        gap: "0.3125rem",
      },
      "& .MuiTabs-indicator": {
        backgroundColor: "transparent",
      },
      padding: 3,
      borderRadius: 12,
      border: "1px solid rgba(0, 0, 0, 0.12)",
      background: "#F5F5F5",
      minHeight: "36px",
    },
  },
};
