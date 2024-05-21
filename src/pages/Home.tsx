import React from "react";
import { GlobalStyles } from "@/components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "@/components/styles/Theme";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";

function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="container">
          <Navbar />
          <Hero />
        </div>
      </ThemeProvider>
    </>
  );
}

export default Home;
