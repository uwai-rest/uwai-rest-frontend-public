import type { Components } from '@mui/material/styles/components';
import type { Theme } from '@mui/material/styles/createTheme';

export const MuiInputAdornment: Components<Theme>['MuiInputAdornment'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      p: {
        fontSize: '0.875rem',
        lineHeight: '1.3125rem',
        fontWeight: 500,
        color: theme.palette.customGrey.dark3,
        [theme.breakpoints.down('md')]: {
          fontSize: '1rem',
        },
      },
    }),
    positionStart: {
      height: '100%',
      paddingRight: '5px',
      paddingLeft: '4px',
      backgroundColor: 'transparent',
      marginRight: '-16px',
      marginTop: '18px !important',
    },
  },
};
