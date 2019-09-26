import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"

import Layout from "../components/layout"
import Title from "../components/title"
import About from "../components/about"
import ExperienceSection from "./experienceSection"

const FullPage = props => (
  <ReactFullpage
    {...props}
    responsiveWidth = {736}
    render={({ state, fullpageApi }) => {
      return (
        <div id="fullpage-wrapper">
          <Layout>
            <div className="section section1">
              <Title
                name={props.name}
                word={props.words}
                but={() => fullpageApi.moveSectionDown()}
              />
            </div>
            <div className="section">
              <About />
            </div>
            <div className="section">
              <ExperienceSection />
            </div>
          </Layout>
        </div>
      )
    }}
  />
)

export default FullPage
