/** @jsx jsx */

import { css, jsx } from '@emotion/react'

import React from 'react'
import Zoom from 'react-reveal/Zoom'

import { variables } from '../../styles/global'
import { colors } from '../content'

export const Contact = () => {
  const buttonStyle = `
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  color: ${colors.black};
  border: 2px solid ${colors.black};
  background-color: rgba(0,0,0,0);
  display: inline-block;
  margin-top: 2rem;
  font-weight: bold;
  transition: color, background-color 0.3s;
  &:hover {
    cursor: pointer;
    background-color: ${colors.black};
    color: ${colors.white};

  }
`
  return (
    <div
      className="container"
      css={css`
        padding-bottom: 10rem;
      `}
    >
      <Zoom cascade duration={2000}>
        <h1>CONTACT</h1>
      </Zoom>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 100%;
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
          <p
            css={css`
              font-size: 1.3rem;
            `}
          >
            Do you have a question or an idea? Feel free to contact me! I'm
            always looking for great people to work with!
          </p>

          <a
            css={css`
              user-select: text;
            `}
            href="mailto:ruben_b@hotmail.com"
          >
            <h4>EMAIL: ruben_b@hotmail.com</h4>
          </a>
          <a href="mailto:ruben_b@hotmail.com">
            <h4>CONTACT ME ON LINKEDIN</h4>
          </a>
          <a href="mailto:ruben_b@hotmail.com">
            <h4>CHECK OUT MY GITHUB</h4>
          </a>
        </div>
        <div
          css={css`
            width: 50%;
            ${variables.mobile} {
              width: 100%;
              margin-top: 3rem;
              padding-right: 1rem;
            }
          `}
        >
          <h4>CONTACT ME DIRECTLY:</h4>
          <form
            id="contactForm"
            css={css`
              margin-top: 1rem;
            `}
            name="contact"
            method="POST"
            data-netlify="true"
            action="/"
          >
            <div className="formDiv">
              <label htmlFor="Name" className="inputLabel">
                Name:
              </label>
              <input
                className="inputKlein"
                type="text"
                id="Name"
                name="Name"
                required
              />
            </div>
            <div className="formDiv">
              <label htmlFor="Email" className="inputLabel">
                Email:
              </label>
              <input
                className="inputKlein"
                type="email"
                id="Email"
                name="Email"
                required
              />
            </div>
            <div
              css={css`
                margin-top: 2rem;
              `}
            >
              <label htmlFor="Message" className="inputLabel">
                Message:
              </label>
              <textarea id="Message" name="Message" rows={5} wrap="physical" />
            </div>

            <div className="formDiv">
              <button
                type="submit"
                id="verstuur"
                className="submitButton"
                css={css`
                  ${buttonStyle}
                  &:hover {
                    cursor: pointer;
                  }
                `}
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
