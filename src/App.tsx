import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import ShowCase from "./components/ShowCase/ShowCase";
import { theme } from "./Theme";

const App = () => {
  return (
    <div dir="rtl">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <ShowCase />
      </ThemeProvider>
    </div>
  );
};

export default App;
