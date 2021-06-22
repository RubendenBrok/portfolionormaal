/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import ScrollableSection from 'react-update-url-on-scroll'
import React from 'react'
import { blockSize } from '../pages/index'

type divisionProps = {
  children: React.ReactNode
  hash: string
}

export const Division = React.memo(function Division({
  children,
  hash,
}: divisionProps) {
  return (
    <div
      id={hash}
      css={css`
        width: 100%;
        padding-bottom: 2rem;
        position: relative;
        min-height: 50vh;
      `}
    >
      {children}
    </div>
  )
})

export default Division
