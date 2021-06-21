/** @jsx jsx */

import { css, jsx } from '@emotion/react'

import React from 'react'
import Zoom from 'react-reveal/Zoom'

export const Contact = () => {
  return (
    <div
      className="container"
      css={css`
        height: 101vh;
      `}
    >
      <Zoom cascade duration={2000}>
        <h1>CONTACT</h1>
      </Zoom>
      <p>Wauw wat een mooie site</p>
    </div>
  )
}

export default Contact
