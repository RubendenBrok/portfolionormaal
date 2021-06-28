/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { useState, useRef, useEffect } from 'react'
import ColoredBgText from '../../components/coloredbgtext'
import ExpandingTextBlock from '../../components/expandingtextblock'
import content, { colors } from '../content'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { variables } from '../../styles/global'

import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

export const ProfessionalWork = () => {
  const data = useStaticQuery(graphql`
    query {
      gkImg: file(relativePath: { eq: "gkss.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  return (
    <div
      className="container"
      css={css`
        padding-bottom: 0rem;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <div>
          <Zoom cascade duration={2000}>
            <h1>Professional</h1>
          </Zoom>
        </div>
        <div>
          <Zoom cascade duration={2000}>
            <h1> Work</h1>
          </Zoom>
        </div>
      </div>
      <WorkItem
        title="The Golden Coach"
        myRole={
          <div>
            <span>
              I built an <b>interactive experience</b> for the landing page of
              the website about the Golden Coach, the Dutch royal carriage. Here
              the user can <b>explore the coach in 3D</b>, and highlight
              specific points to get more info about them. My task was to
              realize the design by Verve, and integrate it into the Gatsby /
              React website already built by Luuk Schipperheyn, and to rework
              the initial design to also work for mobile screen sizes.
            </span>
            <h2
              css={css`
                margin-bottom: 0rem;
                font-size: 2.5rem;
                ${variables.mobile} {
                  font-size: 1.5rem;
                }
              `}
            >
              Website:
            </h2>
            <a href="https://www.luuk.computer/" target="blank">
              {' '}
              Luuk.Computer
            </a>{' '}
            /{' '}
            <a href="https://afdelingbuitengewonezaken.nl/" target="blank">
              Afdeling Buitengewone Zaken
            </a>
            <h2
              css={css`
                margin-bottom: 0rem;
                font-size: 2.5rem;
                ${variables.mobile} {
                  font-size: 1.5rem;
                }
              `}
            >
              Design / 3D-model:
            </h2>
            <a href="https://verveagency.com/" target="blank">
              Verve by Vruchtvlees
            </a>
          </div>
        }
        img={data.gkImg.childImageSharp.gatsbyImageData}
      >
        <ExpandingTextBlock
          bgColor={content[3].bgColor}
          buttonTextColor={colors.white}
          buttonBgColor={colors.black}
          shortText={
            <p
              css={css`
                margin-top: 0;
              `}
            >
              I quickly realized the optimal choice for this project would be to
              use <b>React-Three-Fiber</b>, a library that encapsulates the
              power of <b>Three.JS</b> in a declarative React environment. I
              started by making sure all the 3D-functionality worked properly
              when implemented in the already existing website.
            </p>
          }
        >
          <div>
            <p>
              I then integrated the 3D-Canvas in a higher-order React Component
              that would contain the whole interactive part and UI-logic.
              Normally 3D objects in React-Three-Fiber can trigger click-events,
              making interactivity very easy, but this didn't seem to work in
              Safari. But after finding a solution in which invisible
              HTML-elements were positioned at the correct screen coordinates
              corresponding to their respective points in 3D space the user
              could interact with the carriage in every browser.
            </p>
            <p>
              Now the interactivity was working, I could implement the UI-logic,
              and build the overlay screens that appear when the user clicks on
              one of the points on the carriage. Now that the bare-bones version
              of the project was up and running, I also started working on the
              mobile layout.
            </p>
            <p>
              Final touches included the transitions and animations, which were
              included in the original design. Although there were quite some
              steps to the transitions, the actual animations itself were quite
              simple, which made a straightforward implementation using
              CSS-transitions possible.
            </p>
          </div>
        </ExpandingTextBlock>
      </WorkItem>
    </div>
  )
}

type WorkItem = any

const WorkItem = ({ img, myRole, title, title2, children }: WorkItem) => {
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <div
        css={css`
          margin-bottom: -0.4rem;
        `}
      >
        <ColoredBgText
          bgColor={colors.white}
          textColor={colors.black}
          text={title}
          animated={false}
          fontSize="4rem"
          rounded
        />
      </div>
      <div
        css={css`
          margin-bottom: 3rem;
        `}
      >
        {title2 && (
          <ColoredBgText
            bgColor={colors.white}
            textColor={colors.black}
            text={title2}
            animated={false}
            fontSize="4rem"
            rounded
          />
        )}
      </div>
      <GatsbyImage image={img} alt="Gouden Koets" />
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 3rem;
        `}
      >
        <div
          css={css`
            width: 45%;
            ${variables.mobile} {
              width: 100%;
            }
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
            ${variables.mobile} {
              width: 100%;
              margin-top: 3rem;
            }
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
            {children}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalWork
