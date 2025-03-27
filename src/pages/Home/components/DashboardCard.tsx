import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Collapse,
  Divider,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import arrIcon from "@/assets/images/ArrowDropDownFilled.svg";

function TabPanel({ children, value, index }: any) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ marginTop: 2 }}>{children}</Box>}
    </div>
  );
}

export default function DashboardCard() {
  const [expanded, setExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState("day");
  const [value, setValue] = useState(1);

  return (
    <Box>
      {/* Tabs */}
      <ButtonGroup
        sx={{
          marginTop: 2,
          background: "#fff",
          borderRadius: "12px",
          border: "4px solid #fff",
        }}
      >
        <Button
          variant={activeTab === "day" ? "contained" : "text"}
          onClick={() => setActiveTab("day")}
        >
          День
        </Button>
        <Button
          variant={activeTab === "week" ? "contained" : "text"}
          onClick={() => setActiveTab("week")}
        >
          Неделя
        </Button>
        <Button
          variant={activeTab === "month" ? "contained" : "text"}
          onClick={() => setActiveTab("month")}
        >
          Месяц
        </Button>
      </ButtonGroup>

      <Card sx={{ mt: 2, borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
            <Tab label="Использованно токенов" />
            <Tab label="Статистика" />
          </Tabs>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "grey.200",
                p: 1,
                borderRadius: 2,
                cursor: "pointer",
              }}
              onClick={() => setExpanded(!expanded)}
            >
              <Typography fontWeight="bold">Забронировано столов</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography fontWeight="bold">100</Typography>
                <IconButton
                  size="small"
                  sx={{ rotate: expanded ? "180deg" : "" }}
                >
                  <img src={arrIcon} alt="" />
                </IconButton>
              </Box>
            </Box>

            <Collapse in={expanded}>
              <Box sx={{ p: 1 }}>
                {[1, 2, 3, 4].map((num) => (
                  <Box
                    key={num}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <Typography>{num} ресторан</Typography>
                    <Typography fontWeight="bold">10</Typography>
                  </Box>
                ))}
              </Box>
            </Collapse>

            <Divider sx={{ my: 2 }} />

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography>Общее кол-во пользователей</Typography>
              <Typography fontWeight="bold">100</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                bgcolor: "grey.100",
                p: 1,
                borderRadius: 2,
              }}
            >
              <Typography>Новых пользователей</Typography>
              <Typography color="green" fontWeight="bold">
                +100
              </Typography>
            </Box>
          </TabPanel>
        </CardContent>
      </Card>
    </Box>
  );
}
