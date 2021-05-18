/** @jsx jsx */

import React, { useState } from 'react'
import { css, jsx } from '@emotion/react'

import { colors } from '../styles/global'

type buttonProps = {
  text: string
  link: string
}

export function LinkButton({ text, link }: buttonProps) {
  return (
    <a
      css={css`
        padding: 10px 20px 10px 20px;
        border-radius: 10px;
        display: inline-block;
        margin-top: 20px;
        text-decoration: none;
        border: 1px solid ${colors.textColor};
      `}
      href={'//' + link}
      target="blank"
    >
      {text}
    </a>
  )
}
