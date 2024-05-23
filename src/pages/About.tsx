import Banner from '@/components/Banner/Banner'
import Benefits from '@/components/Benefits/Benefits'
import Footer from '@/components/Footer/Footer'
import Membership from '@/components/Membership/Membership'
import Navbar from '@/components/Navbar/Navbar'
import Testimonials from '@/components/Testimonials/Testimonials'
import { GlobalStyles } from '@/components/styles/Global'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from "@/components/styles/Theme";


function About() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <div className="container">
                    <Benefits />
                    <Banner />
                    <Membership />
                    <Testimonials />
                </div>
            </ThemeProvider>
        </>
    )
}

export default About