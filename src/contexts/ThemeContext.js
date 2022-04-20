import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

const AppThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

export default AppThemeProvider;
