import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Slider,
  Typography,
} from "@mui/material";

import { StepBack } from "@/components/StepBack";

export const DaysSelectPage = () => {
  const [value, setValue] = useState(5000);
  const [days, setDays] = useState(7);

  const handleChange = (_: Event, newValue: number) => {
    setValue(newValue);
    setDays(Math.round((newValue / 1000) * 4));
  };

  return (
    <>
      <StepBack href="/subscription">Выберите кол-во дней</StepBack>

      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mb: 1,
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              {value.toLocaleString()} ₽
            </Typography>
            <Typography variant="h6" color="gray">
              {days} дней
            </Typography>
          </Box>

          <Slider
            value={value}
            onChange={handleChange as any}
            step={1000}
            min={1000}
            max={10000}
          />
        </CardContent>
      </Card>
      <Button
        variant="contained"
        fullWidth
        sx={{ borderRadius: 3, mt: 2, py: 1.5 }}
      >
        Оплатить
      </Button>
    </>
  );
};
