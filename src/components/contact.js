import React from "react"
import { Typography, Toolbar, Link, Container } from "@material-ui/core"

function Contact() {
  return (
    <>
      <Typography variant="h2">Let's get in touch.</Typography>
      <Toolbar />
      <Container maxWidth="md">
        <Typography variant="h6">
          {"email: "}
          <Link href="mailto:tarikyyildizci@gmail.com">
            tarikyyildizci@gmail.com
          </Link>
        </Typography>
        <Typography variant="h6">
          {"linkedin: "}
          <Link
            href="https://www.linkedin.com/in/tarikyildizci"
            target="_blank"
          >
            linkedin.com/in/tarikyildizci
          </Link>
        </Typography>
        <Typography variant="h6">
          {"github: "}
          <Link href="https://www.github.com/tarikyildizci" target="_blank">
            github.com/tarikyildizci
          </Link>
        </Typography>
      </Container>
    </>
  )
}

export default Contact
