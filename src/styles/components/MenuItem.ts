import type { Components } from '@mui/material/styles/components';
import type { Theme } from '@mui/material/styles/createTheme';

export const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: '3.125rem', // 50px
      padding: '0.875rem 1.25rem', // 14px 20px
      '&.Mui-selected': {
        backgroundColor: '#F8FAFE',
        color: theme.palette.primary.main,
      },
      '&:hover': {
        backgroundColor: theme.palette.info.light,
      },
    }),
  },
};
