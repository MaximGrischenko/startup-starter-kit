import { graphql } from 'gatsby'
import React from 'react'
import Hero from '../containers/Hero'
import Layout from '../containers/Layout'
import SiteNav from '../containers/SiteNav'
import { ThemeContext } from '../contexts'

const IndexPage = ({ data }) => (
  <ThemeContext.Provider value={data.site.siteMetadata.theme}>
    <Layout>
      <SiteNav />

      <Hero
        headline="My awesome headline that explains the whole shebang"
        intro={
          <>
            <p>My awesome intro that explains the whole shebang.</p>
          </>
        }
      />
    </Layout>
  </ThemeContext.Provider>
)

export default IndexPage

export const query = graphql`
  {
    site {
      siteMetadata {
        theme {
          background
          color
        }
      }
    }
  }
`
