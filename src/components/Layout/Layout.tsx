import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "../Header/Header"
import { Nav } from '../Nav/Nav'
import "./Layout.css"

const Layout = ({ pageContext, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <Nav model={pageContext.model} page={pageContext.page}/>
          <main>{children}</main>
        </div>
      </>
    )}
  />
)

export default Layout
