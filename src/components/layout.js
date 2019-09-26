/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import backgroundImage from "../assets/images/bg.jpg"
import "./layout.css"

const PageEdge = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  border: 50px solid #fff;
  background-image: url(${backgroundImage});
  background-size: cover;

  @media (max-width: ${props => props.theme.medium}) {
    border: none;
  }
`
const Border = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;

  @media (max-width: ${props => props.theme.medium}) {
    padding: 0px 0.7rem 0.7rem;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      {/*<Header siteTitle={data.site.siteMetadata.title} */}
      <PageEdge>
        <Border>
          <Container>
            <main>{children}</main>
            {/*<footer>
              © {new Date().getFullYear()}, Built with <3 by Sean
              {` `}
            </footer>*/}
          </Container>
        </Border>
      </PageEdge>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
