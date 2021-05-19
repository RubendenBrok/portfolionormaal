import Layout from '../components/layout'
import React from 'react'
import { graphql } from 'gatsby'
import { Gedicht } from '../components/gedicht'

export function Poezie({ data }: any) {
  return (
    <Layout>
      <h1>Poëzie</h1>
      {data.allDatoCmsGedichten.edges.map((gedicht: any, index: number) => {
        return <Gedicht gedichtData={gedicht.node} key={index} />
      })}
    </Layout>
  )
}

export default Poezie

export const query = graphql`
  query poezieQuery {
    allDatoCmsGedichten(sort: { fields: positieInDeLijst, order: DESC }) {
      edges {
        node {
          afbeelding {
            gatsbyImageData(imgixParams: { fit: "FULL_WIDTH" })
          }
          bijschrift {
            value
          }
          titel
          datum
          positieInDeLijst
        }
      }
    }
  }
`
