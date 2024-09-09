import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import ShowCase from "./components/ShowCase/ShowCase";
import Footer from "./components/Footer/Footer";
import { theme } from "./Theme";

const App = () => {
  return (
    <div dir="rtl">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <ShowCase />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
