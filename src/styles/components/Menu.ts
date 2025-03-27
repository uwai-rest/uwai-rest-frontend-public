import type { Components } from '@mui/material/styles/components';
import type { Theme } from '@mui/material/styles/createTheme';

export const MuiMenu: Components<Theme>['MuiMenu'] = {
  styleOverrides: {
    paper: ({ theme }) => ({
      marginTop: '0.5rem',
      border: `1px solid ${theme.palette.customGrey.light2}`,
      boxShadow: 'none',
      fontSize: '0.875rem', // 14px
      lineHeight: '1.3125rem', // 21px
      color: theme.palette.customGrey.dark3,
      fontWeight: 500,
      padding: '1.25rem', // 20px
      [theme.breakpoints.down('md')]: {
        padding: 0,
      },
      '&.MuiPaper-root-MuiPopover-paper': {
        border: '1px solid red',
      },
    }),
    list: ({ theme }) => ({
      padding: 0,
      [theme.breakpoints.down('md')]: {
        padding: '0.5rem 0',
      },
      '& .MuiMenuItem-root': {
        marginBottom: '0.625rem', // 10px
        '&:last-child': {
          marginBottom: 0,
        },
      },
    }),
  },
};
