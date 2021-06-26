import LandingPage from './jsx/landingpage'
import PassionProjects from './jsx/passionprojects'
import AboutMe from './jsx/aboutme'
import Contact from './jsx/contact'
import ProfessionalWork from './jsx/professionalwork'

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
  black: 'rgb(58, 58, 58)',
  white: 'rgb(240, 240, 240)',
  red: 'rgb(214, 102, 102)',
  blue: 'rgb(84, 98, 180)',
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
    content: <AboutMe />,
    bgColor: colors.blue,
    accentColor1: colors.black,
    accentColor2: colors.black,
    bgAngle: 39,
    clipArr: [50, 50, 50],
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
    content: <ProfessionalWork />,
    bgColor: colors.red,
    accentColor1: colors.black,
    accentColor2: colors.blue,
    bgAngle: 256,
    clipArr: [55, 100, 150],
    clipOpacity: 1,
    textColor: colors.white,
    name: 'ProfessionalWork',
  },
  {
    content: <Contact />,
    bgColor: colors.white,
    accentColor1: colors.black,
    accentColor2: colors.blue,
    bgAngle: 256,
    clipArr: [55, 100, 150],
    clipOpacity: 1,
    textColor: colors.black,
    name: 'Contact',
  },
]

export default content
