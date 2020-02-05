import React, { Component } from "react"
import Image from "gatsby-image"

class Perch extends Component {
  render() {
    return (
        <>
        <div>       
        <p>{this.props.name}</p>
        <Image fluid={this.props.image.childImageSharp.fluid} />
        </div>
        </>
    )
  }
}

export default Perch