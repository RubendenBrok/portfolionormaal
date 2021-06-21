/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { useState, useRef, useEffect } from 'react'
import ColoredBgText from '../../components/coloredbgtext'
import content, { colors } from '../content'

import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

export const ProfessionalWork = () => {
  return (
    <div className="container">
      <Zoom cascade duration={2000}>
        <h1>Professional Work</h1>
      </Zoom>
      <WorkItem
        myRole={
          <span>
            I built an interactive experience for the landing page of the
            website about the Golden Coach, the Dutch royal carriage. Here the
            user can explore the coach in 3D, and highlight specific points to
            get more info about them. My task was to realize the design by
            Verve, and integrate it into the Gatsby / React website already
            built by Luuk Schipperheyn, and to rework the initial design to also
            work for mobile screen sizes.
          </span>
        }
      ></WorkItem>
    </div>
  )
}

const WorkItem = ({ img, myRole, children }: any) => {
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <img src={img} />
      <div
        css={css`
          width: 100%;
          display: flex;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            width: 45%;
          `}
        >
          <ColoredBgText
            bgColor={colors.white}
            textColor={colors.black}
            text="My Role"
            animated={false}
            fontSize="3rem"
            rounded
          />
          <span
            css={css`
              display: block;
              margin-top: 2rem;
            `}
          >
            {myRole}
          </span>
        </div>
        <div
          css={css`
            width: 45%;
          `}
        >
          <ColoredBgText
            bgColor={colors.white}
            textColor={colors.black}
            text="Development"
            animated={false}
            fontSize="3rem"
            rounded
          />
          <span
            css={css`
              display: block;
              margin-top: 2rem;
            `}
          >
            {myRole}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalWork
