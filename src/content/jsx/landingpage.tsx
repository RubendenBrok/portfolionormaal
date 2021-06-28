/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'

import ColoredBgText from '../../components/coloredbgtext'

import RubberBand from 'react-reveal/RubberBand'

import content, { colors } from '../content'

export const LandingPage = () => {
  return (
    <div
      className="container landingPage"
      css={css`
        padding-top: 6%;
        font-size: 2rem;
        min-height: 100vh;
        padding-top: 10%;
      `}
    >
      <Fade ssrReveal duration={2000} delay={0} cascade>
        <div className="introP">Hi, I am</div>
      </Fade>
      <Flip top cascade duration={2000} delay={400}>
        <h1>Ruben den Brok</h1>
      </Flip>
      <Fade ssrReveal duration={2000} delay={1000}>
        <div
          css={css`
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-size: 2rem;
            margin-bottom: 3%;
          `}
        >
          <div className="introFlexItem">A</div>
          <ColoredBgText
            rounded
            animated
            text="CREATIVE"
            fontSize="2.5rem"
            bgColor={content[0].accentColor1}
            textColor={colors.white}
            delay={1300}
          />
          <div className="introFlexItem">front-end developer</div>
        </div>
      </Fade>
      <Fade ssrReveal duration={2000} delay={1800} cascade>
        <div
          css={css`
            display: flex;
            text-align: right;
            align-items: center;
            justify-content: flex-end;
            font-size: 2rem;
          `}
        >
          <div className="introFlexItem">Who</div>
          <ColoredBgText
            rounded
            animated
            text="LOVES"
            fontSize="4rem"
            bgColor={content[0].accentColor2}
            textColor={colors.white}
            delay={2200}
          />
          <div className="introFlexItem">to create</div>
          <ColoredBgText
            rounded
            animated
            text="PLAYFUL ONLINE EXPERIENCES"
            bgColor={content[0].accentColor2}
            fontSize="2.5rem"
            textColor={colors.white}
            delay={2800}
          />
        </div>
      </Fade>
    </div>
  )
}

export default LandingPage
