import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import InfoCard from "./infoCard"

const aboutMe = {
  emoji: "🚀",
  title: "About Me",
  body:
    "Hey! I am a web developer mainly focusing on frontend technologies like React and Gatsby, and also some component libraries like Material UI and Semantic UI. I also use Firebase, Node.js and NoSQL databases like MongoDB and Cloud Firestore for backend.",
  subtitle: "Check out my projects below!",
  link: "#projects",
}

function Landing() {
  return (
    <Grid item xs={12} md={6} container spacing={1}>
      <Grid item>
        <Typography variant="h2" align="left">
          Tarık Yusuf
        </Typography>
        <Typography variant="h2" align="left">
          YILDIZCI
        </Typography>
        <Typography variant="h6" align="left">
          Web Developer
        </Typography>
      </Grid>
      <Grid item>
        <InfoCard
          emoji={aboutMe.emoji}
          title={aboutMe.title}
          body={aboutMe.body}
          subtitle={aboutMe.subtitle}
          link={aboutMe.link}
        />
      </Grid>
    </Grid>
  )
}

export default Landing
