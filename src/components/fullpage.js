import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"

import Layout from "../components/layout"
import ChildLayout from "../components/childLayout"
import Title from "../components/title"
import About from "../components/about"
import ExperienceSection from "./experienceSection"

const fullpageOptions = {
  responsiveWidth: 738,
  responsiveHeight: 500,
}
const FullPage = props => (
  <ReactFullpage
    {...props}
    {...fullpageOptions}
    render={({ state, fullpageApi }) => {
      return (
        <div id="fullpage-wrapper">
          <div className="section section1">
            <Layout>
              <Title
                name={props.name}
                word={props.words}
                but={() => fullpageApi.moveSectionDown()}
              />
            </Layout>
          </div>
          <div className="section fp-auto-height-responsive">
            <ChildLayout>
              <About />
            </ChildLayout>
          </div>
          <div className="section fp-auto-height-responsive">
            <ChildLayout>
              <ExperienceSection />
            </ChildLayout>
          </div>
        </div>
      )
    }}
  />
)

export default FullPage
