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
import Pilates from "./pages/pilates";
import Akil from "./pages/Akil";
import Register from "./components/Register/Register";
import Banner from "./components/Banner/Banner";

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
            <Route path="/pilates" element={<Pilates />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/akil" element={<Akil />} />
            <Route path="/kayit" element={<Register />} />
            <Route path="/kayit" element={<Banner />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
