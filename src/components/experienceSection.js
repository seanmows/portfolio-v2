import React from "react"
import ExperienceUnit from "./experienceCard"
import styled from "styled-components"

import torontoLogo from "../assets/images/experience/toronto.jpg"
import scentualsLogo from "../assets/images/experience/scentuals.jpg"
import CienaLogo from "../assets/images/experience/ciena.jpg"
import EALogo from "../assets/images/experience/ea.png"

const Container = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
const Title = styled.h2``
class ExperienceSection extends React.Component {
  render() {
    return (
      <div>
        <Title>Work Experience</Title>
        <Container>
          <ExperienceUnit
            logo={EALogo}
            colour="#FFFFFF"
            title="Electronic Arts"
            link="https://www.ea.com/"
            timeperiod="May 2019 - September 2019"
            subtitle="Developer on the User Research team building a Natural Language Processing Tool to analyze massive amounts of text in seconds."
          />
          <ExperienceUnit
            logo={CienaLogo}
            colour="#FFFFFF"
            title="Ciena"
            link="https://www.ciena.com/"
            timeperiod="September 2018 - January 2019"
            subtitle="Worked on next generation products, involved in data acquisition, board design, mechanical assemblies and software development."
          />
          <ExperienceUnit
            logo={torontoLogo}
            colour="#FFFFFF"
            title="Toronto Water"
            link="https://www.toronto.ca/services-payments/water-environment/"
            timeperiod="January 2018 - May 2018"
            subtitle="Worked in Capital Works Delivery, helping to manage multi-million dollar projects on water treatment or delivery infrastructure."
          />
          <ExperienceUnit
            logo={scentualsLogo}
            colour="#FFFFFF"
            title="Scentuals"
            link="https://www.scentuals.com/"
            timeperiod="June 2016- Present"
            subtitle="Developed E-commerce websites as well as worked on production line optimizing efficiency and commissioning automated machinery. "
          />
          {/*}
          <ExperienceUnit
            logo={burnabyLogo}
            colour='#403949'
            title='City of Burnaby'
            link='https://www.burnaby.ca/'
            timeperiod='July 2016 - July 2017'
    subtitle='Taught children and adults of all ages how to skate using leadership skills. Developed teaching plans and marking schemes.'
          />
    */}
        </Container>
      </div>
    )
  }
}

export default ExperienceSection
