import React from "react"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Toolbar from "@material-ui/core/Toolbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Skills from "../components/skills"
import Navbar from "../components/navbar"
import Landing from "../components/home"
import Footer from "../components/footer"
import Projects from "../components/projects"
import Contact from "../components/contact"

import { createMuiTheme, ThemeProvider } from "@material-ui/core"

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#CF7500",
    },
  },
  typography: {
    fontFamily: "Roboto Slab",
    h2: {
      fontFamily: "Alfa Slab One",
      color: "#F0A500",
    },
    body1: {
      color: "#B8B8B8",
    },
  },
})

export default function Home() {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Toolbar id="home" />
      <Container style={{ marginTop: "2rem" }} maxWidth="lg">
        <Grid container spacing={2} justify="center">
          <Landing />
          <Grid item xs={12} md={6}>
            <Skills />
          </Grid>

          <Toolbar id="projects" />

          <Grid item xs={12}>
            <Projects />
          </Grid>
          <Toolbar id="contact" />
          <Grid item xs={12}>
            <Contact />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}
