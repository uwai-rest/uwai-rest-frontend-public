import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import { Header } from "./components/Header";
import { DaysSelectPage } from "./pages/DaysSelect";
import { HomePage } from "./pages/Home";
import { PurchaseTokensPage } from "./pages/PurchaseTokens";
import { SubscriptionPage } from "./pages/Subscription";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/subscription" element={<SubscriptionPage />} />
            <Route path="/purchase-tokens" element={<PurchaseTokensPage />} />
            <Route path="/days-select" element={<DaysSelectPage />} />
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  );
};

export default AppRoutes;
