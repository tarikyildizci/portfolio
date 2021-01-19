import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import HomeIcon from "@material-ui/icons/Home"
import GitHubIcon from "@material-ui/icons/GitHub"
import FolderIcon from "@material-ui/icons/Folder"
import GetAppIcon from "@material-ui/icons/GetApp"
import MailIcon from "@material-ui/icons/Mail"

const styles = {
  verticalAlign: "middle",
  display: "inline-flex",
}

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const HandleSelect = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <Grid
      item
      xs={12}
      container
      direction="column"
      style={{ background: "#F4F4F4", height: "100%" }}
      justify="center"
    >
      <Grid item>
        <List component="nav">
          <ListItem
            selected={selectedIndex === -1}
            onClick={event => HandleSelect(event, -1)}
            button
            divider
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            selected={selectedIndex === 0}
            onClick={event => HandleSelect(event, 0)}
            button
            divider
          >
            <ListItemIcon>
              <GetAppIcon />
            </ListItemIcon>
            <ListItemText primary="Resumé" />
          </ListItem>
          <ListItem
            selected={selectedIndex === 1}
            onClick={event => HandleSelect(event, 1)}
            button
            divider
          >
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="Github" />
          </ListItem>
          <ListItem
            selected={selectedIndex === 2}
            onClick={event => HandleSelect(event, 2)}
            button
            divider
          >
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem
            selected={selectedIndex === 3}
            onClick={event => HandleSelect(event, 3)}
            button
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

export default Sidebar
