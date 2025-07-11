import { createTheme } from '@mui/material/styles';
import typography from './typography';

export default {
  dark: createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#3a363e',
        paper: '#3a363e',
      },
      text: {
        primary: 'rgba(255, 255, 255, 0.95)',
        secondary: 'rgba(255, 255, 255, 0.5)',
      },
      primary: {
        main: '#864379',
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
        paper: "#dee0ec",
        default: "#dee0ec",
      },
      text: {
        primary: 'rgb(30, 32, 34)',
        secondary: 'rgb(103, 119, 136)',
      },
      primary: {
        main: '#3074bf',
        contrastText: 'rgb(235, 234, 239)',
      },
      divider: 'rgba(0, 0, 0, 0.12)',
    },
    typography: typography,
  }),
};
