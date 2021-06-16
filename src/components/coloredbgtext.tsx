/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { useState, useEffect } from 'react'

type textProps = {
  bgColor: string
  textColor: string
  text: string
  animated: boolean
  delay?: number
  fontSize?: string
}
export const ColoredBgText = ({
  bgColor,
  textColor,
  animated,
  delay,
  text,
  fontSize,
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
    }
  }, [])

  return (
    <h4
      css={css`
        font-size: ${fontSize};
        background-color: ${bgColor};
        padding: 0 10px;
        color: ${textColor};
        clip-path: ${!show
          ? 'polygon(0 0, 0 0, 0 100%, 0 100%)'
          : 'polygon(100% 0, 0 0, 0 100%, 100% 100%)'};
        transition: clip-path 1s;
      `}
    >
      {text}
    </h4>
  )
}

export default ColoredBgText
