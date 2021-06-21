/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import React, { useState } from 'react'

import useResizeAware from 'react-resize-aware'

import { animated, useSpring } from 'react-spring'

type listProps = {
  title: string
  text: string
}

export const ExpandingListItem = ({ title, text }: listProps) => {
  const [exp, setExp] = useState(false)

  const springStyle = useSpring({
    opacity: exp ? 1 : 0,
    height: exp ? '6rem' : '0rem',
    config: { tension: 200, mass: 2 },
  })

  return (
    <li
      onMouseEnter={() => setExp(true)}
      onMouseLeave={() => setExp(false)}
      onFocus={() => setExp(true)}
      onBlur={() => setExp(false)}
    >
      <b
        css={css`
          font-size: 1.3rem;
        `}
      >
        {title}
      </b>
      <br />
      <animated.div
        css={css`
          position: relative;
        `}
        style={springStyle}
      >
        {text}
      </animated.div>
    </li>
  )
}

export default ExpandingListItem
