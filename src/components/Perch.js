import React, { Component } from "react"
import Image from "gatsby-image"

class Perch extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
        <>
        <div>       
        <p>{this.props.name}</p>
        <Image fluid={this.props.image} />
        </div>
        </>
    )
  }
}

export default Perch