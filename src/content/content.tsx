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
  name: string
}

export const colors = {
  black:
    typeof window !== 'undefined'
      ? getComputedStyle(document.documentElement).getPropertyValue('--black')
      : 'rgb(40,40,40)',
  white:
    typeof window !== 'undefined'
      ? getComputedStyle(document.documentElement).getPropertyValue('--white')
      : 'rgb(240,240,240)',
  red:
    typeof window !== 'undefined'
      ? getComputedStyle(document.documentElement).getPropertyValue('--red')
      : 'rgb(255,100,100)',
  blue:
    typeof window !== 'undefined'
      ? getComputedStyle(document.documentElement).getPropertyValue('--blue')
      : 'rgb(0,0,255)',
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
    name: 'Home',
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
    name: 'AboutMe',
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
    name: 'PassionProjects',
  },
  {
    content: <LandingPage />,
    bgColor: colors.black,
    accentColor1: colors.red,
    accentColor2: colors.blue,
    bgAngle: 256,
    clipArr: [55, 100, 150],
    clipOpacity: 1,
    textColor: colors.white,
    name: 'Flow',
  },
]

export default content
