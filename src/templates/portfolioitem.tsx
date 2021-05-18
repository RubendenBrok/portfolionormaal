/** @jsx jsx */

import React, { useState } from 'react'
import { css, jsx } from '@emotion/react'
import ArrowLeft from '../images/svg/arrowleftblack.svg'
import ArrowRight from '../images/svg/arrowrightblack.svg'
import { StructuredText } from 'react-datocms'

import { LinkButton } from '../components/button'

import { PortfolioImage } from '../components/portfolioimage'
import Layout from '../components/layout'

export function PortfolioItem({ pageContext }: any) {
  console.log(pageContext)

  const series = pageContext.series.node

  const [showImg, setShowImg] = useState(true)
  const [currentItem, setCurrentItem] = useState(0)

  const fadeDuration = 200

  const handlePortfolioBrowse = (index: number) => {
    setShowImg(false)
    setTimeout(() => {
      handlePortfolioItemChange(index)
      setShowImg(true)
    }, fadeDuration)
  }

  const handlePortfolioItemChange = (change: number) => {
    let i = currentItem + change
    if (i < 0) {
      i = series.kunstwerk.length - 1
    } else if (i > series.kunstwerk.length - 1) {
      i = 0
    }
    setCurrentItem(i)
  }

  return (
    <Layout>
      <div className="container">
        {/* <div
        css={css`
          &:hover {
            cursor: pointer;
          }
        `}
        onClick={() => goBack()}
        role="button"
      >
        TERUG
      </div> */}
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
                justify-content: center;
                align-items: center;
              `}
            >
              <div
                className="arrowContainer"
                css={css``}
                onClick={() => handlePortfolioBrowse(-1)}
                role="button"
              >
                <ArrowLeft className="arrowButton" />
              </div>
              <h3>{series.kunstwerk[currentItem].titel}</h3>

              {/* <div
              css={css`
                opacity: 0.6;
              `}
            >
              {currentItem + 1} / {series.kunstwerk.length}
            </div> */}
              <div
                className="arrowContainer"
                css={css``}
                onClick={() => handlePortfolioBrowse(1)}
                role="button"
              >
                <ArrowRight className="arrowButton" />
              </div>
            </div>

            <div
              css={css`
                transition: opacity ${fadeDuration}ms;
              `}
              className={showImg ? 'show' : 'hide'}
              onClick={() => {
                handlePortfolioBrowse(1)
              }}
              role="button"
            >
              <PortfolioImage
                image={series.kunstwerk[currentItem].afbeelding.gatsbyImageData}
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
              <div>{series.kunstwerk[currentItem].materiaal}</div>
              <div>{series.kunstwerk[currentItem].jaarGemaakt}</div>
            </div>
          </div>

          <div
            css={css`
              width: 35%;
              height: 100%;
            `}
          >
            <h2>{series.titel}</h2>
            <StructuredText data={series.beschrijving.value} />
            {series.kunstwerk[currentItem].shopLink && (
              <LinkButton
                text="Bekijk in shop"
                link={series.kunstwerk[currentItem].shopLink}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioItem
