/** @jsx jsx */

import { css, jsx } from '@emotion/react'

import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { globalCss, variables, colors } from '../styles/global'

import { useSpring, config } from 'react-spring'

import {
  interpolateNumber,
  interpolateRgb,
  interpolateNumberArray,
} from 'd3-interpolate'

import FancyScrollBlock from '../components/fancyscrollblock'
import Division from '../components/division'

import content, { contentType } from '../content/content'
import '../styles/global.css'

type styleProps = {
  opacity: number
  scale: number
  visible: boolean
}

type transitionProps = {
  bgColor: string
  accentColor1: string
  accentColor2: string
  bgAngle: number
  textColor: string
  clipArr: number[]
  clipOpacity: number
  atDivision: number
}

const initStyleProps = [
  {
    opacity: 1,
    scale: 1,
    visible: true,
  },
  {
    opacity: 1,
    scale: 1,
    visible: false,
  },
  {
    opacity: 1,
    scale: 1,
    visible: false,
  },
  {
    opacity: 1,
    scale: 1,
    visible: false,
  },
]

const initTransitionProps = {
  bgColor: content[0].bgColor,
  accentColor1: content[0].accentColor1,
  accentColor2: content[0].accentColor2,
  bgAngle: 39,
  textColor: content[0].textColor,
  clipArr: [55, 100, 150],
  clipOpacity: 1,
  atDivision: 0,
}

const transitionSize = window.innerHeight - 150,
  minScale = 0.3,
  minOpacity = 0.2,
  scrollOffset = 0

const blockSize = window.innerHeight

const IndexPage = () => {
  const [styleProps, setStyleProps] = useState<styleProps[]>([
    ...initStyleProps,
  ])

  const [transitionProps, setTransitionProps] =
    useState<transitionProps>(initTransitionProps)

  useEffect(() => {
    const handleScroll = () => {
      if (
        (window.pageYOffset - scrollOffset) % blockSize <= transitionSize &&
        (window.pageYOffset - scrollOffset) % blockSize > 0
      ) {
        let transitionFactor =
          ((window.pageYOffset - scrollOffset) % blockSize) / transitionSize
        transitionFactor = transitionFactor * transitionFactor
        let newStyleState = [...styleProps]
        let currentBlock = Math.floor(
          (window.pageYOffset - scrollOffset) / blockSize
        )

        newStyleState.forEach((block: styleProps) => (block.visible = false))

        newStyleState[currentBlock] = {
          opacity: interpolateNumber(minOpacity, 1)(1 - transitionFactor),
          scale: interpolateNumber(minScale, 1)(1 - transitionFactor),
          visible: true,
        }
        newStyleState[currentBlock + 1] = {
          opacity: interpolateNumber(minOpacity, 1)(transitionFactor),
          scale: interpolateNumber(minScale, 1)(transitionFactor),
          visible: true,
        }

        let newTransitionState = { ...transitionProps }

        newTransitionState.atDivision = currentBlock

        newTransitionState.bgColor = interpolateRgb(
          content[currentBlock].bgColor,
          content[currentBlock + 1]
            ? content[currentBlock + 1].bgColor
            : content[currentBlock].bgColor
        )(transitionFactor)

        newTransitionState.accentColor1 = interpolateRgb(
          content[currentBlock].accentColor1,
          content[currentBlock + 1]
            ? content[currentBlock + 1].accentColor1
            : content[currentBlock].accentColor1
        )(transitionFactor)

        newTransitionState.accentColor2 = interpolateRgb(
          content[currentBlock].accentColor2,
          content[currentBlock + 1]
            ? content[currentBlock + 1].accentColor2
            : content[currentBlock].accentColor2
        )(transitionFactor)

        newTransitionState.bgAngle = interpolateNumber(
          content[currentBlock].bgAngle,
          content[currentBlock + 1]
            ? content[currentBlock + 1].bgAngle
            : content[currentBlock].bgAngle
        )(transitionFactor)

        newTransitionState.clipOpacity = interpolateNumber(
          content[currentBlock].clipOpacity,
          content[currentBlock + 1]
            ? content[currentBlock + 1].clipOpacity
            : content[currentBlock].clipOpacity
        )(transitionFactor)

        newTransitionState.clipArr = interpolateNumberArray(
          content[currentBlock].clipArr,
          content[currentBlock + 1]
            ? content[currentBlock + 1].clipArr
            : content[currentBlock].clipArr
        )(transitionFactor)

        newTransitionState.textColor = interpolateRgb(
          content[currentBlock].textColor,
          content[currentBlock + 1]
            ? content[currentBlock + 1].textColor
            : content[currentBlock].textColor
        )(transitionFactor)

        setStyleProps([...newStyleState])
        setTransitionProps({ ...newTransitionState })
      }
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Layout {...transitionProps}>
      <SEO title="Home" />

      {content.map((block: contentType, index: number) => {
        return (
          <Division
            hash="Home"
            visible={styleProps[index].visible}
            key={'division' + index}
          >
            <FancyScrollBlock
              opacity={styleProps[index].opacity}
              scale={styleProps[index].scale}
            >
              {block.content}
            </FancyScrollBlock>
          </Division>
        )
      })}
    </Layout>
  )
}

export default IndexPage
