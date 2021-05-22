/*
const path = require('path')
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query AllPortfolioSeries {
      allDatoCmsPortfolioSerie {
        edges {
          node {
            beschrijving {
              value
            }
            kunstwerk {
              afbeelding {
                gatsbyImageData(imgixParams: { fit: "FULL_WIDTH" })
              }
              jaarGemaakt
              materiaal
              titel
              shopLink
            }
            titel
          }
        }
      }
    }
  `)
  const productTemplate = path.resolve(`src/templates/portfolioitem.tsx`)
  queryResults.data.allDatoCmsPortfolioSerie.edges.forEach((edge, index) => {
    createPage({
      path: `/portfolio/${index}`,
      component: productTemplate,
      context: {
        // This time the entire product is passed down as context
        series: edge,
      },
    })
  })
}
*/
