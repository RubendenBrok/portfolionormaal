/** @jsx jsx */

import React from 'react'
import { css, jsx } from '@emotion/react'
import { GatsbyImage } from 'gatsby-plugin-image'

export function PortfolioImage({ image }: any) {
  return (
    <div
      css={css`
        &:hover {
          cursor: pointer;
        }
      `}
    >
      <GatsbyImage image={image} alt="" />
    </div>
  )
}
