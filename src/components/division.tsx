/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import ScrollableSection from 'react-update-url-on-scroll'
import React from 'react'
import { blockSize } from '../pages/index'

type divisionProps = {
  children: React.ReactNode
  hash: string
  visible: boolean
}

export const Division = React.memo(function Division({
  children,
  hash,
  visible,
}: divisionProps) {
  return (
    <div
      id={hash}
      css={css`
        width: 100%;
        position: relative;
      `}
    >
      {children}
    </div>
  )
})

export default Division
