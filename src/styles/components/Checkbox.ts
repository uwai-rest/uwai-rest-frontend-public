import type { Components } from '@mui/material/styles/components';

export const MuiCheckbox: Components['MuiCheckbox'] = {
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: {
      borderRadius: '5px',
    },
  },
};
