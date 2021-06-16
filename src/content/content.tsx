import LandingPage from './jsx/landingpage'
import PassionProjects from './jsx/passionprojects'
import React from 'react'

export type contentType = {
  content: React.ReactNode
  bgColor: string
  accentColor1: string
  accentColor2: string
  bgAngle: number
  textColor: string
  clipArr: number[]
  clipOpacity: number
}

export const colors = {
  black: getComputedStyle(document.documentElement).getPropertyValue('--black'),
  white: getComputedStyle(document.documentElement).getPropertyValue('--white'),
  red: getComputedStyle(document.documentElement).getPropertyValue('--red'),
  blue: getComputedStyle(document.documentElement).getPropertyValue('--blue'),
}

export const content: contentType[] = [
  {
    content: <LandingPage />,
    bgColor: colors.white,
    accentColor1: colors.red,
    accentColor2: colors.blue,
    bgAngle: 39,
    clipArr: [135, 90, 180],
    clipOpacity: 1,
    textColor: colors.black,
  },
  {
    content: <PassionProjects />,
    bgColor: colors.blue,
    accentColor1: colors.red,
    accentColor2: colors.black,
    bgAngle: 39,
    clipArr: [70, 50, 50],
    clipOpacity: 1,
    textColor: colors.white,
  },
  {
    content: <PassionProjects />,
    bgColor: colors.black,
    accentColor1: colors.red,
    accentColor2: colors.blue,
    bgAngle: 39,
    clipArr: [55, 80, 180],
    clipOpacity: 0,
    textColor: colors.white,
  },
  {
    content: <LandingPage />,
    bgColor: colors.white,
    accentColor1: colors.red,
    accentColor2: colors.blue,
    bgAngle: 256,
    clipArr: [55, 100, 150],
    clipOpacity: 1,
    textColor: colors.black,
  },
]

export default content
