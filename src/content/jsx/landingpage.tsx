/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'

import ColoredBgText from '../../components/coloredbgtext'

import RubberBand from 'react-reveal/RubberBand'

import { variables } from '../../styles/global'

import content, { colors } from '../content'

export const LandingPage = () => {
  const [mobile, setMobile] = useState(false)

  const handleResize = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < variables.breakPoint) {
        setMobile(true)
      }
      if (window.innerWidth >= variables.breakPoint) {
        setMobile(false)
      }
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < variables.breakPoint) {
        setMobile(true)
      }
      window.addEventListener('resize', handleResize)
    }

    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
      {!mobile ? (
        <div>
          <Fade ssrReveal duration={2000} delay={0} cascade>
            <div className="introP">Hi, I am</div>
          </Fade>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              align-items: center;
            `}
          >
            <Flip ssrReveal top cascade duration={2000} delay={400}>
              <h1 className="titleBig">Ruben&nbsp;</h1>
            </Flip>
            <Flip ssrReveal top cascade duration={2000} delay={600}>
              <h1
                css={css`
                  margin-top: 0rem;
                `}
                className="titleSmall"
              >
                den
              </h1>
              <h1 className="titleBig">&nbsp;</h1>
            </Flip>
            <Flip ssrReveal top cascade duration={2000} delay={800}>
              <h1 className="titleBig">Brok</h1>
            </Flip>
          </div>
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
                fontSize="2.5rem"
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
      ) : (
        <div
          css={css`
            height: 80vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          `}
        >
          <div>
            <Fade ssrReveal duration={2000} delay={0} cascade>
              <div className="introP">Hi, I am</div>
            </Fade>
          </div>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              flex-direction: column;
              display: inline-block;
              margin-bottom: 5vh;
            `}
          >
            <Flip ssrReveal top cascade duration={2000} delay={400}>
              <h1 className="titleBig">Ruben&nbsp;</h1>
            </Flip>
            <Flip ssrReveal top cascade duration={2000} delay={600}>
              <h1 className="titleSmall">den</h1>
            </Flip>
            <Flip ssrReveal top cascade duration={2000} delay={800}>
              <h1 className="titleBig">Brok</h1>
            </Flip>
          </div>
          <div>
            <Fade ssrReveal duration={2000} delay={1000}>
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  flex-wrap: wrap;
                  margin-top: 1rem;
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
          </div>
          <div>
            <Fade ssrReveal duration={2000} delay={1800} cascade>
              <div
                css={css`
                  display: flex;
                  text-align: right;
                  align-items: center;
                  flex-wrap: wrap;
                  justify-content: flex-end;
                  margin-top: 2rem;
                  font-size: 2rem;
                `}
              >
                <div className="introFlexItem">Who</div>
                <ColoredBgText
                  rounded
                  animated
                  text="LOVES"
                  fontSize="2.5rem"
                  bgColor={content[0].accentColor2}
                  textColor={colors.white}
                  delay={2200}
                />
                <div className="introFlexItem">to create</div>
                <div className="introFlexItem">playful online experiences</div>
              </div>
            </Fade>
          </div>
        </div>
      )}
    </div>
  )
}

export default LandingPage
