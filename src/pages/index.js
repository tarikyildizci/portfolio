import React from "react"
import "../normalize.css"
import Grid from "@material-ui/core/Grid"
import Landing from "../components/landing"
import Testing from "../components/testing"
import Sidebar from "../components/sidebar"

export default function Home() {
  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <Testing style={{ width: "100%" }} />
        </Grid>
      </Grid>

      {/* <Grid container>
        <Grid item xs={2} container>
          <Sidebar />
        </Grid>
        <Grid item xs={10} container>
          <Testing />
        </Grid>
      </Grid> */}
    </div>
  )
}
