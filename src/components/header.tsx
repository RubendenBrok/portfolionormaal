/** @jsx jsx */

import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { css, jsx } from '@emotion/react'
import { MobileMenu } from './mobilemenu'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import { variables } from '../styles/global'

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header css={css``}>
    <div
      css={css`
        margin: 0 auto;
        width: 100%;
        position: fixed;
      `}
    >
      <MobileMenu />
      <nav
        css={css`
          ${variables.mobile} {
            display: none;
          }
          width: 100%;
          display: flex;
          flex-direction: column;
          padding-top: 100px;
        `}
      >
        <AnchorLink to="/#Home" className="navLink">
          Home
        </AnchorLink>
        <AnchorLink to="/#PassionProjects" className="navLink">
          Passion Projects
        </AnchorLink>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
