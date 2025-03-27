import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircleIcon from "@mui/icons-material/Circle";
import {
  Button,
  Card,
  CardContent,
  InputLabel,
  Link,
  Slider,
  Stack,
  Typography,
} from "@mui/material";

import { BorderLinearProgress } from "@/components/BorderLinearProgress";
import theme from "@/styles";
import numberWithSpaces from "@/utils/numberWithSpaces";

const MIN_PURCHASE_VALUE = 1000;
const MAX_PURCHASE_VALUE = 10000;
const MAX_TOKENS_VALUE = 100;
const tokensValue = 10;

export const PurchaseTokensPage = () => {
  const [purchaseValue, setPurchaseValue] = useState(5000);

  return (
    <>
      <Link href="/" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <ArrowBackIcon
          sx={{ cursor: "pointer", color: theme.palette.common.white }}
        />
        <Typography
          variant="h6"
          sx={{ ml: 2, color: theme.palette.common.white }}
        >
          Пополнение токенов
        </Typography>
      </Link>

      <Card>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", padding: "4px" }}
        >
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

          <Typography variant="h5">
            {numberWithSpaces(purchaseValue)}
            <Typography
              color={theme.palette.text.disabled}
              variant="h5"
              component={"span"}
            >
              ₽
            </Typography>{" "}
            | {(purchaseValue * 2000) / 1000000}
            <Typography color={theme.palette.text.disabled} component={"sup"}>
              млн токенов
            </Typography>
          </Typography>
          <Slider
            value={purchaseValue}
            onChange={(_, value) => setPurchaseValue(value as number)}
            step={1000}
            min={MIN_PURCHASE_VALUE}
            max={MAX_PURCHASE_VALUE}
          />
        </CardContent>
      </Card>
      <Typography
        sx={{
          textAlign: "center",
          marginTop: "10px",
          color: theme.palette.common.white,
        }}
      >
        Познакомиться с подписками{" "}
        <Link sx={{ textDecoration: "underline" }} href="/subscription">
          Смотреть
        </Link>
      </Typography>
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
