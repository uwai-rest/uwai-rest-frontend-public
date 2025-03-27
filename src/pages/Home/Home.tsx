import { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";
import {
  Card,
  CardContent,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";

import { BorderLinearProgress } from "@/components/BorderLinearProgress";
import theme from "@/styles";

import DashboardCard from "./components/DashboardCard";

const MAX_TOKENS_VALUE = 100;

const tokensValue = 10;

export const HomePage = () => {
  useEffect(() => {
    if (window?.Telegram?.WebApp?.WebAppUser?.username) {
      const WebApp = window.Telegram.WebApp;
      WebApp?.showAlert(`Добро пожаловать, @${WebApp.WebAppUser?.username}.`);
    }
  }, []);

  return (
    <Stack flexDirection="column">
      <Card>
        <CardContent>
          <InputLabel>Осталось токенов</InputLabel>
          <Stack direction="row" alignItems="center" gap="8px">
            <BorderLinearProgress
              variant="determinate"
              value={(MAX_TOKENS_VALUE * tokensValue) / 100}
            />
            <Typography>
              {tokensValue}/{MAX_TOKENS_VALUE}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              sx={{ display: "flex", alignItems: "center", gap: "4px" }}
            >
              <CircleIcon
                htmlColor={theme.palette.primary.main}
                sx={{ fontSize: "14px" }}
              />{" "}
              Тариф
            </Typography>
            <Typography variant="body1">Оплата за токены</Typography>
          </Stack>
          <Button
            href="/purchase-tokens"
            variant={"contained"}
            fullWidth
            endIcon={<AddIcon />}
          >
            Пополнить токены
          </Button>
        </CardContent>
      </Card>
      <DashboardCard />
    </Stack>
  );
};
