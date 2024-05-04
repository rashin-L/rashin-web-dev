import { createTheme } from '@mui/material/styles';
import typography from './typography';

export default {
  dark: createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: 'rgb(60 96 113 )',
        paper: 'rgb(60 96 113 )',
      },
      text: {
        primary: 'rgba(255, 255, 255, 0.95)',
        secondary: 'rgba(255, 255, 255, 0.5)',
      },
      primary: {
        main: '#47D8E1',
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
        paper: "rgb(221 214 254 )",
        default: "rgb(221 214 254 )",
      },
      text: {
        primary: '#3C6071',
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
