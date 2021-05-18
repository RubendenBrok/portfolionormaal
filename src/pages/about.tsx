/** @jsx jsx */

import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { css, jsx } from '@emotion/react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { StructuredText } from 'react-datocms'

export const About = ({ data }: any) => {
  console.log(data)
  const aboutData = data.allDatoCmsAbout.edges[0].node
  console.log(aboutData)
  return (
    <Layout>
      <div className="container">
        <h1>{aboutData.titel}</h1>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <div
            css={css`
              width: 40%;
            `}
          >
            <StructuredText data={aboutData.text.value} />
          </div>
          <div
            css={css`
              width: 45%;
            `}
          >
            <GatsbyImage
              image={aboutData.afbeelding.gatsbyImageData}
              alt="foto van Marjan"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query aboutQuery {
    allDatoCmsAbout {
      edges {
        node {
          afbeelding {
            gatsbyImageData(imgixParams: { fit: "FULL_WIDTH" })
          }
          text {
            value
          }
          titel
        }
      }
    }
  }
`

export default About
