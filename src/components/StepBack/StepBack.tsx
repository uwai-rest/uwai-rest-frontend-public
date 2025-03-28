import { ReactNode } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, Typography } from "@mui/material";

import theme from "@/styles";

type StepBackProps = {
  href?: string;
  children: ReactNode;
};

export const StepBack = ({ href, children }: StepBackProps) => {
  return (
    <Link href={href} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <ArrowBackIcon
        sx={{ cursor: "pointer", color: theme.palette.common.white }}
      />
      <Typography
        variant="h6"
        sx={{ ml: 2, color: theme.palette.common.white }}
      >
        {children}
      </Typography>
    </Link>
  );
};
