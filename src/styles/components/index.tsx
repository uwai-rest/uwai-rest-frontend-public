import React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { LinkProps } from "@mui/material/Link";
import type { Components } from "@mui/material/styles/components";
import type { Theme } from "@mui/material/styles/createTheme";

import { MuiButton } from "./Button";
import { MuiButtonBase } from "./ButtonBase";
import { MuiCard } from "./Card";
import { MuiCardContent } from "./CardContent";
import { MuiCheckbox } from "./Checkbox";
import { MuiChip } from "./Chip";
import { MuiContainer } from "./Container";
import { MuiInputAdornment } from "./InputAdornment";
import { MuiInputBase } from "./InputBase";
import { MuiMenu } from "./Menu";
import { MuiMenuItem } from "./MenuItem";
import { MuiSlider } from "./Slider";
import { MuiTab } from "./Tab";
import { MuiTabs } from "./Tabs";
import { MuiTextField } from "./TextField";

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

export const components: Components<Omit<Theme, "components">> = {
  MuiContainer,
  MuiInputBase,
  MuiButton,
  MuiInputAdornment,
  MuiChip,
  MuiTab,
  MuiTabs,
  MuiCardContent,
  MuiCard,
  MuiSlider,
  MuiCheckbox,
  MuiMenu,
  MuiMenuItem,
  MuiTextField,
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: "none",
      },
    },
    defaultProps: {
      component: LinkBehavior,
    } as LinkProps,
  },
  MuiButtonBase: {
    ...MuiButtonBase,
    defaultProps: {
      LinkComponent: LinkBehavior,
    },
  },
  MuiListItemButton: {
    defaultProps: {
      LinkComponent: LinkBehavior,
    },
  },
  MuiIconButton: {
    defaultProps: {
      LinkComponent: LinkBehavior,
    },
  },
};
