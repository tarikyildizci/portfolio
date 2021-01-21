import { Paper, Typography, Container, Link } from "@material-ui/core"
import React from "react"

function InfoCard({ emoji, title, body, subtitle, link }) {
  return (
    <Paper style={{ padding: "2rem" }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          style={{ marginBottom: "1rem" }}
        >
          {emoji}
          {title}
        </Typography>
        <Typography style={{ marginBottom: "1rem" }} variant="body1">
          {body}
        </Typography>
        {subtitle ? (
          <Link
            href={link}
            color="inherit"
            style={{ marginBottom: "1rem" }}
            variant="subtitle1"
          >
            {subtitle}
          </Link>
        ) : (
          ""
        )}
      </Container>
    </Paper>
  )
}

export default InfoCard
