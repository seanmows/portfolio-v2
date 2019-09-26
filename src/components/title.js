import React from "react"
import styled from "styled-components"
import Revolve from "./revolve"

const Slate = styled.div`
  text-shadow: 1px 1px 10px #848181;
`
const TitleText = styled.h1`
  color: white;
  font-size: 5em;

  @media (max-width: ${props => props.theme.large}) {
    font-size: 5em;
    text-align: center;
  }
  @media (max-width: ${props => props.theme.xsmall}) {
    font-size: 4em;
    text-align: center;
  }
`
const DoText = styled.h2`
  color: white;
  font-size: 2em;

  @media (max-width: ${props => props.theme.large}) {
    font-size: 2em;
    text-align: center;
  }
`
const Links = styled.div`
  display: flex;
  width: 460px;
  @media (max-width: ${props => props.theme.large}) {
    margin: 0 auto;
  }
  @media (max-width: ${props => props.theme.small}) {
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
  }
`
const Buttons = styled.div`
  padding: 5px 20px;
  @media (max-width: ${props => props.theme.small}) {
    padding: 5px 0;
    width: 70%;
  }
`
const TitleButton = styled.button`
  background-color: #ffffff;
  border: 0.1em solid #ffffff;
  border-radius: 0.12em;
  box-sizing: border-box;
  color: #000000;
  display: block;
  float: left;
  font-family: "Roboto", sans-serif;
  font-weight: 800;
  margin: 0 0.3em 0.3em 0;
  padding: 0.35em 1.2em;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s;

  :hover {
    background-color: rgba(255, 255, 255, 0);
    color: #ffffff;
  }
  @media (max-width: ${props => props.theme.small}) {
    width: 100%;
  }
`

const Icons = styled.div`
  font-size: 3rem;
  opacity: 1;

  i {
    color: white;
    padding: 0 20px;
  }
  @media (max-width: ${props => props.theme.small}) {
    text-align: center;
    width: 100%;
    i {
      font-size: 2.5rem;
      padding: 10px 15px;
    }
  }
`

const Title = ({ name, word, but }) => (
  <Slate>
    <TitleText>
      Hi there!
      <br /> I am {name}.
    </TitleText>
    <DoText>
      I like to... <Revolve word={word} color="red" />{" "}
    </DoText>
    <Links>
      <Buttons>
        <TitleButton onClick={but}>Learn more</TitleButton>
      </Buttons>
      <Icons>
        <a href="https://www.linkedin.com/in/smowrey/">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/seanmowz">
          <i class="fab fa-github"></i>
        </a>
        <a href="mailto:sean.mowrey@edu.uwaterloo.ca">
          <i class="fas fa-envelope"></i>
        </a>
      </Icons>
    </Links>
  </Slate>
)

export default Title
