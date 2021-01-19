import React from "react"
import Grid from "@material-ui/core/Grid"
import skills from "../assets/text-data/skills.json"

const styles = {
  height: "100vh",
  minHeight: "670px",
  width: "100%",
  background: "#1A1C20",
  color: "#F4F4F4",
  fontFamily: "Roboto Slab",
}
const stylesEx = {
  bigHeaderLeft: {
    fontFamily: "Alfa Slab One",
    color: "#F0A500",
    fontSize: "4rem",
    letterSpacing: "0.15rem",
    textAlign: "left",
  },
  bigHeaderCenter: {
    fontFamily: "Alfa Slab One",
    color: "#F0A500",
    fontSize: "4rem",
    letterSpacing: "0.15rem",
    textAlign: "center",
  },
  smallHeader: {
    fontSize: "2rem",
    textAlign: "left",
  },
  text: {
    fontSize: "1.3rem",
    textAlign: "left",
    color: "#B8B8B8",
    paddingTop: "1rem",
  },
}

const Landing = () => {
  return (
    <Grid style={styles} container align="center" justify="center">
      <Grid
        item
        xs={6}
        container
        direction="column"
        justify="center"
        align="center"
        style={{ paddingLeft: "3rem" }}
      >
        <Grid item>
          <h1 style={stylesEx.bigHeaderLeft}>Tarık Yusuf YILDIZCI</h1>
        </Grid>
        <Grid item>
          <p style={stylesEx.smallHeader}>Web Developer</p>
        </Grid>
        <Grid item>
          <p style={stylesEx.text}>
            Hey! I am a web developer based in Ankara / Turkey, mainly focusing
            on React and its libraries, I also use Firebase, Node.js and NoSQL
            databases for backend.
          </p>
        </Grid>
      </Grid>

      <Grid
        item
        xs={6}
        container
        direction="column"
        justify="center"
        align="center"
      >
        <Grid item>
          <h1 style={stylesEx.bigHeaderCenter}>Skills</h1>
        </Grid>
        <Grid item container justify="space-around">
          <Grid item>
            <p style={stylesEx.smallHeader}>Frontend</p>
          </Grid>
          <Grid item>
            <p style={stylesEx.smallHeader}>Backend</p>
          </Grid>
        </Grid>
        <Grid item container justify="space-around" direction="row">
          <Grid item>
            <Grid item container direction="column">
              {skills.frontend.map(skill => {
                return (
                  <Grid key={skill} item>
                    <p style={stylesEx.text}>{skill}</p>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container direction="column">
              {skills.backend.map(skill => {
                return (
                  <Grid key={skill} item>
                    <p style={stylesEx.text}>{skill}</p>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Landing
