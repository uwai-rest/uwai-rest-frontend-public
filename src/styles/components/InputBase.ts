import type { Components } from '@mui/material/styles/components';
import type { Theme } from '@mui/material/styles/createTheme';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    root: {
      minHeight: '60px',
    },
    input: ({ theme }) => ({
      height: '18px',
      padding: '28.5px 16px 10.5px 16px !important',
      fontSize: '0.875rem',
      lineHeight: '1.3125rem',
      fontWeight: 500,
      [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
      },
    }),
  },
};
