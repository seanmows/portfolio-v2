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
  background-image: url(${backgroundImage});
  background-size: cover;
  border: 50px solid #fff;
  height: 100vh;
  left: 0;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100vw;

  @media (max-width: ${props => props.theme.medium}) {
    border: none;
  }
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  position: relative;
  top: 50%;
  transform: perspective(1px) translateY(-50%);

  @media (max-width: ${props => props.theme.medium}) {
    padding: 0px 0.7rem 0.7rem;
  }
`

const Layout = ({ children }) => {
  return (
    <PageEdge>
      {/*<Header siteTitle={data.site.siteMetadata.title} */}
      <Container>
        <main>{children}</main>
        {/*<footer>
              © {new Date().getFullYear()}, Built with <3 by Sean
              {` `}
            </footer>*/}
      </Container>
    </PageEdge>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
