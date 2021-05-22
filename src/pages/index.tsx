/** @jsx jsx */

import { css, jsx } from '@emotion/react'

import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { globalCss, variables, colors } from '../styles/global'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>SITE TITEL</h1>
  </Layout>
)

export default IndexPage
