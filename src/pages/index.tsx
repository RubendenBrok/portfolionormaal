/** @jsx jsx */

import { css, jsx } from '@emotion/react'

import React, { useEffect, useState, useRef, HtmlHTMLAttributes } from 'react'
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

type pageStyleProps = {
  bgColor: string
  accentColor1: string
  accentColor2: string
  bgAngle: number
  textColor: string
  clipArr: number[]
  clipOpacity: number
  currentBlockIndex: number
}

const transitionSize =
    typeof window !== 'undefined' ? window.innerHeight / 1.5 : 500,
  scrollOffset = 0

const initPageStyleProps = {
  bgColor: content[0].bgColor,
  accentColor1: content[0].accentColor1,
  accentColor2: content[0].accentColor2,
  bgAngle: 39,
  textColor: content[0].textColor,
  clipArr: [55, 100, 150],
  clipOpacity: 1,
  currentBlockIndex: 0,
}

export const blockSize =
  typeof window !== 'undefined' ? window.innerHeight : 700

const IndexPage = () => {
  const elements: any = []

  let h = typeof window !== 'undefined' ? window.innerHeight : 800

  const [transitionPropArray, setTransitionPropArray] = useState<number[]>([])

  const [pageStyleProps, setPageStyleProps] =
    useState<pageStyleProps>(initPageStyleProps)

  const { y } = useSpring({
    from: { y: typeof window !== 'undefined' ? window.pageYOffset : 0 },
    config: { mass: 10, tension: 250, precision: 2, friction: 90 },
    onChange: () => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, y.get())
      }
    },
    onStart: () => {
      if (typeof window !== 'undefined') {
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
    let newTransitionPropArray = [...transitionPropArray]
    elements.forEach((element: HTMLElement, index: number) => {
      const scrollOffset = window ? window.innerHeight / 4 : 200
      let y = element.getBoundingClientRect().y - scrollOffset
      let elementH = element.clientHeight
      newTransitionPropArray[index] = 1
      if (y < -elementH + transitionSize) {
        if (y > -elementH) {
          newTransitionPropArray[index] = (y + elementH) / transitionSize
        } else {
          newTransitionPropArray[index] = 0
        }
      }
      if (y > h - transitionSize) {
        if (y < h) {
          newTransitionPropArray[index] =
            1 - (y - (h - transitionSize)) / transitionSize
        } else {
          newTransitionPropArray[index] = 0
        }
      }

      let newPageStyleProps = { ...pageStyleProps }
      let transitionIndex = newTransitionPropArray.findIndex((item) => item > 0)
      if (transitionIndex < 0) {
        transitionIndex = 0
      }

      if (transitionIndex < content.length - 1) {
        newPageStyleProps.bgColor = interpolateRgb(
          content[transitionIndex + 1].bgColor,
          content[transitionIndex].bgColor
        )(newTransitionPropArray[transitionIndex])

        newPageStyleProps.textColor = interpolateRgb(
          content[transitionIndex + 1].textColor,
          content[transitionIndex].textColor
        )(newTransitionPropArray[transitionIndex])

        newPageStyleProps.accentColor1 = interpolateRgb(
          content[transitionIndex + 1].accentColor1,
          content[transitionIndex].accentColor1
        )(newTransitionPropArray[transitionIndex])

        newPageStyleProps.accentColor2 = interpolateRgb(
          content[transitionIndex + 1].accentColor2,
          content[transitionIndex].accentColor2
        )(newTransitionPropArray[transitionIndex])
      } else {
        newPageStyleProps.bgColor = content[transitionIndex].bgColor
        newPageStyleProps.textColor = content[transitionIndex].textColor
        newPageStyleProps.accentColor1 = content[transitionIndex].accentColor1
        newPageStyleProps.accentColor2 = content[transitionIndex].accentColor2
      }

      newPageStyleProps.currentBlockIndex = transitionIndex

      setTransitionPropArray([...newTransitionPropArray])
      setPageStyleProps({ ...newPageStyleProps })
    })
  }

  useEffect(() => {
    content.forEach((element: contentType, index: number) => {
      elements.push(document.getElementById(element.name))
    }, [])

    handleScroll()
    y.stop()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Layout {...pageStyleProps} y={y}>
      <SEO title="Home" />

      {content.map((block: contentType, index: number) => {
        return (
          <Division
            hash={content[index].name}
            visible={true}
            key={'division' + index}
          >
            <FancyScrollBlock transitionFactor={transitionPropArray[index]}>
              {block.content}
            </FancyScrollBlock>
          </Division>
        )
      })}
    </Layout>
  )
}

export default IndexPage
