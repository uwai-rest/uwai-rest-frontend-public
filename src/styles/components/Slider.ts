import type { Components } from "@mui/material/styles/components";
import type { Theme } from "@mui/material/styles/createTheme";

export const MuiSlider: Components<Theme>["MuiSlider"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      "& .MuiSlider-track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
      },
      "& .MuiSlider-rail": {
        opacity: 1,
        backgroundColor: theme.palette.primary.light,
      },
      "& .MuiSlider-thumb": {
        width: "12px",
        height: "12px",
      },
      "& .MuiSlider-thumb.Mui-active": {
        boxShadow: "0px 0px 0px 3px rgba(25, 118, 210, 0.16)",
      },
    }),
  },
};
