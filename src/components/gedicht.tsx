/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { StructuredText } from 'react-datocms'

export function Gedicht({ gedichtData }: any) {
  return (
    <div
      className="container"
      css={css`
        max-width: 60%;
      `}
    >
      {gedichtData.titel && <h1>{gedichtData.titel}</h1>}
      <GatsbyImage image={gedichtData.afbeelding.gatsbyImageData} alt="" />
      {gedichtData.bijschrift && (
        <StructuredText data={gedichtData.bijschrift.value} />
      )}
      {gedichtData.datum && <div>{gedichtData.datum}</div>}
    </div>
  )
}
