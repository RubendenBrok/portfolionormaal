/** @jsx jsx */

import { css, jsx } from '@emotion/react'

import React, { useState, useEffect, useRef } from 'react'
import Zoom from 'react-reveal/Zoom'
import { variables } from '../../styles/global'
import content, { colors } from '../content'
import ColoredBgText from '../../components/coloredbgtext'
import Fade from 'react-reveal/Fade'

import { useSpring, animated } from 'react-spring'

import typescript from '../../images/logos/typescript.png'
import javascript from '../../images/logos/javascript.png'
import react from '../../images/logos/react.png'
import html from '../../images/logos/html.png'
import cssLogo from '../../images/logos/css.png'
import gatsby from '../../images/logos/gatsby.png'

import photoshop from '../../images/logos/photoshop.png'
import blender from '../../images/logos/blender.png'
import npm from '../../images/logos/npm.png'
import git from '../../images/logos/git.png'
import vscode from '../../images/logos/vscode.png'

export const AboutMe = () => {
  return (
    <div className="container" css={css``}>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <div>
          <Zoom cascade duration={1000}>
            <h1>About </h1>
          </Zoom>
        </div>
        <div>
          {' '}
          <Zoom cascade duration={1000}>
            <h1> Me</h1>
          </Zoom>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            width: 50%;
            ${variables.mobile} {
              width: 100%;
            }
          `}
        >
          <p>
            I am <b>Ruben den Brok</b>, a creative front-end developer and
            webdesigner. I love to create digital experiences that solidify your
            or your brands online presence, and make you stand out in the crowd.
            I mainly work with <b>React</b> and <b>Typescript</b>, in
            combination with Gatsby and NetlifyCMS, but I am always up to learn
            about new, awesome tools, frameworks and languages. Besides all
            sorts of computer stuff, I also love making music (as a producer and
            keyboard player) and skateboarding.
          </p>

          <p
            css={css`
              margin: 3rem 0;
              font-size: 1.3rem;
            `}
          >
            Want to work together?{' '}
            <a href="#Contact">
              <b>Feel free to contact me</b>
            </a>
            , I'm always looking for new people to work with!
          </p>

          <ColoredBgText
            bgColor={content[3].bgColor}
            textColor={content[3].textColor}
            text="Languages:"
            animated={false}
            fontSize="2rem"
            rounded
          />
          <div
            css={css`
              ${variables.mobile} {
                height: 1rem;
              }
            `}
          ></div>
          <div>
            <LogoText bgColor={content[3].bgColor} text="HTML" path={html} />
            <LogoText bgColor={content[3].bgColor} text="CSS" path={cssLogo} />
            <LogoText
              bgColor={content[3].bgColor}
              text="Javascript"
              path={javascript}
            />
            <LogoText
              bgColor={content[3].bgColor}
              text="Typescript"
              path={typescript}
            />
          </div>
          <ColoredBgText
            bgColor={content[3].bgColor}
            textColor={content[3].textColor}
            text="Frameworks / libraries:"
            animated={false}
            fontSize="2rem"
            rounded
          />
          <div
            css={css`
              ${variables.mobile} {
                height: 1rem;
              }
            `}
          ></div>
          <div>
            <LogoText bgColor={content[3].bgColor} text="React" path={react} />
            <LogoText
              bgColor={content[3].bgColor}
              text="Gatsby"
              path={gatsby}
            />
          </div>
          <ColoredBgText
            bgColor={content[3].bgColor}
            textColor={content[3].textColor}
            text="Programs:"
            animated={false}
            fontSize="2rem"
            rounded
          />
          <div
            css={css`
              ${variables.mobile} {
                height: 1rem;
              }
            `}
          ></div>
          <div>
            <LogoText
              bgColor={content[3].bgColor}
              text="Photoshop"
              path={photoshop}
            />
            <LogoText
              bgColor={content[3].bgColor}
              text="Blender"
              path={blender}
            />
            <LogoText bgColor={content[3].bgColor} text="NPM" path={npm} />
            <LogoText bgColor={content[3].bgColor} text="Git" path={git} />
          </div>
        </div>

        <div
          css={css`
            width: 40%;
            ${variables.mobile} {
              width: 100%;
              margin-top: 2rem;
            }
          `}
        >
          <ColoredBgText
            bgColor="rgba(255,255,255,0)"
            textColor={content[3].textColor}
            text="Strong Points:"
            animated={true}
            fontSize="4rem"
          />
          <Fade duration={2000} delay={300}>
            <div
              css={css`
                color: ${content[3].accentColor1};
                background-color: ${content[3].textColor};
                font-size: 1.2rem;
                padding: 10px 25px 10px 10px;
                border-radius: 10px;
                ${variables.mobile} {
                  font-size: 1rem;
                }
              `}
            >
              <ul>
                <li>
                  <b className="miniTitle">Creative Thinker</b> – I'm always
                  fast to come up with new ideas, and can adapt quickly to new
                  situations.
                </li>
                <li>
                  <b className="miniTitle">Quick learner</b> – I like to broaden
                  my horizons and explore new stuff.
                </li>
                <li>
                  <b className="miniTitle">Team player</b> – the whole is
                  greater than the sum of its parts; I love working with other
                  people and know how to put my own ego aside for the greater
                  good of a project.
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

type logoProps = {
  text: string
  path: string
  bgColor: string
}

function LogoText({ text, path, bgColor }: logoProps) {
  const [hovered, setHovered] = useState(false)

  const springProp = useSpring({
    transform: hovered ? 'scale(1.1)' : 'scale(1)',
    config: { tension: 800 },
  })

  return (
    <animated.div
      css={css`
        text-align: center;
        display: inline-block;
        position: relative;
        margin: 30px 0;
        width: 21%;
        max-width: 6rem;
        height: 4rem;
        ${variables.mobile} {
          margin: 5px 0;
        }
      `}
      style={springProp}
      onMouseEnter={() => {
        setHovered(true)
      }}
      onMouseLeave={() => {
        setHovered(false)
      }}
    >
      <img
        src={path}
        css={css`
          width: 4rem;
          height: 4rem;
          display: block;
          margin: auto;
          ${variables.mobile} {
            width: 3rem;
            height: 3rem;
          }
        `}
        alt={text}
      ></img>
      <a
        css={css`
          text-decoration: none;
          &:hover .overlay {
            opacity: 0.8;
          }
          &:hover .overlayText {
            opacity: 1;
          }
        `}
      >
        <animated.div
          className="overlay"
          css={css`
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            background-color: ${bgColor};
            height: 4rem;
            width: 4rem;
            opacity: 0;
            transition: opacity 0.3s;
          `}
        ></animated.div>
        <div
          className="overlayText"
          css={css`
            line-height: 4rem;
            text-align: center;
            position: absolute;
            opacity: 0;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            transition: opacity 0.3s;
          `}
        >
          {text}
        </div>
      </a>
    </animated.div>
  )
}

export default AboutMe
