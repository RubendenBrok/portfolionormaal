/** @jsx jsx */

import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { css, jsx } from '@emotion/react'

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
      <nav>
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/portfolio" className="navLink">
          Portfolio
        </Link>
        <Link to="poezie" className="navLink">
          Poëzie
        </Link>
        <Link to="/overmij" className="navLink">
          Over mij
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
