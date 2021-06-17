/** @jsx jsx */

import { css, jsx } from '@emotion/react'

import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { globalCss, variables, colors } from '../styles/global'

import { disableScroll, enableScroll } from '../util/preventscroll.js'

import { useSpring, config as springConfig } from 'react-spring'

import {
  interpolateNumber,
  interpolateRgb,
  interpolateNumberArray,
} from 'd3-interpolate'

import FancyScrollBlock from '../components/fancyscrollblock'
import Division from '../components/division'

import content, { contentType } from '../content/content'
import '../styles/global.css'
import { config } from 'react-transition-group'

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
  currentBlockIndex: number
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
  currentBlockIndex: 0,
}

const transitionSize =
    typeof window !== 'undefined' ? window.innerHeight - 200 : 500,
  minScale = 0.3,
  minOpacity = 0.2,
  scrollOffset = 0

export const blockSize =
  typeof window !== 'undefined' ? window.innerHeight : 700

const IndexPage = () => {
  const [styleProps, setStyleProps] = useState<styleProps[]>([
    ...initStyleProps,
  ])
  const timerRef = useRef<any>()

  const [transitionProps, setTransitionProps] =
    useState<transitionProps>(initTransitionProps)

  const { y } = useSpring({
    from: { y: typeof window !== 'undefined' ? window.pageYOffset : 0 },
    config: { mass: 10, tension: 250, precision: 2, friction: 90 },
    onChange: () => {
      if (typeof window !== 'undefined') {
        console.log('scroll')
        window.scrollTo(0, y.get())
      }
    },
    onStart: () => {
      if (typeof window !== 'undefined') {
        console.log('hoi')
        disableScroll()
      }
    },
    onRest: () => {
      if (typeof window !== 'undefined') {
        enableScroll()
      }
      handleScroll()
    },
  })

  const handleScroll = () => {
    let currentBlock = Math.floor((window.pageYOffset + 200) / blockSize)
    let newTransitionState = { ...transitionProps }
    let newStyleState = [...styleProps]
    if (
      (window.pageYOffset - scrollOffset) % blockSize <= transitionSize &&
      (window.pageYOffset - scrollOffset) % blockSize >= 0
    ) {
      let transitionFactor =
        ((window.pageYOffset - scrollOffset) % blockSize) / transitionSize
      transitionFactor = transitionFactor * transitionFactor

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

      newTransitionState.currentBlockIndex = currentBlock

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
    } else {
      newStyleState[currentBlock].opacity = 1
      newStyleState[currentBlock].scale = 1
      newStyleState[currentBlock].visible = true

      if (newStyleState[currentBlock + 1]) {
        newStyleState[currentBlock + 1].opacity = 1
        newStyleState[currentBlock + 1].scale = 1
        newStyleState[currentBlock + 1].visible = true
      }

      newTransitionState.textColor = content[currentBlock].textColor
      newTransitionState.bgColor = content[currentBlock].bgColor
      newTransitionState.accentColor1 = content[currentBlock].accentColor1
      newTransitionState.accentColor2 = content[currentBlock].accentColor2
      newTransitionState.currentBlockIndex = currentBlock
    }
    setStyleProps([...newStyleState])
    setTransitionProps({ ...newTransitionState })
  }

  useEffect(() => {
    handleScroll()
    y.stop()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Layout {...transitionProps} y={y}>
      <SEO title="Home" />

      {content.map((block: contentType, index: number) => {
        return (
          <Division
            hash={content[index].name}
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
