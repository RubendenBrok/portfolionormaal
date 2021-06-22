/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { useState, useRef, useEffect } from 'react'
import Zoom from 'react-reveal/Zoom'
import ColoredBgText from '../../components/coloredbgtext'
import content, { colors } from '../content'

import flow from '../../video/flowvideo.mp4'
import seacosystem from '../../video/seacosystemvideo.mp4'

import flowScreen from '../../images/flowscreen.png'
import seacosystemScreen from '../../images/seacosystemcreen.png'

import ExpandingListItem from '../../components/expandinglistitem'

export const PassionProjects = () => {
  return (
    <div className="container">
      <Zoom cascade duration={2000}>
        <h1>Passion Projects</h1>
      </Zoom>
      <p
        css={css`
          max-width: 50%;
          margin-top: 4rem;
          margin-bottom: 4rem;
          font-size: 1.4rem;
        `}
      >
        Sometimes a certain topic or theme inspires me, and I start
        experimenting with it. I've always found this{' '}
        <i>learning through play</i> one of the best ways to develop myself, and
        besides that its also just a lot of fun. Here you'll find some of those
        projects.
      </p>
      <Flow />
      <Seacosystem />
    </div>
  )
}

export const Flow = () => {
  return (
    <Project
      title="FLOW"
      video={flow}
      titleAccentColor={colors.black}
      titleTextColor={colors.white}
      techniques="React, Typescript, PixiJS, Logic Pro"
      link="https://flowmusicgenerator.netlify.app/"
    >
      <div
        css={css`
          margin-bottom: 5rem;
        `}
      >
        <p
          css={css`
            margin-top: 10rem;
            font-size: 1rem;
          `}
        >
          Besides being a developer, I am also a musician. Having always been
          interested in the role of randomness in art and music, I wanted to
          build a website that could generate random music. This idea turned
          into Flow, a website you can play with to create your own relaxing
          soundtrack. You can also let it evolve on its own, to generate a
          constantly changing piece of music.
        </p>
        <div
          css={css`
            margin-top: 5rem;
            text-align: left;
          `}
        >
          <ColoredBgText
            text="GOALS FOR THIS PROJECT:"
            bgColor={colors.black}
            animated
            textColor={content[2].textColor}
            fontSize="2.5rem"
            rounded
          />
        </div>
        <ul
          css={css`
            height: 12rem;
            text-align: left;

            & b {
              font-size: 1.3rem;
            }
          `}
        >
          <ExpandingListItem
            title="Get comfortable using React"
            text="Flow was the first thing I built in React, and partially started as
            an exploration of the framework."
          />
          <ExpandingListItem
            title="Clear visual UI"
            text="I wanted to create a minimalistic user interface. The main
            target was to make the relation between the users input and the
            changes in music as clear as possible."
          />
          <ExpandingListItem
            title="Random generation of music that still sounds cohesive and musical"
            text="I composed and created all the samples Flow uses in Logic.
            Each sample has an array of chords it can be played on, this ensures
            that samples will stay the same when they can (which gives a more
            musical sound) but will always fit together with the current
            harmony."
          />
        </ul>
      </div>
    </Project>
  )
}

export const Seacosystem = () => {
  return (
    <Project
      title="SEACOSYSTEM"
      video={seacosystem}
      titleAccentColor={colors.black}
      titleTextColor={colors.white}
      techniques="React, Typescript, PixiJS, Logic Pro"
      link="https://seacosystem.netlify.app/"
    >
      <div css={css``}>
        <p
          css={css`
            margin-top: 10rem;
            font-size: 1rem;
          `}
        >
          I saw some video's about simulating natural selection and evolution
          which greatly inspired me, and I decided to try to make something
          similar to practice my Javascript skills. Seacosystem turned out as a
          small sandbox simulation game in which you can let different species
          of fish evolve as you try to balance their ecosystem.
        </p>
        <div
          css={css`
            margin-top: 5rem;
            text-align: left;
          `}
        >
          <ColoredBgText
            text="GOALS FOR THIS PROJECT:"
            bgColor={colors.black}
            animated
            textColor={content[2].textColor}
            fontSize="2.5rem"
            rounded
          />
        </div>
        <ul
          css={css`
            height: 20rem;
            text-align: left;
            & b {
              font-size: 1.3rem;
            }
          `}
        >
          <ExpandingListItem
            title="Build a simulation system in which agents take different actions
            based on their current state (eg. Hunger, fleeing etc.)."
            text="This was the first challenge of the project. Each fish should
            constantly reassess its surroundings and inner state to decide on
            its next actions."
          />
          <ExpandingListItem
            title="Have the agents in the simulation 'evolve'."
            text="When a new fish is born, it inherits its parents properties, but
            also randomly evolves. This makes a basic form of natural selection
            possible (over time the fish will get quicker, if there is a
            scarcity of food, or if there are dangerous enemies)."
          />
          <ExpandingListItem
            title="Give the project a distinct audiovisual style."
            text="I tried to give the whole project its own style, to make it
            feel more polished. In the end I went for a retro-ish look, a bit
            like you're looking out of a submarine window. I designed the fish
            sprites in Blender, and also did sound-design and composition for
            all the sound effects and background music."
          />
        </ul>
      </div>
    </Project>
  )
}

type projectProps = {
  video: string
  title: string
  children: React.ReactNode
  techniques: string
  titleAccentColor: string
  titleTextColor: string
  link: string
  left?: boolean
}

function Project({
  video,
  title,
  children,
  techniques,
  titleAccentColor,
  titleTextColor,
  link,
  left,
}: projectProps) {
  const [hover, setHover] = useState(false)

  return (
    <div
      css={css`
        width: 100%;
        min-height: 200px;
        display: flex;
        flex-direction: ${left ? 'row-reverse' : 'row'};
        justify-content: space-between;
        margin-top: 0rem;
        margin-bottom: 8rem;
        position: relative;
        padding: 30px;
        border-radius: 0px;
      `}
      onMouseEnter={() => {
        setHover(true)
        document.getElementById(video).play()
      }}
      onMouseLeave={() => {
        setHover(false)
        document.getElementById(video).pause()
      }}
    >
      <div
        css={css`
          position: absolute;
          top: 2rem;
          z-index: 1;
          left: 55%;
        `}
      >
        {' '}
        <ColoredBgText
          text={title}
          bgColor={titleAccentColor}
          animated
          textColor={titleTextColor}
          fontSize="5rem"
          rounded
        />
      </div>
      <div
        css={css`
          width: 50%;
          position: relative;
        `}
      >
        <video
          id={video}
          src={video}
          loop
          css={css`
            max-width: 100%;
            max-height: 100%;
            margin-top: 10rem;
          `}
        />
        <div
          css={css`
            display: flex;
            align-items: center;
            margin-bottom: -1rem;
            justify-content: ${left ? 'flex-end' : 'flex-start'};
          `}
        >
          <h2>Techniques used:</h2>
          <p
            css={css`
              font-weight: bold;
              font-size: 1rem;
              margin-left: 0.5rem;
            `}
          >
            {techniques}
          </p>
        </div>
        <a
          href={link}
          target="blank"
          css={css`
            text-align: ${left ? 'right' : 'left'};
          `}
        >
          <h2
            css={css`
              font-size: 2rem;
            `}
          >
            Visit Website
          </h2>
        </a>
      </div>
      <div
        css={css`
          width: 45%;
          position: relative;

          display: flex;
          z-index: 0;
        `}
      >
        {children}
      </div>
    </div>
  )
}

export default PassionProjects
