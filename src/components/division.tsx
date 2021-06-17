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
        height: 100vh;
        width: 100%;
        position: relative;
      `}
    >
      {visible && children}
    </div>
  )
})

export default Division
