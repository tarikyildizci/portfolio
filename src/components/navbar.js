import React, { useState } from "react"
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Hidden,
  Link,
  Button,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { Link as ScrollLink } from "gatsby"
import Drawer from "./drawer"

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <AppBar color="default" position="sticky" spacing={2}>
      <Toolbar>
        <Hidden xsDown>
          <Grid container justify="center">
            <Grid item sm={2}>
              <ScrollLink
                to="/#home"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Link variant="h6" color="default">
                  Home
                </Link>
              </ScrollLink>
            </Grid>

            <Grid item sm={2}>
              <ScrollLink
                to="/#projects"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Link variant="h6" color="default">
                  Projects
                </Link>
              </ScrollLink>
            </Grid>

            <Grid item sm={2}>
              <Link
                variant="h6"
                href="https://www.github.com/tarikyildizci"
                target="_blank"
                color="inherit"
              >
                Github
              </Link>
            </Grid>

            <Grid item sm={2}>
              <Link variant="h6" href="#resume" color="inherit">
                Resume
              </Link>
            </Grid>

            <Grid item sm={2}>
              <ScrollLink
                to="/#contact"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Link variant="h6" color="default">
                  Contact
                </Link>
              </ScrollLink>
            </Grid>
          </Grid>
        </Hidden>

        <Hidden smUp>
          <Grid container alignItems="center">
            <Grid item xs={1}>
              <Drawer open={open} setOpen={setOpen} />
              <IconButton
                onClick={() => {
                  setOpen(true)
                }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={3}>
              <Button
                href="#contact"
                size="small"
                variant="contained"
                color="primary"
              >
                Contact
              </Button>
            </Grid>
          </Grid>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
