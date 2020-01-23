import React from "react"
import Image from "gatsby-image"
import { graphql } from 'gatsby'

export const query = graphql`
  query {
    file(relativePath: { eq: "red-parrot.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;


const SingleParrot = ({data}) => (
    <>
    <h1>gatsby-image does work with file query</h1>
    <Image fluid={data.file.childImageSharp.fluid} />
    </>
);

export default SingleParrot;