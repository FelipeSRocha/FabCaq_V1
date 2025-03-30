// styles/theme.ts
import { createTheme } from "@mui/material/styles";
import colors from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      light: colors.primary[100],
      main: colors.primary[500],
      dark: colors.primary[900],
    },
    secondary: {
      light: colors.secondary[100],
      main: colors.secondary[500],
      dark: colors.secondary[700],
    },
    success: {
      light: colors.accent[100],
      main: colors.accent[500],
      dark: colors.accent[700],
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
    action: {
      hover: colors.primary[100],
      selected: colors.primary[300],
    },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
  },
});

export default theme;
