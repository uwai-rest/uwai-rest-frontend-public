import type { PaletteOptions } from "@mui/material/styles";

export const palette: PaletteOptions = {
  mode: "light",
  common: {
    white: "#FFFFFF",
    black: "#000000",
  },
  primary: {
    main: "#1976D2",
    light: "#BAD6F2",
    dark: "#1668B9",
    contrastText: "#FEFEFE",
  },
  text: {
    primary: "#0C122A",
    secondary: "#071B3ACC",
    disabled: "rgba(0,0,0,0.38)",
  },
  info: {
    main: "#4C77E5",
    light: "#EEF2FD",
  },
  warning: {
    main: "#CF6300",
    light: "#FAF0E7",
  },
  error: {
    main: "#E02727",
    light: "#FCEAEA",
  },
  success: {
    main: "#059436",
    light: "#DFF1E5",
  },
  action: {
    disabled: "#FEFEFE",
    disabledBackground: "#D4DFF9",
    disabledOpacity: 1,
  },
};
