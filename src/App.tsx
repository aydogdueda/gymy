import { GlobalStyles } from "@/components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "@/components/styles/Theme";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Zumba from "./pages/Zumba";
import Testimonials from "./components/Testimonials/Testimonials";
import Membership from "./components/Membership/Membership";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/zumba" element={<Zumba />} />
            <Route path="/pilates" element={<Zumba />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
