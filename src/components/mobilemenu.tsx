/** @jsx jsx */

import { HiMenu, HiMenuAlt2 } from 'react-icons/hi'
import { Link } from 'gatsby'

import { GrClose } from 'react-icons/gr'
import { globalCss, variables, colors } from '../styles/global'
import { Global, css, jsx } from '@emotion/react'
import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  const styles = useSpring({
    height: open ? '400px' : '0px',
    borderColor: open ? colors.textColor : colors.backgroundColor,
  })

  const navStyles = useSpring({
    height: open ? '400px' : '0px',
  })

  return (
    <div
      css={css`
        ${variables.desktop} {
          display: none;
        }
      `}
    >
      <animated.div
        style={styles}
        css={css`
          position: fixed;
          top: 10px;
          right: 10px;
          background-color: ${colors.backgroundColor};
          width: calc(100vw - 20px);
          border-radius: 20px;
          border-width: 1px;
          border-style: solid;
          z-index: 5;
        `}
      >
        {open && (
          <animated.nav
            style={navStyles}
            css={css`
              display: flex;

              flex-direction: column;
              justify-content: space-around;
            `}
          >
            <Link to="/" className="navLinkMobile">
              Home
            </Link>
            <Link to="/portfolio" className="navLinkMobile">
              Portfolio
            </Link>
            <Link to="/poezie" className="navLinkMobile">
              Poëzie
            </Link>
            <Link to="/about" className="navLinkMobile">
              Over mij
            </Link>
            <Link to="" className="navLinkMobile">
              Shop
            </Link>
          </animated.nav>
        )}
      </animated.div>
      <div
        css={css`
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 10;

          background-color: ${colors.backgroundColor};

          &:hover {
            cursor: pointer;
          }
        `}
        role="button"
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <HiMenuAlt2
            color={colors.textColor}
            css={css`
              width: 45px;
              height: 45px;
            `}
          />
        ) : (
          <GrClose
            color={colors.textColor}
            css={css`
              width: 45px;
              height: 45px;
            `}
          />
        )}
      </div>
    </div>
  )
}
