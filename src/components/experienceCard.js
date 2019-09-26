import React from "react"
import styled from "styled-components"

const Container = styled.div`
  flex-basis: calc(100% / 4);
  flex-grow: 1;
  font-family: "Roboto", sans-serif;
  padding: 5px;
  @media (max-width: ${props => props.theme.medium}) {
    flex-basis: 50%;
  }
  @media (max-width: ${props => props.theme.small}) {
    flex-basis: 100%;
  }
`
const Image = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
  height: 140px;
  overflow: hidden;
  transition: all 0.6s ease;
  width: 100%;
  -webkit-transition: all 0.6s ease;

  &:hover {
    box-shadow: 0px 5px 18px 0px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
`
const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  padding: 5px 5px;
`
const TimePeriod = styled.div`
  font-size: 0.7rem;
  padding: 0 5px;
  padding-bottom: 5px;
`
const Subtitle = styled.div`
  color: ${props => props.theme.greyColor};
  font-size: 0.75rem;
  font-weight: 100;
  line-height: 1.6em;
  padding: 0 5px;
`
class ExperienceUnit extends React.Component {
  render() {
    return (
      <Container>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <Image
            style={{
              backgroundImage: `url(${this.props.logo})`,
              backgroundColor: this.props.colour,
            }}
          ></Image>
        </a>
        <Title>{this.props.title}</Title>
        <TimePeriod>{this.props.timeperiod}</TimePeriod>
        <Subtitle>{this.props.subtitle}</Subtitle>
      </Container>
    )
  }
}

export default ExperienceUnit
