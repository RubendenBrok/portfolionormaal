/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { useState, useEffect } from 'react'

import { variables } from '../styles/global'

type textProps = {
  bgColor: string
  textColor: string
  text: string
  animated: boolean
  delay?: number
  fontSize?: string
  rounded?: boolean
}
export const ColoredBgText = ({
  bgColor,
  textColor,
  animated,
  delay,
  text,
  fontSize,
  rounded,
}: textProps) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (animated) {
      setTimeout(
        () => {
          setShow(true)
        },
        delay ? delay : 0
      )
    } else {
      setShow(true)
    }
  }, [])

  return (
    <h4
      css={css`
        display: inline;
        padding: 0 10px;
        transition: ${animated ? 'clip-path 1s' : 'none'};
        font-size: ${fontSize};
        ${variables.mobile} {
          font-size: calc(${fontSize} / 1.7);
        }
      `}
      style={{
        color: textColor,

        backgroundColor: bgColor,

        clipPath: !show
          ? 'polygon(0 0, 0 0, 0 100%, 0 100%)'
          : 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
        borderRadius: rounded ? '6px' : '0',
      }}
    >
      {text}
    </h4>
  )
}

export default ColoredBgText
