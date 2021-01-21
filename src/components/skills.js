import { Paper, Typography, Toolbar } from "@material-ui/core"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"

import React from "react"

function Skills() {
  return (
    <>
      <Toolbar>
        <Typography align="center" variant="h4" style={{ width: "100%" }}>
          💪Skills
        </Typography>
      </Toolbar>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">-FRONTEND-</TableCell>
              <TableCell align="center">-BACKEND-</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">Javascript / ES6</TableCell>
              <TableCell align="center">REST APIs</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">React</TableCell>
              <TableCell align="center">Firebase</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Redux</TableCell>
              <TableCell align="center">Node.js</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Gatsby</TableCell>
              <TableCell align="center">Express.js</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">HTML5 / CSS3</TableCell>
              <TableCell align="center">MongoDB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Sass / Scss</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Material UI</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Booststrap</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Skills
