/** @jsx jsx */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'

import { globalCss } from '../styles/global'
import { Global, css, jsx } from '@emotion/react'
import { glob } from 'glob'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsSite {
        edges {
          node {
            globalSeo {
              siteName
              titleSuffix
            }
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <div>
      <Global
        styles={css`
          ${globalCss}
        `}
      />
      <Header
        siteTitle={data.allDatoCmsSite.edges[0].node.globalSeo.siteName}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>© Marjan de Ridder, All rights reverved</footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
