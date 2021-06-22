/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useEffect } from 'react'

type scrollProps = {
  transitionFactor: number
  children: React.ReactNode
}

import { interpolateNumber } from 'd3-interpolate'

const minScale = 0.6,
  minOpacity = 0.2

export const FancyScrollBlock = React.memo(function FancyScroll({
  transitionFactor,
  children,
}: scrollProps) {
  let opacity = interpolateNumber(minOpacity, 1)(transitionFactor)
  let scale = interpolateNumber(minScale, 1)(transitionFactor)
  return (
    <div
      css={css`
        width: 100%;
        position: relative;
      `}
      style={{
        opacity: opacity,
        transform: `translate(${30 * (0 - (1 - scale))}%,0) scale(${scale})`,
      }}
    >
      {children}
    </div>
  )
})

export default FancyScrollBlock
