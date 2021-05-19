/** @jsx jsx */

import { css, jsx } from '@emotion/react'

import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { globalCss, variables, colors } from '../styles/global'

const IndexPage = () => (
  <div
    css={css`
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      color: ${colors.textColor};
      background-color: ${colors.backgroundColor};
    `}
  >
    <SEO title="Home" />
    <div
      css={css`
        position: absolute;
        width: 50%;
        left: 25%;
        ${variables.mobile} {
          width: 100%;
          left: 0;
        }
        top: 30%;
        text-align: center;
      `}
    >
      <h1>Marjan de Ridder</h1>
      <nav
        css={css`
          margin: auto;
          width: 70%;
          display: flex;
          justify-content: space-around;
        `}
      >
        <Link to="/portfolio/">Portfolio</Link>
        <Link to="/poezie/">Poëzie</Link>
        <Link to="/portfolio/">Shop</Link>
      </nav>
    </div>
  </div>
)

export default IndexPage
