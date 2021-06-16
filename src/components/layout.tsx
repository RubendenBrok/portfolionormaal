/** @jsx jsx */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { BsChevronCompactDown } from 'react-icons/bs'

import Header from './header'

import { variables } from '../styles/global'
import { Global, css, jsx } from '@emotion/react'

import { FaInstagram } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

type layoutProps = {
  children: React.ReactNode
  textColor: string
  bgColor: string
  accentColor1: string
  accentColor2: string
  bgAngle: number
  clipArr: number[]
  clipOpacity: number
  atDivision: number
}

const Layout = ({
  children,
  textColor,
  bgColor,
  accentColor1,
  accentColor2,
  bgAngle,
  clipArr,
  clipOpacity,
  atDivision,
}: layoutProps) => {
  console.log(clipArr)
  return (
    <div
      css={css`
        background-color: ${bgColor};

        color: ${textColor};
      `}
    >
      <Global styles={css``} />
      {/*
      <div
        css={css`
          width: 30%;
        `}
      >
        <Header />
      </div>
      */}
      <div
        css={css`
          margin: 0 auto;
          width: 100%;
          padding: 0;
        `}
      >
        {/* <div
          className={`container`}
          css={css`
            position: fixed;
            left: 0;
            top: 0;
            background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
          `}
        ></div> */}

        <main
          css={css`
            width: 80%;
            margin: auto;
            ${variables.mobile} {
              width: 90%;
            }
          `}
        >
          {children}
          <BsChevronCompactDown
            color={textColor}
            css={css`
              position: fixed;
              opacity: 0.1;
              transition: opacity 0.3s;
              left: 50%;
              bottom: 3%;
              width: 100px;
              height: 100px;
              transform: translateX(-50%) scaleX(1.4);
              &:hover {
                opacity: 0.8;
                cursor: pointer;
              }
            `}
          />
        </main>
        <footer
          css={css`
            margin-top: 80px;
            font-size: 1rem;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          `}
        >
          <a
            href="INSTAGRAM LINK"
            css={css`
              margin-bottom: 5px;
            `}
          >
            <b>Instagram - </b>
            <FaInstagram color="var(--textColor)" className="react-icons" />
          </a>
          <a
            href="MAIL LNK"
            css={css`
              margin-bottom: 15px;
            `}
          >
            <b>Mail - </b>
            <FiMail color="var(--textColor)" className="react-icons" />
          </a>
          <p
            css={css`
              font-size: 0.8rem;
              opacity: 0.6;
            `}
          >
            FOOTER MESSAGE
          </p>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
