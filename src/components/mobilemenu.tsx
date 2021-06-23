/** @jsx jsx */

import { HiMenu, HiMenuAlt2 } from 'react-icons/hi'
import { Link } from 'gatsby'

import { GrClose } from 'react-icons/gr'
import { BsChevronDoubleRight } from 'react-icons/bs'
import { globalCss, variables, colors } from '../styles/global'
import { Global, css, jsx } from '@emotion/react'
import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'

type MobileMenu = any

export const MobileMenu = ({ textColor, bgColor }: MobileMenu) => {
  const [open, setOpen] = useState(false)

  const styles = useSpring({
    right: open ? '20px' : '-460px',
  })

  return (
    <div className="container" css={css``}>
      <animated.div
        style={{
          ...styles,
          backgroundColor: bgColor,
          color: textColor,
          borderLeft: `3px solid ${textColor}`,
          borderRight: `3px solid ${textColor}`,
          boxShadow: `-10px 0px ${bgColor}, 10px 0px ${bgColor}`,
        }}
        css={css`
          position: fixed;
          top: 0px;
          min-width: 300px;
          height: 100%;
          z-index: 5;
          ${variables.mobile} {
            width: calc(100% - 46px);
            min-width: 0;
          }
        `}
      >
        <nav
          css={css`
            display: flex;

            flex-direction: column;
            justify-content: space-around;
            margin-top: 4rem; ;
          `}
        >
          <HoverLink
            link="#Home"
            text="Home"
            bgColor={bgColor}
            textColor={textColor}
            setOpen={setOpen}
          />
          <HoverLink
            link="#AboutMe"
            text="About Me"
            bgColor={bgColor}
            textColor={textColor}
            setOpen={setOpen}
          />
          <HoverLink
            link="#PassionProjects"
            text="Passion Projects"
            bgColor={bgColor}
            textColor={textColor}
            setOpen={setOpen}
          />
          <HoverLink
            link="#ProfessionalWork"
            text="Professional Work"
            bgColor={bgColor}
            textColor={textColor}
            setOpen={setOpen}
          />
          <HoverLink
            link="#Contact"
            text="Contact"
            bgColor={bgColor}
            textColor={textColor}
            setOpen={setOpen}
          />
        </nav>
        <BsChevronDoubleRight
          color={textColor}
          css={css`
            width: 55px;
            height: 55px;
            position: absolute;
            top: 20px;
            left: 20px;
          `}
          role="button"
          onClick={() => {
            setOpen(!open)
          }}
        />
      </animated.div>
      <HiMenuAlt2
        color={bgColor}
        css={css`
          width: 55px;
          height: 55px;
          position: fixed;
          top: 20px;
          right: 20px;
        `}
        role="button"
        onClick={() => {
          setOpen(!open)
        }}
      />
    </div>
  )
}

const HoverLink = ({ link, text, textColor, bgColor, setOpen }: any) => {
  const [hovered, setHovered] = useState(false)

  const styles = useSpring({
    width: hovered ? 'calc(100% + 4rem)' : 'calc(0% + 0rem)',
    config: { tension: 300, clamp: true },
  })

  const color = useSpring({ color: hovered ? bgColor : textColor })

  return (
    <animated.a
      style={color}
      href={link}
      className="navLinkMobile"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setOpen(false)}
    >
      <animated.div
        className="hoverFill"
        style={{ ...styles, backgroundColor: textColor }}
      />
      <div>{text}</div>
      <div className="fillLine" style={{ backgroundColor: textColor }} />
    </animated.a>
  )
}

export default MobileMenu
