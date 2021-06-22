/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import React, { useState, useRef, useEffect } from 'react'

import { animated, useSpring } from 'react-spring'

type ExpandingTextBlock = {
  children: React.ReactNode
  shortText: React.ReactNode
  bgColor: string
  buttonBgColor: string
  buttonTextColor: string
}

const ExpandingTextBlock = ({
  children,
  baseHeight,
  bgColor,
  buttonBgColor,
  buttonTextColor,
  shortText,
}: ExpandingTextBlock) => {
  const textRef = useRef(null)
  const [exp, setExp] = useState(false)
  const [targetHeight, setTargetHeight] = useState('10px')

  const springStyle = useSpring({
    height: targetHeight,
    config: { tension: 200, mass: 1 },
  })

  useEffect(() => {
    if (textRef) {
      textRef.current.style.height = 'auto'
      setTargetHeight(textRef.current.scrollHeight + 'px')
      textRef.current.style.height = ''
    }
  }, [exp])

  const buttonStyle = `
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    color: ${buttonTextColor};
    border: 2px solid ${buttonTextColor};
    background-color: rgba(0,0,0,0);
    display: inline-block;
    margin-top: 2rem;
    font-weight: bold;
    transition: color, background-color 0.3s;
    &:hover {
      cursor: pointer;
      background-color: ${buttonTextColor};
      color: ${buttonBgColor};

    }
  `

  return (
    <div>
      <animated.div
        style={springStyle}
        css={css`
          width: 100%;
          overflow: hidden;
        `}
        ref={textRef}
      >
        {shortText}
        {exp && children}
      </animated.div>
      {exp ? (
        <div
          css={css`
            ${buttonStyle}
          `}
          onClick={() => setExp(false)}
        >
          Read Less...
        </div>
      ) : (
        <div
          css={css`
            ${buttonStyle}
          `}
          onClick={() => setExp(true)}
        >
          Read More...
        </div>
      )}
    </div>
  )
}

export default ExpandingTextBlock
