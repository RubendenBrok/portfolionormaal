/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useEffect } from 'react'

type scrollProps = {
  opacity: number
  scale: number
  children: React.ReactNode
}

export const FancyScrollBlock = React.memo(function FancyScroll({
  opacity,
  scale,
  children,
}: scrollProps) {
  return (
    <div
      css={css`
        width: 100%;
        height: 80%;
        position: absolute;
        left: 0px;
        top: 50%;
      `}
      style={{
        opacity: opacity,
        transform: `translate(${30 * (0 - (1 - scale))}%,-50%) scale(${scale})`,
        //transform: 'translateY(-50%)',
      }}
    >
      {children}
    </div>
  )
})

export default FancyScrollBlock
