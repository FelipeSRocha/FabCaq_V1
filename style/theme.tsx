import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#E1BAEA", // roxo claro
      main: "#643175", // roxo base
      dark: "#340643", // roxo escuro
    },
    secondary: {
      light: "#FFDDC2", // laranja claro
      main: "#E8822F", // laranja base
      dark: "#924f1a", // laranja escuro
    },
    success: {
      light: "#C9F3E3", // verde claro
      main: "#2EBD85", // verde base (success)
      dark: "#19915F", // verde escuro
    },
    text: {
      primary: "#1F1F1F", // texto principal
      secondary: "#5A5A5A", // texto secundário
    },
    action: {
      hover: "#E1BAEA", // hover roxo claro
      selected: "#e0c8ee", // roxo médio (usado em itens selecionados)
    },
    background: {
      default: "#fefbff", // fundo geral
      paper: "#FFFFFF", // fundo de cards/modais
    },
  },
});

export default theme;
