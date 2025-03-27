import type { Components } from '@mui/material/styles/components';

export const MuiSlider: Components['MuiSlider'] = {
  styleOverrides: {
    root: {
      '& .MuiSlider-rail': {
        opacity: 1,
        backgroundColor: '#BAC3D5',
      },
    },
  },
};
