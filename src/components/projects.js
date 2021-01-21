import React from "react"
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core"
import CodeIcon from "@material-ui/icons/Code"
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows"
import projects from "../assets/text-data/projects.json"
import test from "../assets/images/test.png"

function Projects() {
  const images = [test]
  return (
    <>
      <Typography variant="h2">Projects</Typography>
      <Typography variant="body1" style={{ marginBottom: "2rem" }}>
        Here are some of the projects I have been working on.
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Card style={{ maxHeight: "350px" }}>
              <CardActionArea href={project.demo} target="_blank">
                <CardMedia
                  component="img"
                  alt={project.title}
                  height="140"
                  image={images[0]}
                  title={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href={project.demo}
                  target="_blank"
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  <DesktopWindowsIcon fontSize="inherit" />
                  Visit Demo
                </Button>
                <Button
                  href={project.code}
                  target="_blank"
                  size="small"
                  variant="outlined"
                  color="default"
                >
                  <CodeIcon fontSize="inherit" />
                  Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Projects
