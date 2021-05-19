/** @jsx jsx */

import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { css, jsx } from '@emotion/react'
import { MobileMenu } from './mobilemenu'

import { colors, variables } from '../styles/global'

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header css={css``}>
    <div
      css={css`
        display: flex;
        margin: 0 auto;
        width: ${variables.siteWidthDesktop};
        padding: 20px 0 20px 0;
        justify-content: flex-end;
      `}
    >
      <MobileMenu />
      <nav
        css={css`
          ${variables.mobile} {
            display: none;
          }
          width: 100%;
        `}
      >
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/portfolio" className="navLink">
          Portfolio
        </Link>
        <Link to="/poezie" className="navLink">
          Poëzie
        </Link>
        <Link to="/about" className="navLink">
          Over mij
        </Link>
        <Link to="" className="navLink">
          Shop
        </Link>
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
