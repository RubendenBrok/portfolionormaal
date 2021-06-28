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
  const [exp, setExp] = useState(false)

  const [pos, setPos] = useState({ x: 0, y: 0 })

  const springStyle = useSpring({
    maxHeight: exp ? '9rem' : '1rem',
    config: { tension: 100, mass: 2 },
  })

  const enter = (e: any, exp: boolean) => {
    setExp(exp)
    const newPos = updatePos(e)
    setPos(newPos)
  }

  const updatePos = (e: any) => {
    const rect = e.target.getBoundingClientRect()
    const newPos = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    if (newPos.x + rect.left > window.innerWidth * 0.8 - 40) {
      newPos.x = window.innerWidth * 0.8 - rect.left - 40
    }
    return newPos
  }

  return (
    <li
      css={css`
        position: relative;
        transition: transform 0.4s;
        list-style: none;
        margin-left: -1rem;

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
          const newPos = updatePos(e)
          setPos(newPos)
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
          id="hoverText"
          css={css`
            border-radius: 10px;
            padding: 1rem;
            margin-top: 0.5rem;
            pointer-events: ${exp ? 'auto' : 'none'};
            width: 40vw;
            position: absolute;
            transform: translateX(-50%);
            border: 1px solid ${textColor};
            z-index: 9999;
            @keyframes expand {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            animation: expand 0.5s forwards;
          `}
          style={{
            left: pos.x,
            top: pos.y,
            color: textColor,
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
