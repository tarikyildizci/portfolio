import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import skills from "../assets/text-data/skills.json"

const styles = {
  wrapper: {
    height: "100vh",
    minHeight: "670px",
    width: "100%",
    background: "#1A1C20",
    color: "#F4F4F4",
    fontFamily: "Roboto Slab",
  },
  bigHeader: { fontFamily: "Alfa Slab One", color: "#F0A500" },
  smallHeader: { fontFamily: "Roboto Slab ", textDecoration: "underline" },
  text: {
    color: "#B8B8B8",
    fontFamily: "Roboto Slab",
  },
}

const Landing = () => {
  return (
    <Grid style={styles.wrapper} container align="center" justify="center">
      <Grid
        item
        xs={12}
        md={6}
        container
        direction="column"
        justify="center"
        align="center"
        style={{ paddingLeft: "3rem" }}
      >
        <Grid item>
          <Typography style={styles.bigHeader} variant="h1" align="left">
            Tarık Yusuf Yıldızcı
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            style={styles.smallHeader}
            variant="h4"
            align="left"
            gutterBottom
          >
            Web Developer
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={styles.text} variant="body1" align="left">
            Hey! I am a web developer based in Ankara / Turkey, mainly focusing
            on React and its libraries, I also use Firebase, Node.js and NoSQL
            databases for backend.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        container
        direction="column"
        justify="center"
        align="center"
      >
        <Grid item>
          <Typography style={styles.bigHeader} variant="h2" gutterBottom>
            Skills
          </Typography>
        </Grid>
        <Grid item container justify="space-around">
          <Grid item>
            <Typography variant="h4" style={styles.smallHeader} gutterBottom>
              Frontend
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" style={styles.smallHeader} gutterBottom>
              Backend
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify="space-around" direction="row">
          <Grid item>
            <Grid item container direction="column">
              {skills.frontend.map(skill => {
                return (
                  <Grid key={skill} item>
                    <Typography variant="body1" style={styles.text}>
                      *{skill}
                    </Typography>
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
                    <Typography variant="body1" style={styles.text}>
                      *{skill}
                    </Typography>
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
