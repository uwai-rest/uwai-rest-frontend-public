import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import subscriptionBanner from "@/assets/images/subscription-banner.svg";
import { StepBack } from "@/components/StepBack";

export const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(599);

  const plans = [
    { price: 599, messages: 5000, recommended: true },
    { price: 129, messages: 5000, recommended: false },
    { price: 1119, messages: 5000, recommended: false },
  ];

  return (
    <>
      <StepBack href="/purchase-tokens">Выберите подписку</StepBack>
      <Stack flexWrap="wrap" direction="row" gap="4px">
        {plans.map((plan, index) => (
          <Card
            key={plan.price}
            sx={{
              bgcolor: selectedPlan === plan.price ? "white" : "grey.900",
              color: selectedPlan === plan.price ? "black" : "white",
              width: index === 0 ? "100%" : "calc(50% - 2px)",
            }}
            onClick={() => setSelectedPlan(plan.price)}
          >
            <CardContent
              sx={{ display: "flex", flexDirection: "column", padding: "4px" }}
            >
              {plan.recommended && (
                <Box
                  sx={{
                    height: 100,
                    bgcolor: "grey.800",
                    borderRadius: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={subscriptionBanner} alt="" />
                </Box>
              )}

              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography variant="h5" fontWeight="bold">
                  {plan.price} ₽/день
                </Typography>
                {plan.recommended && (
                  <Chip label="Рекомендуем" color="primary" sx={{ ml: 1 }} />
                )}
              </Box>

              <Typography variant="body2" color="gray">
                {plan.messages} сообщений/день
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Checkbox
                  checked={selectedPlan === plan.price}
                  onChange={() => setSelectedPlan(plan.price)}
                  sx={{ color: "white" }}
                />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
      <Button
        href="/days-select"
        variant="contained"
        fullWidth
        sx={{ borderRadius: 3, mt: 2, py: 1.5 }}
      >
        Выберите подписку
      </Button>
    </>
  );
};
