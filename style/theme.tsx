// styles/theme.ts
import { createTheme } from "@mui/material/styles";
import colors from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      light: colors.primary[300],
      main: colors.primary[500],
      dark: colors.primary[700],
    },
    secondary: {
      light: colors.secondary[300],
      main: colors.secondary[500],
      dark: colors.secondary[700],
    },
    success: {
      light: colors.accent[300],
      main: colors.accent[500],
      dark: colors.accent[700],
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
  },
});

export default theme;
