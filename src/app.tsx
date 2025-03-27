import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";

import AppRoutes from "./routes";
import theme from "./styles";

import "./styles/styles.scss";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <AppRoutes />
  </ThemeProvider>
);
