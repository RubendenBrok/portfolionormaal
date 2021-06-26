/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import React, { useState } from 'react'

import { animated, useSpring } from 'react-spring'

type listProps = {
  title: string
  text: string
  bgColor: string
  textColor: string
}

export const ExpandingListItem = ({
  title,
  text,
  bgColor,
  textColor,
}: listProps) => {
  console.log(textColor)
  const [exp, setExp] = useState(false)

  const [pos, setPos] = useState({ x: 0, y: 0 })

  const springStyle = useSpring({
    maxHeight: exp ? '9rem' : '1rem',
    config: { tension: 100, mass: 2 },
  })

  const enter = (e: any, exp: boolean) => {
    const rect = e.target.getBoundingClientRect()
    const newPos = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    setExp(exp)
    setPos(newPos)
  }

  return (
    <li
      css={css`
        position: relative;
        transition: transform 0.4s;
        &:hover {
          transform: scale(1.05) translateX(2%);
        }
      `}
      onMouseOver={(e) => enter(e, true)}
      onMouseOut={(e) => enter(e, false)}
      onFocus={() => setExp(true)}
      onBlur={() => setExp(false)}
      onMouseMove={(e) => {
        if (exp) {
          const rect = e.target.getBoundingClientRect()
          setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        }
      }}
    >
      <b
        css={css`
          position: relative;
          font-size: 1.5rem;
          z-index: -999;
        `}
      >
        {title}
      </b>
      <br />
      {exp && (
        <div
          css={css`
            border-radius: 10px;
            padding: 1rem;
            margin-top: 0.5rem;
            pointer-events: ${exp ? 'auto' : 'none'};
            width: 40vw;
            position: absolute;
            transform: translateX(-50%);
            z-index: 9999;
            @keyframes expand {
              from {
                clip-path: polygon(50% 0, 50% 0, 50% 100%, 50% 100%);
              }
              to {
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
              }
            }
            animation: expand 0.5s forwards;
          `}
          style={{
            left: pos.x,
            top: pos.y,
            color: '#3a3a3a',
            backgroundColor: bgColor,
          }}
        >
          {text}
        </div>
      )}
    </li>
  )
}

export default ExpandingListItem
