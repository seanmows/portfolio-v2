import React from "react"
import styled from "styled-components"

import heroImg from "../assets/images/headshot.jpg"

const Slate = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: "Roboto", sans-serif;
  justify-content: center;
  padding: 5px;
`
const TitleText = styled.h3`
  color: #f44336;
  font-size: 2em;
  @media (max-width: ${props => props.theme.small}) {
    padding-top: 40px;
  }
`
const Text = styled.div`
  color: black;
  font-size: 1em;
  margin: 5px;
  width: 75%;

  a {
    color: #f44336;
    font-weight: 100;
    text-decoration: none;
  }
  a:hover{
    text-decoration: underline;
  }
  @media (max-width: ${props => props.theme.medium}) {
    width: 100%;
  }
`
const HeroImg = styled.img`
  max-height: 20%;
  max-width: 20%;
  width: auto;
  height: auto;
  margin: 60px 0;
  -webkit-filter: blur(0);
  filter: blur(0);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  box-shadow: 10px 10px 5px #ccc;

  :hover {
    -webkit-filter: blur(2px);
    filter: blur(2px);
  }
  @media (max-width: ${props => props.theme.medium}) {
    max-height: 200px;
    max-width: 200px;
    width: auto;
    height: auto;
  }
`
const About = () => (
  <Slate>
    <Text>
      <TitleText>About Me.</TitleText>Hi! I am a 2B Computer Engineering student
      at the <a href="https://uwaterloo.ca/">University of Waterloo</a>. I love
      building things that other people can use. I develop/build tools,
      websites, games, apps, and lego in the most efficient, user friendly, and
      modern ways. <br />
      <br /> I am currently an Undergraduate Research Assistant at the{" "}
      <a href="https://ov-research.uwaterloo.ca/NLP_lab.html">
        Natural Language Processing Lab
      </a>{" "}
      affiliated with the{" "}
      <a href="https://uwaterloo.ca/artificial-intelligence-institute/">
        Waterloo.AI
      </a>{" "}
      institute at the University of Waterloo. I have had 3 coops so far with my
      last one being at EA Vancouver on the User Research team. In my spare time
      you can find me playing/watching hockey or eating sushi.
    </Text>
    <HeroImg src={heroImg} />
  </Slate>
)

export default About
