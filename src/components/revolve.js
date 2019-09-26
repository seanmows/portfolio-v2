import React from "react"
import styled from "styled-components"

const DoWord = styled.span`
  color: red;
`
class Revolve extends React.Component {
  constructor(props) {
    super(props)
    this.cw = 0
    this.state = { word: this.props.word[0], words: this.props.word }
    this.changeWord = this.changeWord.bind(this)
  }
  componentDidMount() {
    setInterval(this.changeWord, 2000)
  }
  changeWord() {
    this.cw = (this.cw + 1) % this.props.word.length
    this.setState({ word: this.props.word[this.cw] })
  }

  render() {
    return <DoWord>{this.state.word}</DoWord>
  }
}
export default Revolve
