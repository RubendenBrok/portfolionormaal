/** @jsx jsx */

import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { css, jsx } from '@emotion/react'
import { GatsbyImage } from 'gatsby-plugin-image'

import PortfolioItem from '../components/portfolioitem'

export const Portfolio = ({ data }: any) => {
  const portfolio = data.allDatoCmsPortfolioSerie.edges.map((item: any) => {
    return item.node
  })

  return (
    <Layout>
      <SEO title="TITLE" />

      <div className="container">
        <h1>TITLE</h1>
        <ResponsiveMasonry columsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter={'20px'}>
            {portfolio.map((item: any, index: number) => {
              return (
                <Link to={`/portfolio/${index}`} key={`${index}img`}>
                  <div
                    css={css`
                      &:hover {
                        cursor: pointer;
                        opacity: 0.4;
                      }
                    `}
                  >
                    <GatsbyImage
                      image={item.hoofdafbeelding.gatsbyImageData}
                      alt=""
                    />
                  </div>
                </Link>
              )
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query portfolioQuery {
    allDatoCmsPortfolioSerie {
      edges {
        node {
          hoofdafbeelding {
            gatsbyImageData(imgixParams: { fit: "FULL_WIDTH" })
          }
          titel
          beschrijving {
            value
          }
        }
      }
    }
  }
`

export default Portfolio
