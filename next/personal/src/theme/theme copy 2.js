import { createTheme } from '@mui/material/styles';
import typography from './typography';

export default {
  dark: createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#031740',
        paper: '#031740',
      },
      text: {
        primary: 'rgba(255, 255, 255, 0.95)',
        secondary: 'rgba(255, 255, 255, 0.5)',
      },
      primary: {
        main: '#07B5F2',
        contrastText: 'rgb(235, 234, 239)',
      },
      divider: 'rgb(85, 89, 110)',
    },
    typography: typography,
  }),
  light: createTheme({
    palette: {
      mode: 'light',
      background: {
        paper: "#D5E5F2",
        default: "#D5E5F2",
      },
      text: {
        primary: 'rgb(30, 32, 34)',
        secondary: 'rgb(103, 119, 136)',
      },
      primary: {
        main: '#1B80B7',
        contrastText: 'rgb(235, 234, 239)',
      },
      divider: 'rgba(0, 0, 0, 0.12)',
    },
    typography: typography,
  }),
};
