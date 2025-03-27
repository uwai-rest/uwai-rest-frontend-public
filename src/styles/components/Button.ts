import type { Components } from "@mui/material/styles/components";

export const MuiButton: Components["MuiButton"] = {
  variants: [
    {
      props: {
        variant: "contained",
      },
      style: {
        fontSize: "14px",
        lineHeight: "1.5rem",
        fontWeight: 400,
        borderRadius: "8px",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none !important",
        },
        padding: "4px 10px",
        minHeight: "32px",
      },
    },
    {
      props: {
        variant: "contained",
        size: "small",
      },
      style: {
        fontSize: "0.875rem",
        lineHeight: "1.125rem",
        fontWeight: 700,
        borderRadius: "10px",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none !important",
        },
        padding: "6px 24px",
        textTransform: "none",
      },
    },
  ],
};
