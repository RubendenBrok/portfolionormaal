/** @jsx jsx */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'

import { globalCss, variables, colors } from '../styles/global'
import { Global, css, jsx } from '@emotion/react'

import { FaInstagram } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

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
        css={css`
          margin: 0 auto;
          max-width: ${variables.siteWidthDesktop};
          padding: 0px 1.0875rem 1.45rem;
          padding-top: 0;
        `}
      >
        <main>{children}</main>
        <footer
          css={css`
            margin-top: 80px;
            font-size: 1rem;
            float: right;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          `}
        >
          <a
            href="INSTAGRAM LINK"
            css={css`
              margin-bottom: 5px;
            `}
          >
            <b>Instagram - </b>
            <FaInstagram color={colors.textColor} className="react-icons" />
          </a>
          <a
            href="MAIL LNK"
            css={css`
              margin-bottom: 15px;
            `}
          >
            <b>Mail - </b>
            <FiMail color={colors.textColor} className="react-icons" />
          </a>
          <p
            css={css`
              font-size: 0.8rem;
              opacity: 0.6;
            `}
          >
            FOOTER MESSAGE
          </p>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
