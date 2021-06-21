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
    maxHeight: exp ? '9rem' : '1rem',
    config: { tension: 100, mass: 2 },
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
          font-size: 1.5rem;
        `}
      >
        {title}
      </b>
      <br />
      <animated.div
        css={css`
          position: relative;
          transition: opacity 0.3s;
        `}
        style={{ ...springStyle, opacity: exp ? 1 : 0 }}
      >
        <div
          css={css`
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            padding: 1rem;
            margin-top: 0.5rem;
            pointer-events: ${exp ? 'auto' : 'none'};
          `}
        >
          {text}
        </div>
      </animated.div>
    </li>
  )
}

export default ExpandingListItem
