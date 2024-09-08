import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import { theme } from "./Theme";

const App = () => {
  return (
    <div dir="rtl">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
      </ThemeProvider>
    </div>
  );
};

export default App;
