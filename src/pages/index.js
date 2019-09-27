import React from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"

import FullPage from "../components/fullpage"
import { theme } from "../assets/styles/cssVariables"

const IndexPage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Sean's Website</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto|Space+Mono&display=swap"
        rel="stylesheet"
      ></link>
      <script
        src="https://kit.fontawesome.com/a9a21b29b4.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
    <ThemeProvider theme={theme}>
      <FullPage
        name="Sean Mowrey"
        words={[
          "develop",
          "create",
          "play hockey",
          "volunteer",
          "eat sushi",
          "learn",
          "sleep",
          "build lego",
          "hike",
        ]}
      />
    </ThemeProvider>
  </div>
)

export default IndexPage
