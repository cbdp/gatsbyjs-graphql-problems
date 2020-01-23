import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Perch from "./Perch.js"

function getParrotsList(data) {
  const birdArray = []
  data.allBirdsJson.edges.forEach(item =>
    birdArray.push(
      <Perch
        name={item.node.name}
        image={item.node.image}
      />
    )
  )
  return birdArray
}

const NiceBirds = ({ children }) => (
    <StaticQuery
      query={graphql`
query NiceBirds {
  allBirdsJson(filter: {type: {eq: "Nice"}}) {
    edges {
      node {
        name
        image { 
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid

                }
            }
        }
      }
    }
  }
}

            `}
      render={data => <div className="CycleSection__grid u-clearfix">{getParrotsList(data)}</div>}
    />
)

export default NiceBirds