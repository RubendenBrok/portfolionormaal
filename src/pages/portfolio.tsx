/** @jsx jsx */

import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { StructuredText } from 'react-datocms'
import { css, jsx } from '@emotion/react'
import { GatsbyImage } from 'gatsby-plugin-image'

import ArrowLeft from '../images/svg/arrowleftblack.svg'
import ArrowRight from '../images/svg/arrowrightblack.svg'

export const Portfolio = ({ data }: any) => {
  const portfolio = data.allDatoCmsPortfolioSerie.edges.map((item: any) => {
    return item.node
  })
  console.log(portfolio)

  const [userZoomedIn, setUserZoomedIn] = useState(false)
  const [currentSeries, setCurrentSeries] = useState(0)

  const [currentItem, setCurrentItem] = useState(0)

  const handlePortfolioClick = (index: number) => {
    setUserZoomedIn(true)
    setCurrentSeries(index)
    setCurrentItem(0)
  }

  const goBack = () => {
    setUserZoomedIn(false)
  }

  const handlePortfolioBrowse = (change: number) => {
    let i = currentItem + change
    if (i < 0) {
      i = portfolio[currentSeries].kunstwerk.length - 1
    } else if (i > portfolio[currentSeries].kunstwerk.length - 1) {
      i = 0
    }
    setCurrentItem(i)
  }

  return (
    <Layout>
      <SEO title="Portfolio" />

      {!userZoomedIn && (
        <div className="container">
          <h1>Portfolio</h1>
          <ResponsiveMasonry
            columsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter={'20px'}>
              {portfolio.map((item: any, index: number) => {
                return (
                  <div
                    css={css`
                      &:hover {
                        cursor: pointer;
                        opacity: 0.4;
                      }
                    `}
                    onClick={() => handlePortfolioClick(index)}
                    key={index + 'img'}
                  >
                    <GatsbyImage
                      image={item.hoofdafbeelding.gatsbyImageData}
                      alt=""
                    />
                  </div>
                )
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      )}
      {userZoomedIn && (
        <div className="container">
          <div
            css={css`
              &:hover {
                cursor: pointer;
              }
            `}
            onClick={() => goBack()}
          >
            TERUG
          </div>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              width: 100%;
            `}
          >
            <div
              css={css`
                width: 55%;
                position: relative;
              `}
            >
              <div
                css={css`
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                `}
              >
                <h3>{portfolio[currentSeries].kunstwerk[currentItem].titel}</h3>

                <div
                  css={css`
                    width: 20%;
                    min-width: 120px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                  `}
                >
                  <div
                    className="arrowContainer"
                    css={css``}
                    onClick={() => handlePortfolioBrowse(-1)}
                  >
                    <ArrowLeft className="arrowButton" />
                  </div>
                  <div
                    css={css`
                      opacity: 0.6;
                    `}
                  >
                    {currentItem + 1} /{' '}
                    {portfolio[currentSeries].kunstwerk.length}
                  </div>
                  <div
                    className="arrowContainer"
                    css={css``}
                    onClick={() => handlePortfolioBrowse(1)}
                  >
                    <ArrowRight className="arrowButton" />
                  </div>
                </div>
              </div>
              <div
                css={css`
                  &:hover {
                    cursor: pointer;
                  }
                `}
                onClick={() => {
                  handlePortfolioBrowse(1)
                }}
              >
                <GatsbyImage
                  image={
                    portfolio[currentSeries].kunstwerk[currentItem].afbeelding
                      .gatsbyImageData
                  }
                  alt=""
                />
              </div>

              <div
                css={css`
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  font-size: 0.8rem;
                `}
              >
                <div>
                  {portfolio[currentSeries].kunstwerk[currentItem].materiaal}
                </div>
                <div>
                  {portfolio[currentSeries].kunstwerk[currentItem].jaarGemaakt}
                </div>
              </div>
            </div>

            <div
              css={css`
                width: 35%;
                height: 100%;
              `}
            >
              <h2>{portfolio[currentSeries].titel}</h2>
              <StructuredText
                data={portfolio[currentSeries].beschrijving.value}
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query portfolioQuery {
    allDatoCmsPortfolioSerie {
      edges {
        node {
          kunstwerk {
            titel
            jaarGemaakt
            materiaal
            afbeelding {
              gatsbyImageData(imgixParams: { fit: "FULL_WIDTH" })
            }
          }
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
