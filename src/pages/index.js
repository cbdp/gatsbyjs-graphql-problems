import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout.js"
import NiceBirds from "../components/NiceBirds.js"

export default () => (
  <Layout>
    <h1>Just the nice birds</h1>
    <NiceBirds />
    <h4>childImageSharp query for images return null</h4>
    <Link to="/SingleParrot/">attempt to just query one via file</Link>
  </Layout>
)