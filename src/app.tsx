import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./styles/theme";
import AppRoutes from "./routes";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <AppRoutes />
  </ThemeProvider>
);
