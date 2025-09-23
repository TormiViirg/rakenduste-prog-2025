import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import { createTheme, ThemeProvider } from "@mui/material"
import './index.css'
import App from './App.tsx'

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#282d29",
      light: "#353c3a",
      dark: "#1e211d",
      contrastText: "#dcd4e3",
    },
    secondary: {
      main: "#586266",
      light: "#707a81",
      dark: "#444e4e",
      contrastText: "#dcd4e3",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
    background: {
      default: "#dcd4e3", 
      paper: "#b2b2c0",      
    },
    text: {
      primary: "#1e211d",
      secondary: "#dcd4e3",
    },
  },
  typography: {
    fontFamily: "Helvetica",
    h1: { fontSize: "3rem", fontWeight: 700 },
    h2: { fontSize: "2.25rem", fontWeight: 600 },
    h3: { fontSize: "1.75rem", fontWeight: 600 },
    body1: { fontSize: "1rem" },
    body2: { fontSize: "0.875rem" },
    button: { textTransform: "none" },
  },
  spacing: 8,
  shape: {
    borderRadius: 12, 
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          paddingLeft: 16,
          paddingRight: 16,
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        },
      },
    },
  }
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>
);

