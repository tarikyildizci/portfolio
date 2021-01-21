import React from "react"
import {
  Drawer as CustomDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@material-ui/core"

import GitHubIcon from "@material-ui/icons/GitHub"
import GetAppIcon from "@material-ui/icons/GetApp"

function Drawer({ open, setOpen }) {
  const CloseDrawer = () => {
    setOpen(false)
  }

  return (
    <CustomDrawer
      open={open}
      onClose={() => {
        setOpen(false)
      }}
      anchor="top"
    >
      <div onClick={CloseDrawer}>
        <List component="nav">
          <ListItem
            component={Link}
            divider
            href="https://www.github.com/tarikyildizci"
            target="_blank"
          >
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="Github" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <GetAppIcon />
            </ListItemIcon>
            <ListItemText primary="Resume" />
          </ListItem>
        </List>
      </div>
    </CustomDrawer>
  )
}

export default Drawer
