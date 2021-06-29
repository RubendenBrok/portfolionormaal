/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import ogimg from '../images/ogimg.jpg'

interface Props {
  description?: string
  lang?: string
  meta: any
  title: string
}

const SEO = ({ description, lang, meta, title }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'charSet',
          content: 'utf-8',
        },
        {
          name: `description`,
          content:
            "I'm a creative freelance webdeveloper and designer who specializes in fun and interactive user experiences.",
        },
        {
          property: `og:title`,
          content: 'Ruben den Brok | Webdeveloper & Designer',
        },
        {
          property: `og:description`,
          content:
            'Ruben den Brok is a creative freelance webdeveloper and designer who specializes in fun and interactive user experiences.',
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: ogimg,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: 'Ruben den Brok',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content:
            'Ruben den Brok is a creative freelance webdeveloper and designer who specializes in fun and interactive user experiences.',
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `nl`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
